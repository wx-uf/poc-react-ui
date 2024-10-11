import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
import typescript from "rollup-plugin-typescript2";
import babel from "@rollup/plugin-babel";

export default {
  input: "src/index.ts", // Ensure this points to your main entry file
  output: [
    {
      dir: "dist/cjs", // Output file
      format: "cjs", // CommonJS format
      sourcemap: true,
      exports: "named",
      preserveModules: true,
    },
    {
      dir: "dist/esm", // ES module output
      format: "esm", // ES Module format
      sourcemap: true,
      exports: "named",
      preserveModules: true,
    },
  ],
  plugins: [
    resolve(), // Resolves node modules
    commonjs(), // Converts CommonJS modules to ES6
    babel({
      babelHelpers: "bundled",
      presets: [
        "@babel/preset-env", // Ensure modern JavaScript features are supported
        ["@babel/preset-react", { runtime: "automatic" }], // Use the automatic runtime
      ],
    }),
    postcss({
      // Handles CSS modules
      modules: true,
    }),
    typescript({
      tsconfig: "./tsconfig.json",
    }),
    terser(), // Minifies the output
  ],
  external: ["react", "react-dom", "react/jsx-runtime"], // Exclude React from the bundle
};
