import rgb2hex from 'pure-color/convert/rgb2hex';
import parse from 'pure-color/parse';
import colorRegex from './colorRegex';
import type { HexColor } from '../types';


type RGB = [number, number, number, number?];

type PureColorParse = (colorString: string) => RGB;

type PureColorRgb2Hex = (rgb: RGB) => HexColor;

//  Wrapper around pure-color/parse, adding typing.
function toRGB(colorString: string): RGB {
  //  pure-color/parse can take basically anything and return the rgba for it.
  return (parse as PureColorParse)(colorString);
}

//  Wrapper around pure-color/convert/rgb2hex, adding typing
function convertToHex(rgb: RGB): HexColor {
  return (rgb2hex as PureColorRgb2Hex)(rgb);
}

/**
 * Converts any incoming color to a hex string.
 * Ignores alpha-channel input, so as to avoid 8-digit hex codes.
 *
 * @param {string} colorString - Any given color string (eg: `rgb(0, 0, 0)` or `#444`).
 */
export default function colorConvert(colorString: string): string {
  //  Leave alpha-using color spaces alone.
  if (colorRegex.RGBA(colorString) || colorRegex.HSLA(colorString)) {
    return colorString;
  }
  return convertToHex(toRGB(colorString));
}
