export { attachComments } from "./estraverse.js";
export const version: "1.11.1";
export const browser: true;
declare function _generate(
    node: any,
    options: import("escodegen").GenerateOptions
): string;
declare const _Precedence: any;
declare namespace _FORMAT_MINIFY {
    export namespace indent {
        export const style: string;
        export const base: number;
    }
    export const renumber: boolean;
    export const hexadecimal: boolean;
    export const quotes: string;
    export const escapeless: boolean;
    export const compact: boolean;
    export const parentheses: boolean;
    export const semicolons: boolean;
}
declare namespace _FORMAT_DEFAULTS {
    export namespace indent_1 {
        const style_1: string;
        export { style_1 as style };
        const base_1: number;
        export { base_1 as base };
        export const adjustMultilineComment: boolean;
    }
    export { indent_1 as indent };
    export const newline: string;
    export const space: string;
    export const json: boolean;
    const renumber_1: boolean;
    export { renumber_1 as renumber };
    const hexadecimal_1: boolean;
    export { hexadecimal_1 as hexadecimal };
    const quotes_1: string;
    export { quotes_1 as quotes };
    const escapeless_1: boolean;
    export { escapeless_1 as escapeless };
    const compact_1: boolean;
    export { compact_1 as compact };
    const parentheses_1: boolean;
    export { parentheses_1 as parentheses };
    const semicolons_1: boolean;
    export { semicolons_1 as semicolons };
    export const safeConcatenation: boolean;
    export const preserveBlankLines: boolean;
}
export {
    _generate as generate,
    _Precedence as Precedence,
    _FORMAT_MINIFY as FORMAT_MINIFY,
    _FORMAT_DEFAULTS as FORMAT_DEFAULTS,
};
