import commander from 'commander';
import getVersion from './getVersion';
// TODO: move all program defaults to a constants file.
import { DEFAULT_GLOBS } from '../components/globby';
import { joinList } from '../utils';
import type { ProgramOption, ProgramOptions } from '../types';


//  CLI Options for the program.
const OPTION: ProgramOptions = {
  DEBUG: {
    FLAGS: ['-d', '--debug'],
    DESCRIPTION: 'Display debug logging',
  },
  PATTERNS: {
    FLAGS: ['-p', '--patterns <glob-patterns>'],
    DESCRIPTION: 'Patterns for which files to search for colors on',
    DEFAULT: DEFAULT_GLOBS.join(','),
  },
  FORMAT: {
    FLAGS: ['-f', '--format <format>'],
    DESCRIPTION: 'Output format for color report, json or html',
    DEFAULT: 'json',
  },
  OUTPUT: {
    FLAGS: ['-o', '--output <output-path>'],
    DESCRIPTION: 'Path to the color report outputted file',
    DEFAULT: 'hue-radar.report.json',
  },
  CONVERT_TO_HEX: {
    FLAGS: ['-h', '--convert-to-hex'],
    DESCRIPTION: 'Converts all colors to hex, for easier grouping',
    DEFAULT: false,
  },
};

/**
 * Setup commander and parse the process.argv.
 */
export default function initProgram(): commander.Command {
  const program = new commander.Command();
  program.version(getVersion());
  //  Set each option
  Object.values(OPTION).forEach((option: ProgramOption) => {
    program.option(
      joinList(option.FLAGS),
      option.DESCRIPTION,
      option.DEFAULT,
    );
  });
  program.parse(process.argv);
  return program;
}
