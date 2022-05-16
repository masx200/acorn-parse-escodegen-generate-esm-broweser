import assert from 'assert'


import  { parse, generate } from "../dist/index.js"

var code = "var b=3";
var ast = parse(code);
var text = generate(ast);

assert.equal(text,"var b=3;")
