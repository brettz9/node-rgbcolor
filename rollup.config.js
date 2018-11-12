import babel from 'rollup-plugin-babel';
import {terser} from 'rollup-plugin-terser';

/**
 * @param {PlainObject} cfg
 * @param {"es"|"umd"} cfg.format
 * @param {boolean} cfg.min
 * @returns {external:Rollup}
 */
function getRollup ({format, min}) {
  const obj = {
    input: 'src/index.js',
    output: {
      format,
      file: `dist/index-${format}${min ? '.min' : ''}.js`,
      name: 'RGBColor'
    },
    plugins: [
      babel()
    ]
  };
  if (min) {
    obj.plugins.push(terser());
  }
  return obj;
}

const rollupExports = [
  getRollup({format: 'umd'}),
  getRollup({format: 'umd', min: true}),
  getRollup({format: 'es'}),
  getRollup({format: 'es', min: true})
];

export default rollupExports;
