import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import json from "@rollup/plugin-json";
import rollupExternalModules from "rollup-external-modules";
const myterserplugin = terser({
    //sourcemap: true,
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
    {
        external: rollupExternalModules,
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
