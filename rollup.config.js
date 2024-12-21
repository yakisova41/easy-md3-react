import commonjs from "@rollup/plugin-commonjs";
import { dts } from "rollup-plugin-dts";
import typescript from "rollup-plugin-typescript2";

export default [
  {
    input: "easy-md3-react/index.ts",
    output: [
      {
        file: "dist/index.js",
        format: "esm",
        sourcemap: false,
      },
    ],
    plugins: [
      commonjs({
        include: ["node_modules/**"],
      }),
      typescript({
        tsconfig: "./tsconfig.module.json",
      }),
    ],
    external: ["react", "react-dom", "@material/web"],
  },
  {
    input: "easy-md3-react/index.ts",
    output: [
      {
        file: "dist/index.d.ts",
        format: "esm",
        sourcemap: false,
      },
    ],
    plugins: [
      dts({
        tsconfig: "./tsconfig.module.json",
      }),
    ],
    external: ["react", "react-dom", "@material/web"],
  },
];
