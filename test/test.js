import assert from 'assert';
import RGBColor from '../src/index.js';

const color = new RGBColor('darkblue');

const tests = [
  () => {
    assert.ok(color.ok);
    assert.strictEqual(color.r, 0);
    assert.strictEqual(color.g, 0);
    assert.strictEqual(color.b, 0x8b);
  }
];

tests.forEach((t) => t());
