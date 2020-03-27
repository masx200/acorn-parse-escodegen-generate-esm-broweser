import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import json from "@rollup/plugin-json";
const myterserplugin = terser({
    sourcemap: true,
    toplevel: true,
    output: {
        comments: !1,
        ascii_only: !0,
    },
    compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ["console.log"],
    },
    mangle: true,
});
export default [
    // {
    //     input: './src/index.js',
    //     output: [{
    //             file: './dist/acorn-parse-escodegen-generate.esm.js',
    //             format: 'esm',
    //             sourcemap: true
    //         }],
    //     plugins: [
    //         json(),
    //         resolve(),
    //         commonjs()
    //     ]
    // },
    {
        input: "./src/index.js",
        output: [
            {
                file: "./dist/index.js",
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [json(), myterserplugin, resolve(), commonjs()],
    },
];
