import readPkg from 'read-pkg-up';

/**
 * Reads this project's package.json and returns the version.
 * This is done instead of importing it directly, because it is outside of `src/`, so TS complains.
 */
export default function getVersion(): string {
  const result = readPkg.sync({ cwd: __dirname });
  return result?.packageJson.version ?? '';
}
