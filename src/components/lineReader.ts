import fs from 'fs';
import byline from 'byline';
import { extractColors } from '../helpers';
import type { Color, ReportEntry } from '../types';


// Required option so that we can get an accurate count on the
const BYLINE_OPTIONS = { keepEmptyLines: true };

//  Returns a stream, where each chunk is a line.
function getStream(filePath: string): NodeJS.ReadableStream {
  return byline(fs.createReadStream(filePath, { encoding: 'utf8' }), BYLINE_OPTIONS);
}

/**
 * Reads a file line-by-line, resolving with any colors we find.
 *
 * @param {string} filePath - A given filePath.
 */
export default function lineReader(filePath: string): Promise<ReportEntry[]> {
  const stream = getStream(filePath);
  return new Promise((resolve, reject) => { // eslint-disable-line promise/avoid-new
    let lineNumber = 0;
    let fileReport: ReportEntry[] = [];

    function handleLine(line: string): void {
      lineNumber += 1;
      //  Get the colors from the line
      const colors: Set<Color> = extractColors(line);
      if (colors.size > 0) {
        fileReport = fileReport.concat({
          colors,
          lineNumber,
          file: filePath,
          verbatim: line,
        });
      }
    }
    stream.on('data', handleLine);
    stream.on('close', () => resolve(fileReport));
    stream.on('error', reject);
  });
}
