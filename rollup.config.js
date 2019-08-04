import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import json from "rollup-plugin-json";
const myterserplugin = terser({
  sourcemap: true,
  toplevel: true,
  output: {
    // ecma: 5,
    comments: !1,
    /* 在terserplugin中可以转换成unicode  */
    ascii_only: !0
  },
  compress: {
    // ecma: 5,
    // warnings: !1,
    // comparisons: !1,
    // inline: 2,
    drop_console: true,
    drop_debugger: true,
    pure_funcs: ["console.log"]
  },
  mangle: true
});
export default [
  //   {
  //     input: "./src/index.js",
  //     output: [
  //   {
  //     file: "./dist/index.cjs.min.js",
  //     format: "cjs",
  //     // name: "acorn",
  //     sourceMap: false
  //   },
  //       {
  //         file: "./dist/acorn-parse-escodegen-generate.esm.js",
  //         format: "esm",
  //         sourceMap: false
  //       }
  //     ],
  //     plugins: [
  //       json(),
  //       resolve(), // tells Rollup how to find date-fns in node_modules
  //       commonjs() // converts date-fns to ES modules
  //       // production &&
  //       //   terser() // minify, but only in production
  //       //   buble({transforms: {dangerousForOf: true}})
  //     ]
  //   },
  {
    input: "./src/index.js",
    output: [
      {
        // {
        file: "./dist/acorn-parse-escodegen-generate.esm.js",
        format: "esm",
        sourcemap: true
        //   }
      }
    ],
    plugins: [
      json(),
      //   myterserplugin,
      resolve(), // tells Rollup how to find date-fns in node_modules
      commonjs() // converts date-fns to ES modules
      // production &&
      //   terser() // minify, but only in production
      //   buble({transforms: {dangerousForOf: true}})
    ]
  },
  //   {
  //     input: "./dist/acorn-parse-escodegen-generate.esm.js",
  //     output: [
  //       //   {
  //       //     file: "./dist/index.cjs.min.js",
  //       //     format: "cjs",
  //       //     // name: "acorn",
  //       //     sourceMap: false
  //       //   },
  //       {
  //         file: "./dist/acorn-parse-escodegen-generate.esm.min.js",
  //         format: "esm",
  //         sourceMap: false
  //       }
  //     ],
  //     plugins: [
  //       json(),
  //       myterserplugin,
  //       resolve(), // tells Rollup how to find date-fns in node_modules
  //       commonjs() // converts date-fns to ES modules
  //       // production &&
  //       //   terser() // minify, but only in production
  //       //   buble({transforms: {dangerousForOf: true}})
  //     ]
  //   },
  {
    input: "./src/index.js",
    output: [
      {
        // {
        file: "./dist/acorn-parse-escodegen-generate.esm.min.js",
        format: "esm",
        sourcemap: true
        //   }
      }
    ],
    plugins: [
      json(),
      myterserplugin,
      resolve(), // tells Rollup how to find date-fns in node_modules
      commonjs() // converts date-fns to ES modules
      // production &&
      //   terser() // minify, but only in production
      //   buble({transforms: {dangerousForOf: true}})
    ]
  }
];
