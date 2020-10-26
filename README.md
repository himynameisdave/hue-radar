<div align="center" margin="0 auto 20px">
  <h1>hue-radar</h1>
  <p style="font-style: italic;">
    🎨 A tool for discovering all of the colors used in your project.
  </p>
  <div>
    <a href="https://travis-ci.com/github/himynameisdave/hue-radar">
      <img src="https://travis-ci.com/himynameisdave/hue-radar.svg?branch=main" alt="Travis Badge" />
    </a>
    <a href="https://coveralls.io/github/himynameisdave/hue-radar?branch=main">
      <img src="https://coveralls.io/repos/github/himynameisdave/hue-radar/badge.svg?branch=main" alt="Coveralls Badge" />
    </a>
  </div>
</div>

---

**`hue-radar`** is a CLI tool for discovering all of the colors used in your project.

## Purpose

If not maintained well, large and long-running web app projects are likely to have colors littered throughout the codebase. This can make it difficult for your design or front-end team to audit, scale and maintain in the long run. This tool was created to help you identify and wrangle every color in your codebase.

It's sort of like `grep`ing for various colors, but better for the following reasons:

- Handles lots of edge-cases that a complex `grep` may miss.
- Supports all color types (eg: `hex`, `hsl`, `rgb(a)`).
- Presents findings in a normalized and reasonable way.
- Can produce a comprehensive color audit report for you.

## Installation

> _Note: This has only been tested on NodeJS v12+. It is unlikely to work on versions below this._

Install the tool in your project, or (optionally) you can do it globally.

```bash
yarn add hue-radar
npm i hue-radar

# Or globally
npm i -g hue-radar
```

## Usage

Call `hue-radar` with the options you desire, in the project.

```bash
hue-radar -p "*/**.{less,jsx}"
```

### Options

Option | Description | Default | Notes
--- | --- | --- | ---
`--pattern, -p` | Glob pattern for files to match. [More info](https://github.com/isaacs/minimatch#usage). | `"**/*.css,!node_modules/**/*"` | _Defaults are always included before these patterns., so specify overrides if these do not suit you._
`--debug, -d` | Print debug statements. | `false` | 
`--format, -f` | Output format for the color report, `json` or `html` | `json` | 
`--output, -o` | Path to the color report outputted file _(optional)_. | `hue-radar.report.{format}` | 
`--convert-to-hex, -h` | Converts all rgb/hsl colors in the report to hex, for grouping purposes. | `false` | You will still see the discovered source color, this just helps group same colors.

## Contributing

Feel free to file issues with ideas or questions, or submit pull requests with new features or bugfixes.

When submitting pull requests, at the very least please add unit tests for any new functionality, and follow the code styles set forth in the config.

## Licenses

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fhimynameisdave%2Fhue-radar.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fhimynameisdave%2Fhue-radar?ref=badge_large)

---
> _✌️ Built by [Dave](https://github.com/himynameisdave)._
