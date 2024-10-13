import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import cssnano from "cssnano";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import typescript from "rollup-plugin-typescript2";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
      sourcemap: true,
      plugins: [terser()],
    },
    {
      file: "dist/index.esm.js",
      format: "esm",
      sourcemap: true,
      plugins: [terser()],
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ tsconfig: "./tsconfig.json" }),
    postcss({
      modules: true,
      extract: true,
      plugins: [cssnano()],
    }),
  ],
  external: ["react", "react-dom"],
  onwarn: (warning, warn) => {
    // Suppress "use client" directive warnings
    if (warning.code === "MODULE_LEVEL_DIRECTIVE") return;
    warn(warning);
  },
};
