import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import fs from "fs";
import path from "path";
import dts from "rollup-plugin-dts";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import typescript from "rollup-plugin-typescript2";

const getFolders = (dir) => {
  return fs
    .readdirSync(dir)
    .filter((file) => fs.statSync(path.join(dir, file)).isDirectory());
};

export const plugins = [
  peerDepsExternal(),
  nodeResolve({ browser: true }),
  commonjs(), // Converts CommonJS modules to ES6

  babel({
    babelHelpers: "bundled",
    presets: [
      "@babel/preset-env", // Ensure modern JavaScript features are supported
      ["@babel/preset-react", { runtime: "automatic" }], // Use the automatic runtime
    ],
  }),
  typescript({
    tsconfig: "tsconfig.json",
  }),
  postcss({
    modules: true,
  }),

  terser(),
];

const folderBuildConfigs = getFolders("./src/components").map((folder) => {
  return {
    input: `src/components/${folder}/index.ts`,
    output: [
      {
        dir: `dist/esm/components/${folder}`,
        sourcemap: true,
        exports: "named",
        format: "esm",
      },
      {
        dir: `dist/cjs/components/${folder}`,
        sourcemap: true,
        exports: "named",
        format: "cjs",
      },
    ],
    plugins,
    external: ["react", "react-dom", "react/jsx-runtime"],
  };
});

// Add separate dts configuration for both ESM and CJS
const dtsConfigs = folderBuildConfigs.map((config) => {
  return {
    input: config.input,
    output: [
      {
        file: `dist/esm/components/${path.basename(
          config.input,
          ".ts",
        )}/index.d.ts`,
        format: "esm",
      },
      {
        file: `dist/cjs/components/${path.basename(
          config.input,
          ".ts",
        )}/index.d.ts`,
        format: "cjs",
      },
    ],
    plugins: [dts()],
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
      },
      {
        dir: "dist/cjs",
        format: "cjs",
        sourcemap: true,
      },
    ],
    plugins,
    external: ["react", "react-dom", "react/jsx-runtime"],
  },
  ...folderBuildConfigs,
  ...dtsConfigs,
  {
    input: "src/index.ts", // Entry point for declarations
    output: {
      file: "dist/index.d.ts",
      format: "es",
    },
    plugins: [dts()], // Use the dts plugin to handle declaration files
  },
];
