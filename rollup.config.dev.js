import { nodeResolve as resolve } from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import { babel } from "@rollup/plugin-babel";
import serve from "rollup-plugin-serve";
import { terser } from "@rollup/plugin-terser";
import json from '@rollup/plugin-json';

export default {
  input: ["src/slider-button-card.ts"],
  output: {
    dir: "./dist",
    format: "es",
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
    resolve(),
    typescript(),
    json(),
    babel({
      exclude: "node_modules/**",
      babelHelpers: 'bundled',
    }),
    terser(),
    serve({
      contentBase: "./dist",
      host: "0.0.0.0",
      port: 5000,
      allowCrossOrigin: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    }),
  ],
};
