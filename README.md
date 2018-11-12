# node-rgbcolor

A Node/browser module to parse color values
Based on rgbcolor.js by Stoyan Stefanov <mailto:sstoo@gmail.com>
<http://www.phpied.com/rgb-color-parser-in-javascript/>

## Usage

```` js
import RGBColor from 'rgbcolor';

const color = new RGBColor('darkblue');

if (color.ok) { // 'ok' is true when the parsing was a success
  // log channels
  console.log(color.r + ', ' + color.g + ', ' + color.b);
  // log HEX and RGB
  console.log(color.toHex());
  console.log(color.toRGB());
}
````
