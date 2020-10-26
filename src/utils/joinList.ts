const COMMA_SPACE = ', ';

/**
 * Joins a list with ", ".
 *
 * @param {string[]} list - List of strings to join.
 */
export default function joinList(list: string[]): string {
  return list.join(COMMA_SPACE);
}
