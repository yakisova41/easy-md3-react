import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";

export default [
  {
    input: "easy-mv3-react/index.ts",
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
];
