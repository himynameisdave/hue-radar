export const SUPPORTED_FORMATS = {
  JSON: 'json',
  HTML: 'html',
} as const;

type FormatKeys = keyof typeof SUPPORTED_FORMATS;
export type Formats = typeof SUPPORTED_FORMATS[FormatKeys];


/**
 * Helper for checking if the inputted program format matches a tested format.
 *
 * @param {string} programFormat - The format argument, directly from the user.
 */
export default function getFormatIs(programFormat: string): (format: Formats) => boolean {
  const formatLowerCase = programFormat.toLowerCase();
  return (format: Formats): boolean => format === formatLowerCase;
}
