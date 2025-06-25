import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/slider-button-card.ts',
  output: {
    file: 'dist/slider-button-card.js',
    format: 'es',
    sourcemap: false,
  },
  onwarn(warning, warn) {
    // Suppress warnings about 'this' being rewritten in third-party dependencies
    if (warning.code === 'THIS_IS_UNDEFINED' && warning.id && warning.id.includes('node_modules')) {
      return;
    }
    warn(warning);
  },
  plugins: [
    // Finds and bundles dependencies from node_modules
    nodeResolve(),
    // Converts CommonJS modules to ES6
    commonjs(),
    // Handles JSON imports
    json(),
    // Transpiles TypeScript to JavaScript
    typescript(),
    // Transpiles modern JavaScript for older browsers
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
    }),
    // Minifies the final code
    terser(),
  ],
};