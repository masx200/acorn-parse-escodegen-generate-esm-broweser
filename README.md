# acorn-parse-escodegen-generate-esm-broweser

<!-- acorn-parse-escodegen-generate-esm-broweser -->

在浏览器中使用 `acorn`和`escodegen` 来 进行 `javascript` 源代码 和 `抽象语法树`的相互转换的`ES`模块,

把`escodegen`和`estraverse`和`esutils`模块都从`commonjs`模块改成`ES`模块,`acorn`使用自带的`ES`模块

并且使用`rollup` 打包,并开启`tree-shaking`和使用`terser`代码压缩

依赖的模块

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

## 获取已压缩模块

### ES 模块

https://masx200.github.io/acorn-parse-escodegen-generate-esm-broweser/dist/acorn-parse-escodegen-generate.esm.min.js

或者从 cdn 获取

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
