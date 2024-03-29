import assert from "assert";

import { generate, parse } from "../dist/index.js";
import { test } from "vitest";

//console.log(test, generate, parse);
test("script-test", () => {
    var code = "var b=3";
    var ast = parse(code, {
        ecmaVersion: "latest",
    });
    var text = generate(ast);
    console.log(ast);
    console.log(text);
    assert.deepEqual(ast, {
        type: "Program",
        start: 0,
        end: 7,
        body: [
            {
                type: "VariableDeclaration",
                start: 0,
                end: 7,
                declarations: [
                    {
                        type: "VariableDeclarator",
                        start: 4,
                        end: 7,
                        id: {
                            type: "Identifier",
                            start: 4,
                            end: 5,
                            name: "b",
                        },
                        init: {
                            type: "Literal",
                            start: 6,
                            end: 7,
                            value: 3,
                            raw: "3",
                        },
                    },
                ],
                kind: "var",
            },
        ],
        sourceType: "script",
    });
    assert.equal(text, "var b = 3;");
});
