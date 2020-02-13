# acorn-parse-escodegen-generate-esm-broweser

可以在浏览器中运行，不需要 nodejs 环境，压缩后体积为 155KB

使用 `acorn`和`escodegen` 来 进行 `javascript` 源代码 和 `抽象语法树`的相互转换的`ES`模块,

把`escodegen`和`estraverse`和`esutils`模块都从`commonjs`模块改成`ES`模块,`acorn`使用自带的`ES`模块

并且使用`rollup` 打包,并开启`tree-shaking`和使用`terser`代码压缩

## 获取已压缩模块

### ES 模块

从 cdn 获取

https://cdn.jsdelivr.net/gh/masx200/acorn-parse-escodegen-generate-esm-broweser@latest/dist/acorn-parse-escodegen-generate.esm.min.js

```html
<script type="module">
    import {
        parse,
        generate
    } from "https://cdn.jsdelivr.net/gh/masx200/acorn-parse-escodegen-generate-esm-broweser@latest/dist/acorn-parse-escodegen-generate.esm.min.js";
</script>
```

# 安装模块

```bash
npm install --save https://github.com/masx200/acorn-parse-escodegen-generate-esm-broweser.git
```

或者

```shell
yarn add https://github.com/masx200/acorn-parse-escodegen-generate-esm-broweser.git

```

```javascript
import { parse, generate } from "acorn-parse-escodegen-generate-esm-broweser";
```

```javascript
var code = "var b=3";
var ast = parse(code);
var text = generate(ast);
```

A small, fast, JavaScript-based JavaScript parser

https://github.com/acornjs/acorn

https://npm.taobao.org/package/acorn

ECMAScript code generator

https://npm.taobao.org/package/escodegen

https://github.com/estools/escodegen
