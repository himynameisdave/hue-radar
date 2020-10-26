import type commander from 'commander';
import { colorConvert } from '../helpers';
import { flatten } from '../utils';
import type { ReportEntry, ColorsReport } from '../types';


/**
 * Formats the individual file report entries into a unified ColorsReport.
 *
 * @param {ReportEntry[][]} fileReports - Array of file report entries (see lineReader module).
 */
export default function formatReports(fileReports: ReportEntry[][], program: commander.Command): ColorsReport {
  const allColors: ColorsReport = {};
  const discoveries = flatten<ReportEntry>(fileReports);
  discoveries.forEach(({ colors, ...entry }) => {
    [...colors].forEach((colorString: string) => {
      const color = program.convertToHex as boolean
        ? colorConvert(colorString)
        : colorString;
      allColors[color] = allColors[color]?.length > 0 // eslint-disable-line @typescript-eslint/no-unnecessary-condition
        ? [
          ...allColors[color],
          entry,
        ]
        : [entry];
    });
  });
  return allColors;
}
