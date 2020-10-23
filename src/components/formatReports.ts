import flatten from '../utils/flatten';
import type { ReportEntry, ColorsReport } from '../types';


/**
 * Formats the individual file report entries into a unified ColorsReport.
 *
 * @param {ReportEntry[][]} fileReports - Array of file report entries (see lineReader module).
 */
export default function formatReports(fileReports: ReportEntry[][]): ColorsReport {
  const allColors: ColorsReport = {};
  const reports = flatten<ReportEntry>(fileReports);
  reports.forEach(({ colors, ...entry }) => {
    [...colors].forEach(color => {
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
