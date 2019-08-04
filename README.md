# acorn-parse-escodegen-generate-esm-broweser

<!-- acorn-parse-escodegen-generate-esm-broweser -->

在浏览器中使用 `acorn`和`escodegen` 来 进行 `javascript` 源代码 和 `抽象语法树`的相互转换的`ES`模块,

把`escodegen`和`estraverse`和`esutils`模块都改成`ES`模块,`acorn`使用自带的`ES`模块

并且使用`rollup` 打包,并开启`tree-shaking`和代码压缩

```json
{
  "dependencies": {
    "acorn": "^6.2.1",
    "escodegen": "^1.11.1",
    "estraverse": "^4.2.0",
    "esutils": "^2.0.3"
  }
}
```
