import babel from "@rollup/plugin-babel";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import generatePackageJson from "rollup-plugin-generate-package-json";
import resolve from "rollup-plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript2";
import pkg from "./package.json";

const fs = require("fs");
const path = require("path");

const getFolders = (dir) => {
  return fs
    .readdirSync(dir)
    .filter((file) => fs.statSync(path.join(dir, file)).isDirectory());
};

export const plugins = [
  resolve(), // Resolves node modules
  commonjs(), // Converts CommonJS modules to ES6
  peerDepsExternal(),
  nodeResolve({ browser: true }),
  babel({
    babelHelpers: "bundled",
    presets: [
      "@babel/preset-env", // Ensure modern JavaScript features are supported
      ["@babel/preset-react", { runtime: "automatic" }], // Use the automatic runtime
    ],
  }),
  typescript({
    useTsconfigDeclarationDir: true,
    tsconfig: "tsconfig.json",
    tsconfigOverride: {
      exclude: ["tests", "**/stories/**"],
    },
  }),
  postcss({
    modules: true,
  }),
  // image(),
  // json(),
  terser(),
];

const subfolderPlugins = (folderName) => [
  ...plugins,
  generatePackageJson({
    baseContents: {
      name: `${pkg.name}/${folderName}`,
      private: true,
      main: "../cjs/index.js",
      module: "./index.js",
      types: "./index.d.ts",
    },
  }),
];

const folderBuildConfigs = getFolders("./src/components").map((folder) => {
  return {
    input: `src/components/${folder}/index.ts`,
    output: {
      dir: `dist/${folder}`,
      sourcemap: true,
      exports: "named",
      format: "esm",
      chunkFileNames: "chunks/[name].[hash].js",
    },
    plugins: subfolderPlugins(folder),
    external: ["react", "react-dom", "react/jsx-runtime"],
  };
});

export default [
  {
    input: "src/index.ts",
    output: [
      {
        dir: "dist/esm",
        format: "esm",
        sourcemap: true,
        exports: "named",
        chunkFileNames: "chunks/[name].[hash].js",
      },
      {
        dir: "dist/cjs",
        format: "cjs",
        sourcemap: true,
        exports: "named",
        chunkFileNames: "chunks/[name].[hash].js",
      },
    ],
    plugins,
    external: ["react", "react-dom", "react/jsx-runtime"],
  },
  ...folderBuildConfigs,
];

// export default {
//   input: 'src/index.ts', // Ensure this points to your main entry file
//   output: [
//     {
//       dir: 'dist/cjs', // Output file
//       format: 'cjs', // CommonJS format
//       sourcemap: true,
//       exports: 'named',
//       preserveModules: true,
//     },
//     {
//       dir: 'dist/esm', // ES module output
//       format: 'esm', // ES Module format
//       sourcemap: true,
//       exports: 'named',
//       preserveModules: true,
//     },
//   ],
//   plugins: [
//     resolve(), // Resolves node modules
//     commonjs(), // Converts CommonJS modules to ES6
//     babel({
//       babelHelpers: 'bundled',
//       presets: [
//         '@babel/preset-env', // Ensure modern JavaScript features are supported
//         ['@babel/preset-react', { runtime: 'automatic' }], // Use the automatic runtime
//       ],
//     }),
//     postcss({
//       // Handles CSS modules
//       modules: true,
//     }),
//     typescript({
//       tsconfig: './tsconfig.json',
//     }),
//     terser(), // Minifies the output
//   ],
//   external: ['react', 'react-dom', 'react/jsx-runtime'], // Exclude React from the bundle
// };
