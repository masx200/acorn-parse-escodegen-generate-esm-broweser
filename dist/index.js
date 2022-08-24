const e = {
    AssignmentExpression: "AssignmentExpression",
    AssignmentPattern: "AssignmentPattern",
    ArrayExpression: "ArrayExpression",
    ArrayPattern: "ArrayPattern",
    ArrowFunctionExpression: "ArrowFunctionExpression",
    AwaitExpression: "AwaitExpression",
    BlockStatement: "BlockStatement",
    BinaryExpression: "BinaryExpression",
    BreakStatement: "BreakStatement",
    CallExpression: "CallExpression",
    CatchClause: "CatchClause",
    ClassBody: "ClassBody",
    ClassDeclaration: "ClassDeclaration",
    ClassExpression: "ClassExpression",
    ComprehensionBlock: "ComprehensionBlock",
    ComprehensionExpression: "ComprehensionExpression",
    ConditionalExpression: "ConditionalExpression",
    ContinueStatement: "ContinueStatement",
    DebuggerStatement: "DebuggerStatement",
    DirectiveStatement: "DirectiveStatement",
    DoWhileStatement: "DoWhileStatement",
    EmptyStatement: "EmptyStatement",
    ExportAllDeclaration: "ExportAllDeclaration",
    ExportDefaultDeclaration: "ExportDefaultDeclaration",
    ExportNamedDeclaration: "ExportNamedDeclaration",
    ExportSpecifier: "ExportSpecifier",
    ExpressionStatement: "ExpressionStatement",
    ForStatement: "ForStatement",
    ForInStatement: "ForInStatement",
    ForOfStatement: "ForOfStatement",
    FunctionDeclaration: "FunctionDeclaration",
    FunctionExpression: "FunctionExpression",
    GeneratorExpression: "GeneratorExpression",
    Identifier: "Identifier",
    IfStatement: "IfStatement",
    ImportDeclaration: "ImportDeclaration",
    ImportDefaultSpecifier: "ImportDefaultSpecifier",
    ImportNamespaceSpecifier: "ImportNamespaceSpecifier",
    ImportSpecifier: "ImportSpecifier",
    Literal: "Literal",
    LabeledStatement: "LabeledStatement",
    LogicalExpression: "LogicalExpression",
    MemberExpression: "MemberExpression",
    MetaProperty: "MetaProperty",
    MethodDefinition: "MethodDefinition",
    ModuleSpecifier: "ModuleSpecifier",
    NewExpression: "NewExpression",
    ObjectExpression: "ObjectExpression",
    ObjectPattern: "ObjectPattern",
    Program: "Program",
    Property: "Property",
    RestElement: "RestElement",
    ReturnStatement: "ReturnStatement",
    SequenceExpression: "SequenceExpression",
    SpreadElement: "SpreadElement",
    Super: "Super",
    SwitchStatement: "SwitchStatement",
    SwitchCase: "SwitchCase",
    TaggedTemplateExpression: "TaggedTemplateExpression",
    TemplateElement: "TemplateElement",
    TemplateLiteral: "TemplateLiteral",
    ThisExpression: "ThisExpression",
    ThrowStatement: "ThrowStatement",
    TryStatement: "TryStatement",
    UnaryExpression: "UnaryExpression",
    UpdateExpression: "UpdateExpression",
    VariableDeclaration: "VariableDeclaration",
    VariableDeclarator: "VariableDeclarator",
    WhileStatement: "WhileStatement",
    WithStatement: "WithStatement",
    YieldExpression: "YieldExpression",
};
var t, i, s, u, r, n;
function a(e) {
    return e <= 65535
        ? String.fromCharCode(e)
        : String.fromCharCode(Math.floor((e - 65536) / 1024) + 55296) +
              String.fromCharCode(((e - 65536) % 1024) + 56320);
}
for (
    i = {
        NonAsciiIdentifierStart:
            /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
        NonAsciiIdentifierPart:
            /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
    },
        t = {
            NonAsciiIdentifierStart:
                /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
            NonAsciiIdentifierPart:
                /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,
        },
        s = [
            5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201,
            8202, 8239, 8287, 12288, 65279,
        ],
        u = new Array(128),
        n = 0;
    n < 128;
    ++n
)
    u[n] =
        (n >= 97 && n <= 122) || (n >= 65 && n <= 90) || 36 === n || 95 === n;
for (r = new Array(128), n = 0; n < 128; ++n)
    r[n] =
        (n >= 97 && n <= 122) ||
        (n >= 65 && n <= 90) ||
        (n >= 48 && n <= 57) ||
        36 === n ||
        95 === n;
const o = {
    isDecimalDigit: function (e) {
        return 48 <= e && e <= 57;
    },
    isHexDigit: function (e) {
        return (
            (48 <= e && e <= 57) ||
            (97 <= e && e <= 102) ||
            (65 <= e && e <= 70)
        );
    },
    isOctalDigit: function (e) {
        return e >= 48 && e <= 55;
    },
    isWhiteSpace: function (e) {
        return (
            32 === e ||
            9 === e ||
            11 === e ||
            12 === e ||
            160 === e ||
            (e >= 5760 && s.indexOf(e) >= 0)
        );
    },
    isLineTerminator: function (e) {
        return 10 === e || 13 === e || 8232 === e || 8233 === e;
    },
    isIdentifierStartES5: function (e) {
        return e < 128 ? u[e] : i.NonAsciiIdentifierStart.test(a(e));
    },
    isIdentifierPartES5: function (e) {
        return e < 128 ? r[e] : i.NonAsciiIdentifierPart.test(a(e));
    },
    isIdentifierStartES6: function (e) {
        return e < 128 ? u[e] : t.NonAsciiIdentifierStart.test(a(e));
    },
    isIdentifierPartES6: function (e) {
        return e < 128 ? r[e] : t.NonAsciiIdentifierPart.test(a(e));
    },
};
var h,
    p,
    c,
    l,
    D,
    d,
    f,
    A,
    C,
    m,
    E,
    F,
    g,
    x,
    B,
    y,
    v,
    S,
    b,
    k,
    _ = !1;
function w(e) {
    return Y.Statement.hasOwnProperty(e.type);
}
p = {
    "||": (h = {
        Sequence: 0,
        Yield: 1,
        Assignment: 1,
        Conditional: 2,
        ArrowFunction: 2,
        LogicalOR: 3,
        LogicalAND: 4,
        BitwiseOR: 5,
        BitwiseXOR: 6,
        BitwiseAND: 7,
        Equality: 8,
        Relational: 9,
        BitwiseSHIFT: 10,
        Additive: 11,
        Multiplicative: 12,
        Await: 13,
        Unary: 13,
        Postfix: 14,
        Call: 15,
        New: 16,
        TaggedTemplate: 17,
        Member: 18,
        Primary: 19,
    }).LogicalOR,
    "&&": h.LogicalAND,
    "|": h.BitwiseOR,
    "^": h.BitwiseXOR,
    "&": h.BitwiseAND,
    "==": h.Equality,
    "!=": h.Equality,
    "===": h.Equality,
    "!==": h.Equality,
    is: h.Equality,
    isnt: h.Equality,
    "<": h.Relational,
    ">": h.Relational,
    "<=": h.Relational,
    ">=": h.Relational,
    in: h.Relational,
    instanceof: h.Relational,
    "<<": h.BitwiseSHIFT,
    ">>": h.BitwiseSHIFT,
    ">>>": h.BitwiseSHIFT,
    "+": h.Additive,
    "-": h.Additive,
    "*": h.Multiplicative,
    "%": h.Multiplicative,
    "/": h.Multiplicative,
};
function I(e, t) {
    var i = "";
    for (t |= 0; t > 0; t >>>= 1, e += e) 1 & t && (i += e);
    return i;
}
function P(e) {
    var t = e.length;
    return t && o.isLineTerminator(e.charCodeAt(t - 1));
}
function T(e, t) {
    var i;
    for (i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    return e;
}
function N(e, t) {
    var i, s;
    function u(e) {
        return (
            "object" == typeof e &&
            e instanceof Object &&
            !(e instanceof RegExp)
        );
    }
    for (i in t)
        t.hasOwnProperty(i) &&
            (u((s = t[i]))
                ? u(e[i])
                    ? N(e[i], s)
                    : (e[i] = N({}, s))
                : (e[i] = s));
    return e;
}
function L(e, t) {
    return 8232 == (-2 & e)
        ? (t ? "u" : "\\u") + (8232 === e ? "2028" : "2029")
        : 10 === e || 13 === e
        ? (t ? "" : "\\") + (10 === e ? "n" : "r")
        : String.fromCharCode(e);
}
function V(e, t) {
    var i;
    return 8 === e
        ? "\\b"
        : 12 === e
        ? "\\f"
        : 9 === e
        ? "\\t"
        : ((i = e.toString(16).toUpperCase()),
          d || e > 255
              ? "\\u" + "0000".slice(i.length) + i
              : 0 !== e || o.isDecimalDigit(t)
              ? 11 === e
                  ? "\\x0B"
                  : "\\x" + "00".slice(i.length) + i
              : "\\0");
}
function R(e) {
    if (92 === e) return "\\\\";
    if (10 === e) return "\\n";
    if (13 === e) return "\\r";
    if (8232 === e) return "\\u2028";
    if (8233 === e) return "\\u2029";
    throw new Error("Incorrectly classified character");
}
function M(e) {
    var t,
        i,
        s,
        u = "";
    for (t = 0, i = e.length; t < i; ++t)
        (s = e[t]), (u += Array.isArray(s) ? M(s) : s);
    return u;
}
function O(e, t) {
    if (!_) return Array.isArray(e) ? M(e) : e;
    if (null == t) {
        if (e instanceof c) return e;
        t = {};
    }
    return null == t.loc
        ? new c(null, null, _, e, t.name || null)
        : new c(
              t.loc.start.line,
              t.loc.start.column,
              !0 === _ ? t.loc.source || null : _,
              e,
              t.name || null
          );
}
function q() {
    return F || " ";
}
function U(e, t) {
    var i, s, u, r;
    return 0 === (i = O(e).toString()).length
        ? [t]
        : 0 === (s = O(t).toString()).length
        ? [e]
        : ((u = i.charCodeAt(i.length - 1)),
          (r = s.charCodeAt(0)),
          ((43 === u || 45 === u) && u === r) ||
          (o.isIdentifierPartES5(u) && o.isIdentifierPartES5(r)) ||
          (47 === u && 105 === r)
              ? [e, q(), t]
              : o.isWhiteSpace(u) ||
                o.isLineTerminator(u) ||
                o.isWhiteSpace(r) ||
                o.isLineTerminator(r)
              ? [e, t]
              : [e, F, t]);
}
function W(e) {
    return [l, e];
}
function H(e) {
    var t;
    (t = l), e((l += D)), (l = t);
}
function j(e, t) {
    if ("Line" === e.type) {
        if (P(e.value)) return "//" + e.value;
        var i = "//" + e.value;
        return k || (i += "\n"), i;
    }
    return v.format.indent.adjustMultilineComment && /[\n\r]/.test(e.value)
        ? (function (e, t) {
              var i, s, u, r, n, a, h, p;
              for (
                  i = e.split(/\r\n|[\r\n]/),
                      a = Number.MAX_VALUE,
                      s = 1,
                      u = i.length;
                  s < u;
                  ++s
              ) {
                  for (
                      r = i[s], n = 0;
                      n < r.length && o.isWhiteSpace(r.charCodeAt(n));

                  )
                      ++n;
                  a > n && (a = n);
              }
              for (
                  void 0 !== t
                      ? ((h = l), "*" === i[1][a] && (t += " "), (l = t))
                      : (1 & a && --a, (h = l)),
                      s = 1,
                      u = i.length;
                  s < u;
                  ++s
              )
                  (p = O(W(i[s].slice(a)))), (i[s] = _ ? p.join("") : p);
              return (l = h), i.join("\n");
          })("/*" + e.value + "*/", t)
        : "/*" + e.value + "*/";
}
function G(t, i) {
    var s, u, r, n, a, h, p, c, d, f, A, C;
    if (t.leadingComments && t.leadingComments.length > 0) {
        if (((n = i), k)) {
            for (
                i = [],
                    c = (r = t.leadingComments[0]).extendedRange,
                    d = r.range,
                    (C = ((A = b.substring(c[0], d[0])).match(/\n/g) || [])
                        .length) > 0
                        ? (i.push(I("\n", C)), i.push(W(j(r))))
                        : (i.push(A), i.push(j(r))),
                    f = d,
                    s = 1,
                    u = t.leadingComments.length;
                s < u;
                s++
            )
                (d = (r = t.leadingComments[s]).range),
                    (C = (b.substring(f[1], d[0]).match(/\n/g) || []).length),
                    i.push(I("\n", C)),
                    i.push(W(j(r))),
                    (f = d);
            (C = (b.substring(d[1], c[1]).match(/\n/g) || []).length),
                i.push(I("\n", C));
        } else
            for (
                r = t.leadingComments[0],
                    i = [],
                    B &&
                        t.type === e.Program &&
                        0 === t.body.length &&
                        i.push("\n"),
                    i.push(j(r)),
                    P(O(i).toString()) || i.push("\n"),
                    s = 1,
                    u = t.leadingComments.length;
                s < u;
                ++s
            )
                P(O((p = [j((r = t.leadingComments[s]))])).toString()) ||
                    p.push("\n"),
                    i.push(W(p));
        i.push(W(n));
    }
    if (t.trailingComments)
        if (k)
            (c = (r = t.trailingComments[0]).extendedRange),
                (d = r.range),
                (C = ((A = b.substring(c[0], d[0])).match(/\n/g) || [])
                    .length) > 0
                    ? (i.push(I("\n", C)), i.push(W(j(r))))
                    : (i.push(A), i.push(j(r)));
        else
            for (
                a = !P(O(i).toString()),
                    h = I(
                        " ",
                        (function (e) {
                            var t;
                            for (
                                t = e.length - 1;
                                t >= 0 && !o.isLineTerminator(e.charCodeAt(t));
                                --t
                            );
                            return e.length - 1 - t;
                        })(O([l, i, D]).toString())
                    ),
                    s = 0,
                    u = t.trailingComments.length;
                s < u;
                ++s
            )
                (r = t.trailingComments[s]),
                    a
                        ? (i = 0 === s ? [i, D] : [i, h]).push(j(r, h))
                        : (i = [i, W(j(r))]),
                    s === u - 1 || P(O(i).toString()) || (i = [i, "\n"]);
    return i;
}
function z(e, t, i) {
    var s,
        u = 0;
    for (s = e; s < t; s++) "\n" === b[s] && u++;
    for (s = 1; s < u; s++) i.push(E);
}
function K(e, t, i) {
    return t < i ? ["(", e, ")"] : e;
}
function Q(e) {
    var t, i, s;
    for (t = 1, i = (s = e.split(/\r\n|\n/)).length; t < i; t++)
        s[t] = E + l + s[t];
    return s;
}
function Y() {}
function X(e) {
    return O(e.name, e);
}
function Z(e, t) {
    return e.async ? "async" + (t ? q() : F) : "";
}
function $(e) {
    return e.generator && !v.moz.starlessGenerator ? "*" + F : "";
}
function J(e) {
    var t = e.value,
        i = "";
    return (
        t.async && (i += Z(t, !e.computed)),
        t.generator && (i += $(t) ? "*" : ""),
        i
    );
}
function ee(e) {
    var t;
    if (((t = new Y()), w(e))) return t.generateStatement(e, 1);
    if (
        (function (e) {
            return Y.Expression.hasOwnProperty(e.type);
        })(e)
    )
        return t.generateExpression(e, h.Sequence, 7);
    throw new Error("Unknown node type: " + e.type);
}
(Y.prototype.maybeBlock = function (t, i) {
    var s,
        u,
        r = this;
    return (
        (u = !v.comment || !t.leadingComments),
        t.type === e.BlockStatement && u
            ? [F, this.generateStatement(t, i)]
            : t.type === e.EmptyStatement && u
            ? ";"
            : (H(function () {
                  s = [E, W(r.generateStatement(t, i))];
              }),
              s)
    );
}),
    (Y.prototype.maybeBlockSuffix = function (t, i) {
        var s = P(O(i).toString());
        return t.type !== e.BlockStatement ||
            (v.comment && t.leadingComments) ||
            s
            ? s
                ? [i, l]
                : [i, E, l]
            : [i, F];
    }),
    (Y.prototype.generatePattern = function (t, i, s) {
        return t.type === e.Identifier
            ? X(t)
            : this.generateExpression(t, i, s);
    }),
    (Y.prototype.generateFunctionParams = function (t) {
        var i, s, u, r;
        if (
            ((r = !1),
            t.type !== e.ArrowFunctionExpression ||
                t.rest ||
                (t.defaults && 0 !== t.defaults.length) ||
                1 !== t.params.length ||
                t.params[0].type !== e.Identifier)
        ) {
            for (
                (u =
                    t.type === e.ArrowFunctionExpression
                        ? [Z(t, !1)]
                        : []).push("("),
                    t.defaults && (r = !0),
                    i = 0,
                    s = t.params.length;
                i < s;
                ++i
            )
                r && t.defaults[i]
                    ? u.push(
                          this.generateAssignment(
                              t.params[i],
                              t.defaults[i],
                              "=",
                              h.Assignment,
                              7
                          )
                      )
                    : u.push(
                          this.generatePattern(t.params[i], h.Assignment, 7)
                      ),
                    i + 1 < s && u.push("," + F);
            t.rest &&
                (t.params.length && u.push("," + F),
                u.push("..."),
                u.push(X(t.rest))),
                u.push(")");
        } else u = [Z(t, !0), X(t.params[0])];
        return u;
    }),
    (Y.prototype.generateFunctionBody = function (t) {
        var i, s;
        return (
            (i = this.generateFunctionParams(t)),
            t.type === e.ArrowFunctionExpression && (i.push(F), i.push("=>")),
            t.expression
                ? (i.push(F),
                  "{" ===
                      (s = this.generateExpression(t.body, h.Assignment, 7))
                          .toString()
                          .charAt(0) && (s = ["(", s, ")"]),
                  i.push(s))
                : i.push(this.maybeBlock(t.body, 9)),
            i
        );
    }),
    (Y.prototype.generateIterationForStatement = function (t, i, s) {
        var u = ["for" + F + (i.await ? "await" + F : "") + "("],
            r = this;
        return (
            H(function () {
                i.left.type === e.VariableDeclaration
                    ? H(function () {
                          u.push(i.left.kind + q()),
                              u.push(
                                  r.generateStatement(i.left.declarations[0], 0)
                              );
                      })
                    : u.push(r.generateExpression(i.left, h.Call, 7)),
                    (u = U(u, t)),
                    (u = [
                        U(u, r.generateExpression(i.right, h.Assignment, 7)),
                        ")",
                    ]);
            }),
            u.push(this.maybeBlock(i.body, s)),
            u
        );
    }),
    (Y.prototype.generatePropertyKey = function (e, t) {
        var i = [];
        return (
            t && i.push("["),
            i.push(this.generateExpression(e, h.Sequence, 7)),
            t && i.push("]"),
            i
        );
    }),
    (Y.prototype.generateAssignment = function (e, t, i, s, u) {
        return (
            h.Assignment < s && (u |= 1),
            K(
                [
                    this.generateExpression(e, h.Call, u),
                    F + i + F,
                    this.generateExpression(t, h.Assignment, u),
                ],
                h.Assignment,
                s
            )
        );
    }),
    (Y.prototype.semicolon = function (e) {
        return !x && 32 & e ? "" : ";";
    }),
    (Y.Statement = {
        BlockStatement: function (e, t) {
            var i,
                s,
                u = ["{", E],
                r = this;
            return (
                H(function () {
                    var n, a, o, h;
                    for (
                        0 === e.body.length &&
                            k &&
                            (i = e.range)[1] - i[0] > 2 &&
                            ("\n" ===
                                (s = b.substring(i[0] + 1, i[1] - 1))[0] &&
                                (u = ["{"]),
                            u.push(s)),
                            h = 1,
                            8 & t && (h |= 16),
                            n = 0,
                            a = e.body.length;
                        n < a;
                        ++n
                    )
                        k &&
                            (0 === n &&
                                (e.body[0].leadingComments &&
                                    ((i =
                                        e.body[0].leadingComments[0]
                                            .extendedRange),
                                    "\n" === (s = b.substring(i[0], i[1]))[0] &&
                                        (u = ["{"])),
                                e.body[0].leadingComments ||
                                    z(e.range[0], e.body[0].range[0], u)),
                            n > 0 &&
                                (e.body[n - 1].trailingComments ||
                                    e.body[n].leadingComments ||
                                    z(
                                        e.body[n - 1].range[1],
                                        e.body[n].range[0],
                                        u
                                    ))),
                            n === a - 1 && (h |= 32),
                            (o =
                                e.body[n].leadingComments && k
                                    ? r.generateStatement(e.body[n], h)
                                    : W(r.generateStatement(e.body[n], h))),
                            u.push(o),
                            P(O(o).toString()) ||
                                (k &&
                                    n < a - 1 &&
                                    e.body[n + 1].leadingComments) ||
                                u.push(E),
                            k &&
                                n === a - 1 &&
                                (e.body[n].trailingComments ||
                                    z(e.body[n].range[1], e.range[1], u));
                }),
                u.push(W("}")),
                u
            );
        },
        BreakStatement: function (e, t) {
            return e.label
                ? "break " + e.label.name + this.semicolon(t)
                : "break" + this.semicolon(t);
        },
        ContinueStatement: function (e, t) {
            return e.label
                ? "continue " + e.label.name + this.semicolon(t)
                : "continue" + this.semicolon(t);
        },
        ClassBody: function (e) {
            var t = ["{", E],
                i = this;
            return (
                H(function (s) {
                    var u, r;
                    for (u = 0, r = e.body.length; u < r; ++u)
                        t.push(s),
                            t.push(
                                i.generateExpression(e.body[u], h.Sequence, 7)
                            ),
                            u + 1 < r && t.push(E);
                }),
                P(O(t).toString()) || t.push(E),
                t.push(l),
                t.push("}"),
                t
            );
        },
        ClassDeclaration: function (e) {
            var t, i;
            return (
                (t = ["class"]),
                e.id &&
                    (t = U(t, this.generateExpression(e.id, h.Sequence, 7))),
                e.superClass &&
                    ((i = U(
                        "extends",
                        this.generateExpression(e.superClass, h.Assignment, 7)
                    )),
                    (t = U(t, i))),
                t.push(F),
                t.push(this.generateStatement(e.body, 33)),
                t
            );
        },
        DirectiveStatement: function (e, t) {
            return v.raw && e.raw
                ? e.raw + this.semicolon(t)
                : (function (e) {
                      var t, i, s, u;
                      for (
                          u = "double" === C ? '"' : "'", t = 0, i = e.length;
                          t < i;
                          ++t
                      ) {
                          if (39 === (s = e.charCodeAt(t))) {
                              u = '"';
                              break;
                          }
                          if (34 === s) {
                              u = "'";
                              break;
                          }
                          92 === s && ++t;
                      }
                      return u + e + u;
                  })(e.directive) + this.semicolon(t);
        },
        DoWhileStatement: function (e, t) {
            var i = U("do", this.maybeBlock(e.body, 1));
            return U((i = this.maybeBlockSuffix(e.body, i)), [
                "while" + F + "(",
                this.generateExpression(e.test, h.Sequence, 7),
                ")" + this.semicolon(t),
            ]);
        },
        CatchClause: function (e) {
            var t,
                i = this;
            return (
                H(function () {
                    var s;
                    (t = [
                        "catch" + F + "(",
                        i.generateExpression(e.param, h.Sequence, 7),
                        ")",
                    ]),
                        e.guard &&
                            ((s = i.generateExpression(e.guard, h.Sequence, 7)),
                            t.splice(2, 0, " if ", s));
                }),
                t.push(this.maybeBlock(e.body, 1)),
                t
            );
        },
        DebuggerStatement: function (e, t) {
            return "debugger" + this.semicolon(t);
        },
        EmptyStatement: function () {
            return ";";
        },
        ExportDefaultDeclaration: function (e, t) {
            var i,
                s = ["export"];
            return (
                (i = 32 & t ? 33 : 1),
                (s = U(s, "default")),
                (s = w(e.declaration)
                    ? U(s, this.generateStatement(e.declaration, i))
                    : U(
                          s,
                          this.generateExpression(
                              e.declaration,
                              h.Assignment,
                              7
                          ) + this.semicolon(t)
                      ))
            );
        },
        ExportNamedDeclaration: function (t, i) {
            var s,
                u = ["export"],
                r = this;
            return (
                (s = 32 & i ? 33 : 1),
                t.declaration
                    ? U(u, this.generateStatement(t.declaration, s))
                    : (t.specifiers &&
                          (0 === t.specifiers.length
                              ? (u = U(u, "{" + F + "}"))
                              : t.specifiers[0].type === e.ExportBatchSpecifier
                              ? (u = U(
                                    u,
                                    this.generateExpression(
                                        t.specifiers[0],
                                        h.Sequence,
                                        7
                                    )
                                ))
                              : ((u = U(u, "{")),
                                H(function (e) {
                                    var i, s;
                                    for (
                                        u.push(E),
                                            i = 0,
                                            s = t.specifiers.length;
                                        i < s;
                                        ++i
                                    )
                                        u.push(e),
                                            u.push(
                                                r.generateExpression(
                                                    t.specifiers[i],
                                                    h.Sequence,
                                                    7
                                                )
                                            ),
                                            i + 1 < s && u.push("," + E);
                                }),
                                P(O(u).toString()) || u.push(E),
                                u.push(l + "}")),
                          t.source
                              ? (u = U(u, [
                                    "from" + F,
                                    this.generateExpression(
                                        t.source,
                                        h.Sequence,
                                        7
                                    ),
                                    this.semicolon(i),
                                ]))
                              : u.push(this.semicolon(i))),
                      u)
            );
        },
        ExportAllDeclaration: function (e, t) {
            return [
                "export" + F,
                "*" + F,
                "from" + F,
                this.generateExpression(e.source, h.Sequence, 7),
                this.semicolon(t),
            ];
        },
        ExpressionStatement: function (t, i) {
            var s, u;
            return (
                123 ===
                    (u = O(
                        (s = [
                            this.generateExpression(
                                t.expression,
                                h.Sequence,
                                7
                            ),
                        ])
                    ).toString()).charCodeAt(0) ||
                (function (e) {
                    var t;
                    return (
                        "class" === e.slice(0, 5) &&
                        (123 === (t = e.charCodeAt(5)) ||
                            o.isWhiteSpace(t) ||
                            o.isLineTerminator(t))
                    );
                })(u) ||
                (function (e) {
                    var t;
                    return (
                        "function" === e.slice(0, 8) &&
                        (40 === (t = e.charCodeAt(8)) ||
                            o.isWhiteSpace(t) ||
                            42 === t ||
                            o.isLineTerminator(t))
                    );
                })(u) ||
                (function (e) {
                    var t, i, s;
                    if ("async" !== e.slice(0, 5)) return !1;
                    if (!o.isWhiteSpace(e.charCodeAt(5))) return !1;
                    for (
                        i = 6, s = e.length;
                        i < s && o.isWhiteSpace(e.charCodeAt(i));
                        ++i
                    );
                    return (
                        i !== s &&
                        "function" === e.slice(i, i + 8) &&
                        (40 === (t = e.charCodeAt(i + 8)) ||
                            o.isWhiteSpace(t) ||
                            42 === t ||
                            o.isLineTerminator(t))
                    );
                })(u) ||
                (y &&
                    16 & i &&
                    t.expression.type === e.Literal &&
                    "string" == typeof t.expression.value)
                    ? (s = ["(", s, ")" + this.semicolon(i)])
                    : s.push(this.semicolon(i)),
                s
            );
        },
        ImportDeclaration: function (t, i) {
            var s,
                u,
                r = this;
            return 0 === t.specifiers.length
                ? [
                      "import",
                      F,
                      this.generateExpression(t.source, h.Sequence, 7),
                      this.semicolon(i),
                  ]
                : ((s = ["import"]),
                  (u = 0),
                  t.specifiers[u].type === e.ImportDefaultSpecifier &&
                      ((s = U(s, [
                          this.generateExpression(
                              t.specifiers[u],
                              h.Sequence,
                              7
                          ),
                      ])),
                      ++u),
                  t.specifiers[u] &&
                      (0 !== u && s.push(","),
                      t.specifiers[u].type === e.ImportNamespaceSpecifier
                          ? (s = U(s, [
                                F,
                                this.generateExpression(
                                    t.specifiers[u],
                                    h.Sequence,
                                    7
                                ),
                            ]))
                          : (s.push(F + "{"),
                            t.specifiers.length - u == 1
                                ? (s.push(F),
                                  s.push(
                                      this.generateExpression(
                                          t.specifiers[u],
                                          h.Sequence,
                                          7
                                      )
                                  ),
                                  s.push(F + "}" + F))
                                : (H(function (e) {
                                      var i, n;
                                      for (
                                          s.push(E),
                                              i = u,
                                              n = t.specifiers.length;
                                          i < n;
                                          ++i
                                      )
                                          s.push(e),
                                              s.push(
                                                  r.generateExpression(
                                                      t.specifiers[i],
                                                      h.Sequence,
                                                      7
                                                  )
                                              ),
                                              i + 1 < n && s.push("," + E);
                                  }),
                                  P(O(s).toString()) || s.push(E),
                                  s.push(l + "}" + F)))),
                  (s = U(s, [
                      "from" + F,
                      this.generateExpression(t.source, h.Sequence, 7),
                      this.semicolon(i),
                  ])));
        },
        VariableDeclarator: function (e, t) {
            var i = 1 & t ? 7 : 6;
            return e.init
                ? [
                      this.generateExpression(e.id, h.Assignment, i),
                      F,
                      "=",
                      F,
                      this.generateExpression(e.init, h.Assignment, i),
                  ]
                : this.generatePattern(e.id, h.Assignment, i);
        },
        VariableDeclaration: function (e, t) {
            var i,
                s,
                u,
                r,
                n,
                a = this;
            function o() {
                for (
                    r = e.declarations[0],
                        v.comment && r.leadingComments
                            ? (i.push("\n"),
                              i.push(W(a.generateStatement(r, n))))
                            : (i.push(q()), i.push(a.generateStatement(r, n))),
                        s = 1,
                        u = e.declarations.length;
                    s < u;
                    ++s
                )
                    (r = e.declarations[s]),
                        v.comment && r.leadingComments
                            ? (i.push("," + E),
                              i.push(W(a.generateStatement(r, n))))
                            : (i.push("," + F),
                              i.push(a.generateStatement(r, n)));
            }
            return (
                (i = [e.kind]),
                (n = 1 & t ? 1 : 0),
                e.declarations.length > 1 ? H(o) : o(),
                i.push(this.semicolon(t)),
                i
            );
        },
        ThrowStatement: function (e, t) {
            return [
                U("throw", this.generateExpression(e.argument, h.Sequence, 7)),
                this.semicolon(t),
            ];
        },
        TryStatement: function (e) {
            var t, i, s, u;
            if (
                ((t = ["try", this.maybeBlock(e.block, 1)]),
                (t = this.maybeBlockSuffix(e.block, t)),
                e.handlers)
            )
                for (i = 0, s = e.handlers.length; i < s; ++i)
                    (t = U(t, this.generateStatement(e.handlers[i], 1))),
                        (e.finalizer || i + 1 !== s) &&
                            (t = this.maybeBlockSuffix(e.handlers[i].body, t));
            else {
                for (
                    i = 0, s = (u = e.guardedHandlers || []).length;
                    i < s;
                    ++i
                )
                    (t = U(t, this.generateStatement(u[i], 1))),
                        (e.finalizer || i + 1 !== s) &&
                            (t = this.maybeBlockSuffix(u[i].body, t));
                if (e.handler)
                    if (Array.isArray(e.handler))
                        for (i = 0, s = e.handler.length; i < s; ++i)
                            (t = U(t, this.generateStatement(e.handler[i], 1))),
                                (e.finalizer || i + 1 !== s) &&
                                    (t = this.maybeBlockSuffix(
                                        e.handler[i].body,
                                        t
                                    ));
                    else
                        (t = U(t, this.generateStatement(e.handler, 1))),
                            e.finalizer &&
                                (t = this.maybeBlockSuffix(e.handler.body, t));
            }
            return (
                e.finalizer &&
                    (t = U(t, ["finally", this.maybeBlock(e.finalizer, 1)])),
                t
            );
        },
        SwitchStatement: function (e) {
            var t,
                i,
                s,
                u,
                r,
                n = this;
            if (
                (H(function () {
                    t = [
                        "switch" + F + "(",
                        n.generateExpression(e.discriminant, h.Sequence, 7),
                        ")" + F + "{" + E,
                    ];
                }),
                e.cases)
            )
                for (r = 1, s = 0, u = e.cases.length; s < u; ++s)
                    s === u - 1 && (r |= 32),
                        (i = W(this.generateStatement(e.cases[s], r))),
                        t.push(i),
                        P(O(i).toString()) || t.push(E);
            return t.push(W("}")), t;
        },
        SwitchCase: function (t, i) {
            var s,
                u,
                r,
                n,
                a,
                o = this;
            return (
                H(function () {
                    for (
                        s = t.test
                            ? [
                                  U(
                                      "case",
                                      o.generateExpression(
                                          t.test,
                                          h.Sequence,
                                          7
                                      )
                                  ),
                                  ":",
                              ]
                            : ["default:"],
                            r = 0,
                            (n = t.consequent.length) &&
                                t.consequent[0].type === e.BlockStatement &&
                                ((u = o.maybeBlock(t.consequent[0], 1)),
                                s.push(u),
                                (r = 1)),
                            r === n || P(O(s).toString()) || s.push(E),
                            a = 1;
                        r < n;
                        ++r
                    )
                        r === n - 1 && 32 & i && (a |= 32),
                            (u = W(o.generateStatement(t.consequent[r], a))),
                            s.push(u),
                            r + 1 === n || P(O(u).toString()) || s.push(E);
                }),
                s
            );
        },
        IfStatement: function (t, i) {
            var s,
                u,
                r = this;
            return (
                H(function () {
                    s = [
                        "if" + F + "(",
                        r.generateExpression(t.test, h.Sequence, 7),
                        ")",
                    ];
                }),
                (u = 1),
                32 & i && (u |= 32),
                t.alternate
                    ? (s.push(this.maybeBlock(t.consequent, 1)),
                      (s = this.maybeBlockSuffix(t.consequent, s)),
                      (s =
                          t.alternate.type === e.IfStatement
                              ? U(s, [
                                    "else ",
                                    this.generateStatement(t.alternate, u),
                                ])
                              : U(
                                    s,
                                    U("else", this.maybeBlock(t.alternate, u))
                                )))
                    : s.push(this.maybeBlock(t.consequent, u)),
                s
            );
        },
        ForStatement: function (t, i) {
            var s,
                u = this;
            return (
                H(function () {
                    (s = ["for" + F + "("]),
                        t.init
                            ? t.init.type === e.VariableDeclaration
                                ? s.push(u.generateStatement(t.init, 0))
                                : (s.push(
                                      u.generateExpression(
                                          t.init,
                                          h.Sequence,
                                          6
                                      )
                                  ),
                                  s.push(";"))
                            : s.push(";"),
                        t.test
                            ? (s.push(F),
                              s.push(
                                  u.generateExpression(t.test, h.Sequence, 7)
                              ),
                              s.push(";"))
                            : s.push(";"),
                        t.update
                            ? (s.push(F),
                              s.push(
                                  u.generateExpression(t.update, h.Sequence, 7)
                              ),
                              s.push(")"))
                            : s.push(")");
                }),
                s.push(this.maybeBlock(t.body, 32 & i ? 33 : 1)),
                s
            );
        },
        ForInStatement: function (e, t) {
            return this.generateIterationForStatement("in", e, 32 & t ? 33 : 1);
        },
        ForOfStatement: function (e, t) {
            return this.generateIterationForStatement("of", e, 32 & t ? 33 : 1);
        },
        LabeledStatement: function (e, t) {
            return [
                e.label.name + ":",
                this.maybeBlock(e.body, 32 & t ? 33 : 1),
            ];
        },
        Program: function (e) {
            var t, i, s, u, r;
            for (
                u = e.body.length, t = [B && u > 0 ? "\n" : ""], r = 17, s = 0;
                s < u;
                ++s
            )
                B || s !== u - 1 || (r |= 32),
                    k &&
                        (0 === s &&
                            (e.body[0].leadingComments ||
                                z(e.range[0], e.body[s].range[0], t)),
                        s > 0 &&
                            (e.body[s - 1].trailingComments ||
                                e.body[s].leadingComments ||
                                z(
                                    e.body[s - 1].range[1],
                                    e.body[s].range[0],
                                    t
                                ))),
                    (i = W(this.generateStatement(e.body[s], r))),
                    t.push(i),
                    s + 1 < u &&
                        !P(O(i).toString()) &&
                        ((k && e.body[s + 1].leadingComments) || t.push(E)),
                    k &&
                        s === u - 1 &&
                        (e.body[s].trailingComments ||
                            z(e.body[s].range[1], e.range[1], t));
            return t;
        },
        FunctionDeclaration: function (e) {
            return [
                Z(e, !0),
                "function",
                $(e) || q(),
                e.id ? X(e.id) : "",
                this.generateFunctionBody(e),
            ];
        },
        ReturnStatement: function (e, t) {
            return e.argument
                ? [
                      U(
                          "return",
                          this.generateExpression(e.argument, h.Sequence, 7)
                      ),
                      this.semicolon(t),
                  ]
                : ["return" + this.semicolon(t)];
        },
        WhileStatement: function (e, t) {
            var i,
                s = this;
            return (
                H(function () {
                    i = [
                        "while" + F + "(",
                        s.generateExpression(e.test, h.Sequence, 7),
                        ")",
                    ];
                }),
                i.push(this.maybeBlock(e.body, 32 & t ? 33 : 1)),
                i
            );
        },
        WithStatement: function (e, t) {
            var i,
                s = this;
            return (
                H(function () {
                    i = [
                        "with" + F + "(",
                        s.generateExpression(e.object, h.Sequence, 7),
                        ")",
                    ];
                }),
                i.push(this.maybeBlock(e.body, 32 & t ? 33 : 1)),
                i
            );
        },
    }),
    T(Y.prototype, Y.Statement),
    (Y.Expression = {
        SequenceExpression: function (e, t, i) {
            var s, u, r;
            for (
                h.Sequence < t && (i |= 1),
                    s = [],
                    u = 0,
                    r = e.expressions.length;
                u < r;
                ++u
            )
                s.push(
                    this.generateExpression(e.expressions[u], h.Assignment, i)
                ),
                    u + 1 < r && s.push("," + F);
            return K(s, h.Sequence, t);
        },
        AssignmentExpression: function (e, t, i) {
            return this.generateAssignment(e.left, e.right, e.operator, t, i);
        },
        ArrowFunctionExpression: function (e, t) {
            return K(this.generateFunctionBody(e), h.ArrowFunction, t);
        },
        ConditionalExpression: function (e, t, i) {
            return (
                h.Conditional < t && (i |= 1),
                K(
                    [
                        this.generateExpression(e.test, h.LogicalOR, i),
                        F + "?" + F,
                        this.generateExpression(e.consequent, h.Assignment, i),
                        F + ":" + F,
                        this.generateExpression(e.alternate, h.Assignment, i),
                    ],
                    h.Conditional,
                    t
                )
            );
        },
        LogicalExpression: function (e, t, i) {
            return this.BinaryExpression(e, t, i);
        },
        BinaryExpression: function (e, t, i) {
            var s, u, r, n;
            return (
                (u = p[e.operator]) < t && (i |= 1),
                (s =
                    47 ===
                        (n = (r = this.generateExpression(
                            e.left,
                            u,
                            i
                        )).toString()).charCodeAt(n.length - 1) &&
                    o.isIdentifierPartES5(e.operator.charCodeAt(0))
                        ? [r, q(), e.operator]
                        : U(r, e.operator)),
                (r = this.generateExpression(e.right, u + 1, i)),
                ("/" === e.operator && "/" === r.toString().charAt(0)) ||
                ("<" === e.operator.slice(-1) &&
                    "!--" === r.toString().slice(0, 3))
                    ? (s.push(q()), s.push(r))
                    : (s = U(s, r)),
                "in" !== e.operator || 1 & i ? K(s, u, t) : ["(", s, ")"]
            );
        },
        CallExpression: function (e, t, i) {
            var s, u, r;
            for (
                (s = [this.generateExpression(e.callee, h.Call, 3)]).push("("),
                    u = 0,
                    r = e.arguments.length;
                u < r;
                ++u
            )
                s.push(
                    this.generateExpression(e.arguments[u], h.Assignment, 7)
                ),
                    u + 1 < r && s.push("," + F);
            return s.push(")"), 2 & i ? K(s, h.Call, t) : ["(", s, ")"];
        },
        NewExpression: function (e, t, i) {
            var s, u, r, n, a;
            if (
                ((u = e.arguments.length),
                (a = 4 & i && !g && 0 === u ? 5 : 1),
                (s = U("new", this.generateExpression(e.callee, h.New, a))),
                !(4 & i) || g || u > 0)
            ) {
                for (s.push("("), r = 0, n = u; r < n; ++r)
                    s.push(
                        this.generateExpression(e.arguments[r], h.Assignment, 7)
                    ),
                        r + 1 < n && s.push("," + F);
                s.push(")");
            }
            return K(s, h.New, t);
        },
        MemberExpression: function (t, i, s) {
            var u, r;
            return (
                (u = [
                    this.generateExpression(t.object, h.Call, 2 & s ? 3 : 1),
                ]),
                t.computed
                    ? (u.push("["),
                      u.push(
                          this.generateExpression(
                              t.property,
                              h.Sequence,
                              2 & s ? 7 : 5
                          )
                      ),
                      u.push("]"))
                    : (t.object.type === e.Literal &&
                          "number" == typeof t.object.value &&
                          (r = O(u).toString()).indexOf(".") < 0 &&
                          !/[eExX]/.test(r) &&
                          o.isDecimalDigit(r.charCodeAt(r.length - 1)) &&
                          !(r.length >= 2 && 48 === r.charCodeAt(0)) &&
                          u.push(" "),
                      u.push("."),
                      u.push(X(t.property))),
                K(u, h.Member, i)
            );
        },
        MetaProperty: function (e, t) {
            var i;
            return (
                (i = []).push("string" == typeof e.meta ? e.meta : X(e.meta)),
                i.push("."),
                i.push(
                    "string" == typeof e.property ? e.property : X(e.property)
                ),
                K(i, h.Member, t)
            );
        },
        UnaryExpression: function (e, t) {
            var i, s, u, r, n;
            return (
                (s = this.generateExpression(e.argument, h.Unary, 7)),
                "" === F
                    ? (i = U(e.operator, s))
                    : ((i = [e.operator]),
                      e.operator.length > 2
                          ? (i = U(i, s))
                          : ((n = (r = O(i).toString()).charCodeAt(
                                r.length - 1
                            )),
                            (u = s.toString().charCodeAt(0)),
                            ((43 === n || 45 === n) && n === u) ||
                            (o.isIdentifierPartES5(n) &&
                                o.isIdentifierPartES5(u))
                                ? (i.push(q()), i.push(s))
                                : i.push(s))),
                K(i, h.Unary, t)
            );
        },
        YieldExpression: function (e, t) {
            var i;
            return (
                (i = e.delegate ? "yield*" : "yield"),
                e.argument &&
                    (i = U(i, this.generateExpression(e.argument, h.Yield, 7))),
                K(i, h.Yield, t)
            );
        },
        AwaitExpression: function (e, t) {
            return K(
                U(
                    e.all ? "await*" : "await",
                    this.generateExpression(e.argument, h.Await, 7)
                ),
                h.Await,
                t
            );
        },
        UpdateExpression: function (e, t) {
            return e.prefix
                ? K(
                      [
                          e.operator,
                          this.generateExpression(e.argument, h.Unary, 7),
                      ],
                      h.Unary,
                      t
                  )
                : K(
                      [
                          this.generateExpression(e.argument, h.Postfix, 7),
                          e.operator,
                      ],
                      h.Postfix,
                      t
                  );
        },
        FunctionExpression: function (e) {
            var t = [Z(e, !0), "function"];
            return (
                e.id
                    ? (t.push($(e) || q()), t.push(X(e.id)))
                    : t.push($(e) || F),
                t.push(this.generateFunctionBody(e)),
                t
            );
        },
        ArrayPattern: function (e, t, i) {
            return this.ArrayExpression(e, t, i, !0);
        },
        ArrayExpression: function (e, t, i, s) {
            var u,
                r,
                n = this;
            return e.elements.length
                ? ((r = !s && e.elements.length > 1),
                  (u = ["[", r ? E : ""]),
                  H(function (t) {
                      var i, s;
                      for (i = 0, s = e.elements.length; i < s; ++i)
                          e.elements[i]
                              ? (u.push(r ? t : ""),
                                u.push(
                                    n.generateExpression(
                                        e.elements[i],
                                        h.Assignment,
                                        7
                                    )
                                ))
                              : (r && u.push(t), i + 1 === s && u.push(",")),
                              i + 1 < s && u.push("," + (r ? E : F));
                  }),
                  r && !P(O(u).toString()) && u.push(E),
                  u.push(r ? l : ""),
                  u.push("]"),
                  u)
                : "[]";
        },
        RestElement: function (e) {
            return "..." + this.generatePattern(e.argument);
        },
        ClassExpression: function (e) {
            var t, i;
            return (
                (t = ["class"]),
                e.id &&
                    (t = U(t, this.generateExpression(e.id, h.Sequence, 7))),
                e.superClass &&
                    ((i = U(
                        "extends",
                        this.generateExpression(e.superClass, h.Assignment, 7)
                    )),
                    (t = U(t, i))),
                t.push(F),
                t.push(this.generateStatement(e.body, 33)),
                t
            );
        },
        MethodDefinition: function (e) {
            var t, i;
            return (
                (t = e.static ? ["static" + F] : []),
                (i =
                    "get" === e.kind || "set" === e.kind
                        ? [
                              U(
                                  e.kind,
                                  this.generatePropertyKey(e.key, e.computed)
                              ),
                              this.generateFunctionBody(e.value),
                          ]
                        : [
                              J(e),
                              this.generatePropertyKey(e.key, e.computed),
                              this.generateFunctionBody(e.value),
                          ]),
                U(t, i)
            );
        },
        Property: function (e) {
            return "get" === e.kind || "set" === e.kind
                ? [
                      e.kind,
                      q(),
                      this.generatePropertyKey(e.key, e.computed),
                      this.generateFunctionBody(e.value),
                  ]
                : e.shorthand
                ? "AssignmentPattern" === e.value.type
                    ? this.AssignmentPattern(e.value, h.Sequence, 7)
                    : this.generatePropertyKey(e.key, e.computed)
                : e.method
                ? [
                      J(e),
                      this.generatePropertyKey(e.key, e.computed),
                      this.generateFunctionBody(e.value),
                  ]
                : [
                      this.generatePropertyKey(e.key, e.computed),
                      ":" + F,
                      this.generateExpression(e.value, h.Assignment, 7),
                  ];
        },
        ObjectExpression: function (e) {
            var t,
                i,
                s,
                u,
                r = this;
            return e.properties.length
                ? ((t = e.properties.length > 1),
                  H(function () {
                      s = r.generateExpression(e.properties[0], h.Sequence, 7);
                  }),
                  t || ((u = O(s).toString()), /[\r\n]/g.test(u))
                      ? (H(function (u) {
                            var n, a;
                            if (((i = ["{", E, u, s]), t))
                                for (
                                    i.push("," + E),
                                        n = 1,
                                        a = e.properties.length;
                                    n < a;
                                    ++n
                                )
                                    i.push(u),
                                        i.push(
                                            r.generateExpression(
                                                e.properties[n],
                                                h.Sequence,
                                                7
                                            )
                                        ),
                                        n + 1 < a && i.push("," + E);
                        }),
                        P(O(i).toString()) || i.push(E),
                        i.push(l),
                        i.push("}"),
                        i)
                      : ["{", F, s, F, "}"])
                : "{}";
        },
        AssignmentPattern: function (e, t, i) {
            return this.generateAssignment(e.left, e.right, "=", t, i);
        },
        ObjectPattern: function (t) {
            var i,
                s,
                u,
                r,
                n = this;
            if (!t.properties.length) return "{}";
            if (((r = !1), 1 === t.properties.length))
                t.properties[0].value.type !== e.Identifier && (r = !0);
            else
                for (s = 0, u = t.properties.length; s < u; ++s)
                    if (!t.properties[s].shorthand) {
                        r = !0;
                        break;
                    }
            return (
                (i = ["{", r ? E : ""]),
                H(function (e) {
                    var s, u;
                    for (s = 0, u = t.properties.length; s < u; ++s)
                        i.push(r ? e : ""),
                            i.push(
                                n.generateExpression(
                                    t.properties[s],
                                    h.Sequence,
                                    7
                                )
                            ),
                            s + 1 < u && i.push("," + (r ? E : F));
                }),
                r && !P(O(i).toString()) && i.push(E),
                i.push(r ? l : ""),
                i.push("}"),
                i
            );
        },
        ThisExpression: function () {
            return "this";
        },
        Super: function () {
            return "super";
        },
        Identifier: function (e) {
            return X(e);
        },
        ImportDefaultSpecifier: function (e) {
            return X(e.id || e.local);
        },
        ImportNamespaceSpecifier: function (e) {
            var t = ["*"],
                i = e.id || e.local;
            return i && t.push(F + "as" + q() + X(i)), t;
        },
        ImportSpecifier: function (e) {
            var t = e.imported,
                i = [t.name],
                s = e.local;
            return s && s.name !== t.name && i.push(q() + "as" + q() + X(s)), i;
        },
        ExportSpecifier: function (e) {
            var t = e.local,
                i = [t.name],
                s = e.exported;
            return s && s.name !== t.name && i.push(q() + "as" + q() + X(s)), i;
        },
        Literal: function (t) {
            var i;
            if (t.hasOwnProperty("raw") && S && v.raw)
                try {
                    if (
                        (i = S(t.raw).body[0].expression).type === e.Literal &&
                        i.value === t.value
                    )
                        return t.raw;
                } catch (e) {}
            return null === t.value
                ? "null"
                : "string" == typeof t.value
                ? (function (e) {
                      var t,
                          i,
                          s,
                          u,
                          r,
                          n = "",
                          a = 0,
                          h = 0;
                      for (t = 0, i = e.length; t < i; ++t) {
                          if (39 === (s = e.charCodeAt(t))) ++a;
                          else if (34 === s) ++h;
                          else if (47 === s && d) n += "\\";
                          else {
                              if (o.isLineTerminator(s) || 92 === s) {
                                  n += R(s);
                                  continue;
                              }
                              if (
                                  !o.isIdentifierPartES5(s) &&
                                  ((d && s < 32) ||
                                      (!d && !m && (s < 32 || s > 126)))
                              ) {
                                  n += V(s, e.charCodeAt(t + 1));
                                  continue;
                              }
                          }
                          n += String.fromCharCode(s);
                      }
                      if (
                          ((r = (u = !(
                              "double" === C ||
                              ("auto" === C && h < a)
                          ))
                              ? "'"
                              : '"'),
                          !(u ? a : h))
                      )
                          return r + n + r;
                      for (e = n, n = r, t = 0, i = e.length; t < i; ++t)
                          ((39 === (s = e.charCodeAt(t)) && u) ||
                              (34 === s && !u)) &&
                              (n += "\\"),
                              (n += String.fromCharCode(s));
                      return n + r;
                  })(t.value)
                : "number" == typeof t.value
                ? (function (e) {
                      var t, i, s, u, r;
                      if (e != e)
                          throw new Error("Numeric literal whose value is NaN");
                      if (e < 0 || (0 === e && 1 / e < 0))
                          throw new Error(
                              "Numeric literal whose value is negative"
                          );
                      if (e === 1 / 0)
                          return d ? "null" : f ? "1e400" : "1e+400";
                      if (((t = "" + e), !f || t.length < 3)) return t;
                      for (
                          i = t.indexOf("."),
                              d ||
                                  48 !== t.charCodeAt(0) ||
                                  1 !== i ||
                                  ((i = 0), (t = t.slice(1))),
                              s = t,
                              t = t.replace("e+", "e"),
                              u = 0,
                              (r = s.indexOf("e")) > 0 &&
                                  ((u = +s.slice(r + 1)), (s = s.slice(0, r))),
                              i >= 0 &&
                                  ((u -= s.length - i - 1),
                                  (s = +(s.slice(0, i) + s.slice(i + 1)) + "")),
                              r = 0;
                          48 === s.charCodeAt(s.length + r - 1);

                      )
                          --r;
                      return (
                          0 !== r && ((u -= r), (s = s.slice(0, r))),
                          0 !== u && (s += "e" + u),
                          (s.length < t.length ||
                              (A &&
                                  e > 1e12 &&
                                  Math.floor(e) === e &&
                                  (s = "0x" + e.toString(16)).length <
                                      t.length)) &&
                              +s === e &&
                              (t = s),
                          t
                      );
                  })(t.value)
                : "boolean" == typeof t.value
                ? t.value
                    ? "true"
                    : "false"
                : t.regex
                ? "/" + t.regex.pattern + "/" + t.regex.flags
                : (function (e) {
                      var t, i, s, u, r, n, a, o;
                      if (((i = e.toString()), e.source)) {
                          if (!(t = i.match(/\/([^/]*)$/))) return i;
                          for (
                              s = t[1],
                                  i = "",
                                  a = !1,
                                  o = !1,
                                  u = 0,
                                  r = e.source.length;
                              u < r;
                              ++u
                          )
                              (n = e.source.charCodeAt(u)),
                                  o
                                      ? ((i += L(n, o)), (o = !1))
                                      : (a
                                            ? 93 === n && (a = !1)
                                            : 47 === n
                                            ? (i += "\\")
                                            : 91 === n && (a = !0),
                                        (i += L(n, o)),
                                        (o = 92 === n));
                          return "/" + i + "/" + s;
                      }
                      return i;
                  })(t.value);
        },
        GeneratorExpression: function (e, t, i) {
            return this.ComprehensionExpression(e, t, i);
        },
        ComprehensionExpression: function (t) {
            var i,
                s,
                u,
                r,
                n = this;
            return (
                (i = t.type === e.GeneratorExpression ? ["("] : ["["]),
                v.moz.comprehensionExpressionStartsWithAssignment &&
                    ((r = this.generateExpression(t.body, h.Assignment, 7)),
                    i.push(r)),
                t.blocks &&
                    H(function () {
                        for (s = 0, u = t.blocks.length; s < u; ++s)
                            (r = n.generateExpression(
                                t.blocks[s],
                                h.Sequence,
                                7
                            )),
                                s > 0 ||
                                v.moz
                                    .comprehensionExpressionStartsWithAssignment
                                    ? (i = U(i, r))
                                    : i.push(r);
                    }),
                t.filter &&
                    ((i = U(i, "if" + F)),
                    (r = this.generateExpression(t.filter, h.Sequence, 7)),
                    (i = U(i, ["(", r, ")"]))),
                v.moz.comprehensionExpressionStartsWithAssignment ||
                    ((r = this.generateExpression(t.body, h.Assignment, 7)),
                    (i = U(i, r))),
                i.push(t.type === e.GeneratorExpression ? ")" : "]"),
                i
            );
        },
        ComprehensionBlock: function (t) {
            var i;
            return (
                (i = U(
                    (i =
                        t.left.type === e.VariableDeclaration
                            ? [
                                  t.left.kind,
                                  q(),
                                  this.generateStatement(
                                      t.left.declarations[0],
                                      0
                                  ),
                              ]
                            : this.generateExpression(t.left, h.Call, 7)),
                    t.of ? "of" : "in"
                )),
                (i = U(i, this.generateExpression(t.right, h.Sequence, 7))),
                ["for" + F + "(", i, ")"]
            );
        },
        SpreadElement: function (e) {
            return [
                "...",
                this.generateExpression(e.argument, h.Assignment, 7),
            ];
        },
        TaggedTemplateExpression: function (e, t, i) {
            var s = 3;
            return (
                2 & i || (s = 1),
                K(
                    [
                        this.generateExpression(e.tag, h.Call, s),
                        this.generateExpression(e.quasi, h.Primary, 4),
                    ],
                    h.TaggedTemplate,
                    t
                )
            );
        },
        TemplateElement: function (e) {
            return e.value.raw;
        },
        TemplateLiteral: function (e) {
            var t, i, s;
            for (t = ["`"], i = 0, s = e.quasis.length; i < s; ++i)
                t.push(this.generateExpression(e.quasis[i], h.Primary, 7)),
                    i + 1 < s &&
                        (t.push("${" + F),
                        t.push(
                            this.generateExpression(
                                e.expressions[i],
                                h.Sequence,
                                7
                            )
                        ),
                        t.push(F + "}"));
            return t.push("`"), t;
        },
        ModuleSpecifier: function (e, t, i) {
            return this.Literal(e, t, i);
        },
    }),
    T(Y.prototype, Y.Expression),
    (Y.prototype.generateExpression = function (t, i, s) {
        var u, r;
        return (
            (r = t.type || e.Property),
            v.verbatim && t.hasOwnProperty(v.verbatim)
                ? (function (e, t) {
                      var i;
                      return O(
                          "string" == typeof (i = e[v.verbatim])
                              ? K(Q(i), h.Sequence, t)
                              : K(
                                    Q(i.content),
                                    null != i.precedence
                                        ? i.precedence
                                        : h.Sequence,
                                    t
                                ),
                          e
                      );
                  })(t, i)
                : ((u = this[r](t, i, s)), v.comment && (u = G(t, u)), O(u, t))
        );
    }),
    (Y.prototype.generateStatement = function (t, i) {
        var s, u;
        return (
            (s = this[t.type](t, i)),
            v.comment && (s = G(t, s)),
            (u = O(s).toString()),
            t.type !== e.Program ||
                B ||
                "" !== E ||
                "\n" !== u.charAt(u.length - 1) ||
                (s = _ ? O(s).replaceRight(/\s+$/, "") : u.replace(/\s+$/, "")),
            O(s, t)
        );
    });
const te = function (e, t) {
    var i,
        s,
        u = {
            indent: null,
            base: null,
            parse: null,
            comment: !1,
            format: {
                indent: { style: "    ", base: 0, adjustMultilineComment: !1 },
                newline: "\n",
                space: " ",
                json: !1,
                renumber: !1,
                hexadecimal: !1,
                quotes: "single",
                escapeless: !1,
                compact: !1,
                parentheses: !0,
                semicolons: !0,
                safeConcatenation: !1,
                preserveBlankLines: !1,
            },
            moz: {
                comprehensionExpressionStartsWithAssignment: !1,
                starlessGenerator: !1,
            },
            sourceMap: null,
            sourceMapRoot: null,
            sourceMapWithCode: !1,
            directive: !1,
            raw: !0,
            verbatim: null,
            sourceCode: null,
        };
    return (
        null != t
            ? ("string" == typeof t.indent &&
                  (u.format.indent.style = t.indent),
              "number" == typeof t.base && (u.format.indent.base = t.base),
              (t = N(u, t)),
              (D = t.format.indent.style),
              (l =
                  "string" == typeof t.base
                      ? t.base
                      : I(D, t.format.indent.base)))
            : ((D = (t = u).format.indent.style),
              (l = I(D, t.format.indent.base))),
        (d = t.format.json),
        (f = t.format.renumber),
        (A = !d && t.format.hexadecimal),
        (C = d ? "double" : t.format.quotes),
        (m = t.format.escapeless),
        (E = t.format.newline),
        (F = t.format.space),
        t.format.compact && (E = F = D = l = ""),
        (g = t.format.parentheses),
        (x = t.format.semicolons),
        (B = t.format.safeConcatenation),
        (y = t.directive),
        (S = d ? null : t.parse),
        (_ = t.sourceMap),
        (b = t.sourceCode),
        (k = t.format.preserveBlankLines && null !== b),
        (v = t),
        _ && (c = function () {}),
        (i = ee(e)),
        _
            ? ((s = i.toStringWithSourceMap({
                  file: t.file,
                  sourceRoot: t.sourceMapRoot,
              })),
              t.sourceContent &&
                  s.map.setSourceContent(t.sourceMap, t.sourceContent),
              t.sourceMapWithCode ? s : s.map.toString())
            : ((s = { code: i.toString(), map: null }),
              t.sourceMapWithCode ? s : s.code)
    );
};
N({}, h);
var ie = [
        509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166,
        1, 574, 3, 9, 9, 370, 1, 154, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1,
        11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49,
        13, 9, 3, 2, 11, 83, 11, 7, 0, 161, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1,
        3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9,
        214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14,
        166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9,
        41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13,
        123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3,
        19306, 9, 87, 9, 39, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12,
        1, 19628, 1, 4706, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2,
        1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3,
        6, 2, 1, 2, 4, 262, 6, 10, 9, 357, 0, 62, 13, 1495, 6, 110, 6, 6, 9,
        4759, 9, 787719, 239,
    ],
    se = [
        0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4,
        48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35,
        5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2,
        1, 68, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1,
        4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1,
        65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21,
        11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28,
        11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33,
        24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36,
        17, 2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2,
        6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1,
        2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186,
        43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38,
        17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 264, 8,
        2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31,
        15, 0, 328, 18, 190, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1070,
        4050, 582, 8634, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6,
        18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43,
        8, 8936, 3, 2, 6, 2, 1, 2, 290, 46, 2, 18, 3, 9, 395, 2309, 106, 6, 12,
        4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6,
        2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24,
        2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7,
        1845, 30, 482, 44, 11, 6, 17, 0, 322, 29, 19, 43, 1269, 6, 2, 3, 2, 1,
        2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2,
        3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2,
        0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6,
        2, 2, 4, 2, 16, 4421, 42719, 33, 4152, 8, 221, 3, 5761, 15, 7472, 3104,
        541, 1507, 4938,
    ],
    ue =
        "\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u037f\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u052f\u0531-\u0556\u0559\u0560-\u0588\u05d0-\u05ea\u05ef-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u0860-\u086a\u0870-\u0887\u0889-\u088e\u08a0-\u08c9\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u09fc\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0af9\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c39\u0c3d\u0c58-\u0c5a\u0c5d\u0c60\u0c61\u0c80\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cdd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d04-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d54-\u0d56\u0d5f-\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e86-\u0e8a\u0e8c-\u0ea3\u0ea5\u0ea7-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f5\u13f8-\u13fd\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f8\u1700-\u1711\u171f-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1878\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191e\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4c\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1c80-\u1c88\u1c90-\u1cba\u1cbd-\u1cbf\u1ce9-\u1cec\u1cee-\u1cf3\u1cf5\u1cf6\u1cfa\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2118-\u211d\u2124\u2126\u2128\u212a-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309b-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312f\u3131-\u318e\u31a0-\u31bf\u31f0-\u31ff\u3400-\u4dbf\u4e00-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua69d\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua7ca\ua7d0\ua7d1\ua7d3\ua7d5-\ua7d9\ua7f2-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua8fd\ua8fe\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\ua9e0-\ua9e4\ua9e6-\ua9ef\ua9fa-\ua9fe\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa7e-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uab30-\uab5a\uab5c-\uab69\uab70-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc",
    re = {
        3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
        5: "class enum extends super const export import",
        6: "enum",
        strict: "implements interface let package private protected public static yield",
        strictBind: "eval arguments",
    },
    ne =
        "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this",
    ae = {
        5: ne,
        "5module": ne + " export import",
        6: ne + " const class extends export import super",
    },
    oe = /^in(stanceof)?$/,
    he = new RegExp("[" + ue + "]"),
    pe = new RegExp(
        "[" +
            ue +
            "\u200c\u200d\xb7\u0300-\u036f\u0387\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u0669\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7\u06e8\u06ea-\u06ed\u06f0-\u06f9\u0711\u0730-\u074a\u07a6-\u07b0\u07c0-\u07c9\u07eb-\u07f3\u07fd\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u0898-\u089f\u08ca-\u08e1\u08e3-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09cb-\u09cd\u09d7\u09e2\u09e3\u09e6-\u09ef\u09fe\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2\u0ae3\u0ae6-\u0aef\u0afa-\u0aff\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b55-\u0b57\u0b62\u0b63\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c00-\u0c04\u0c3c\u0c3e-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0c66-\u0c6f\u0c81-\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0ce6-\u0cef\u0d00-\u0d03\u0d3b\u0d3c\u0d3e-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57\u0d62\u0d63\u0d66-\u0d6f\u0d81-\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0de6-\u0def\u0df2\u0df3\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0e50-\u0e59\u0eb1\u0eb4-\u0ebc\u0ec8-\u0ecd\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f3e\u0f3f\u0f71-\u0f84\u0f86\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102b-\u103e\u1040-\u1049\u1056-\u1059\u105e-\u1060\u1062-\u1064\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u1369-\u1371\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17b4-\u17d3\u17dd\u17e0-\u17e9\u180b-\u180d\u180f-\u1819\u18a9\u1920-\u192b\u1930-\u193b\u1946-\u194f\u19d0-\u19da\u1a17-\u1a1b\u1a55-\u1a5e\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1ab0-\u1abd\u1abf-\u1ace\u1b00-\u1b04\u1b34-\u1b44\u1b50-\u1b59\u1b6b-\u1b73\u1b80-\u1b82\u1ba1-\u1bad\u1bb0-\u1bb9\u1be6-\u1bf3\u1c24-\u1c37\u1c40-\u1c49\u1c50-\u1c59\u1cd0-\u1cd2\u1cd4-\u1ce8\u1ced\u1cf4\u1cf7-\u1cf9\u1dc0-\u1dff\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua620-\ua629\ua66f\ua674-\ua67d\ua69e\ua69f\ua6f0\ua6f1\ua802\ua806\ua80b\ua823-\ua827\ua82c\ua880\ua881\ua8b4-\ua8c5\ua8d0-\ua8d9\ua8e0-\ua8f1\ua8ff-\ua909\ua926-\ua92d\ua947-\ua953\ua980-\ua983\ua9b3-\ua9c0\ua9d0-\ua9d9\ua9e5\ua9f0-\ua9f9\uaa29-\uaa36\uaa43\uaa4c\uaa4d\uaa50-\uaa59\uaa7b-\uaa7d\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uaaeb-\uaaef\uaaf5\uaaf6\uabe3-\uabea\uabec\uabed\uabf0-\uabf9\ufb1e\ufe00-\ufe0f\ufe20-\ufe2f\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f]"
    );
function ce(e, t) {
    for (var i = 65536, s = 0; s < t.length; s += 2) {
        if ((i += t[s]) > e) return !1;
        if ((i += t[s + 1]) >= e) return !0;
    }
}
function le(e, t) {
    return e < 65
        ? 36 === e
        : e < 91 ||
              (e < 97
                  ? 95 === e
                  : e < 123 ||
                    (e <= 65535
                        ? e >= 170 && he.test(String.fromCharCode(e))
                        : !1 !== t && ce(e, se)));
}
function De(e, t) {
    return e < 48
        ? 36 === e
        : e < 58 ||
              (!(e < 65) &&
                  (e < 91 ||
                      (e < 97
                          ? 95 === e
                          : e < 123 ||
                            (e <= 65535
                                ? e >= 170 && pe.test(String.fromCharCode(e))
                                : !1 !== t && (ce(e, se) || ce(e, ie))))));
}
var de = function (e, t) {
    void 0 === t && (t = {}),
        (this.label = e),
        (this.keyword = t.keyword),
        (this.beforeExpr = !!t.beforeExpr),
        (this.startsExpr = !!t.startsExpr),
        (this.isLoop = !!t.isLoop),
        (this.isAssign = !!t.isAssign),
        (this.prefix = !!t.prefix),
        (this.postfix = !!t.postfix),
        (this.binop = t.binop || null),
        (this.updateContext = null);
};
function fe(e, t) {
    return new de(e, { beforeExpr: !0, binop: t });
}
var Ae = { beforeExpr: !0 },
    Ce = { startsExpr: !0 },
    me = {};
function Ee(e, t) {
    return void 0 === t && (t = {}), (t.keyword = e), (me[e] = new de(e, t));
}
var Fe = {
        num: new de("num", Ce),
        regexp: new de("regexp", Ce),
        string: new de("string", Ce),
        name: new de("name", Ce),
        privateId: new de("privateId", Ce),
        eof: new de("eof"),
        bracketL: new de("[", { beforeExpr: !0, startsExpr: !0 }),
        bracketR: new de("]"),
        braceL: new de("{", { beforeExpr: !0, startsExpr: !0 }),
        braceR: new de("}"),
        parenL: new de("(", { beforeExpr: !0, startsExpr: !0 }),
        parenR: new de(")"),
        comma: new de(",", Ae),
        semi: new de(";", Ae),
        colon: new de(":", Ae),
        dot: new de("."),
        question: new de("?", Ae),
        questionDot: new de("?."),
        arrow: new de("=>", Ae),
        template: new de("template"),
        invalidTemplate: new de("invalidTemplate"),
        ellipsis: new de("...", Ae),
        backQuote: new de("`", Ce),
        dollarBraceL: new de("${", { beforeExpr: !0, startsExpr: !0 }),
        eq: new de("=", { beforeExpr: !0, isAssign: !0 }),
        assign: new de("_=", { beforeExpr: !0, isAssign: !0 }),
        incDec: new de("++/--", { prefix: !0, postfix: !0, startsExpr: !0 }),
        prefix: new de("!/~", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
        logicalOR: fe("||", 1),
        logicalAND: fe("&&", 2),
        bitwiseOR: fe("|", 3),
        bitwiseXOR: fe("^", 4),
        bitwiseAND: fe("&", 5),
        equality: fe("==/!=/===/!==", 6),
        relational: fe("</>/<=/>=", 7),
        bitShift: fe("<</>>/>>>", 8),
        plusMin: new de("+/-", {
            beforeExpr: !0,
            binop: 9,
            prefix: !0,
            startsExpr: !0,
        }),
        modulo: fe("%", 10),
        star: fe("*", 10),
        slash: fe("/", 10),
        starstar: new de("**", { beforeExpr: !0 }),
        coalesce: fe("??", 1),
        _break: Ee("break"),
        _case: Ee("case", Ae),
        _catch: Ee("catch"),
        _continue: Ee("continue"),
        _debugger: Ee("debugger"),
        _default: Ee("default", Ae),
        _do: Ee("do", { isLoop: !0, beforeExpr: !0 }),
        _else: Ee("else", Ae),
        _finally: Ee("finally"),
        _for: Ee("for", { isLoop: !0 }),
        _function: Ee("function", Ce),
        _if: Ee("if"),
        _return: Ee("return", Ae),
        _switch: Ee("switch"),
        _throw: Ee("throw", Ae),
        _try: Ee("try"),
        _var: Ee("var"),
        _const: Ee("const"),
        _while: Ee("while", { isLoop: !0 }),
        _with: Ee("with"),
        _new: Ee("new", { beforeExpr: !0, startsExpr: !0 }),
        _this: Ee("this", Ce),
        _super: Ee("super", Ce),
        _class: Ee("class", Ce),
        _extends: Ee("extends", Ae),
        _export: Ee("export"),
        _import: Ee("import", Ce),
        _null: Ee("null", Ce),
        _true: Ee("true", Ce),
        _false: Ee("false", Ce),
        _in: Ee("in", { beforeExpr: !0, binop: 7 }),
        _instanceof: Ee("instanceof", { beforeExpr: !0, binop: 7 }),
        _typeof: Ee("typeof", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
        _void: Ee("void", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
        _delete: Ee("delete", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
    },
    ge = /\r\n?|\n|\u2028|\u2029/,
    xe = new RegExp(ge.source, "g");
function Be(e) {
    return 10 === e || 13 === e || 8232 === e || 8233 === e;
}
function ye(e, t, i) {
    void 0 === i && (i = e.length);
    for (var s = t; s < i; s++) {
        var u = e.charCodeAt(s);
        if (Be(u))
            return s < i - 1 && 13 === u && 10 === e.charCodeAt(s + 1)
                ? s + 2
                : s + 1;
    }
    return -1;
}
var ve = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/,
    Se = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,
    be = Object.prototype,
    ke = be.hasOwnProperty,
    _e = be.toString,
    we =
        Object.hasOwn ||
        function (e, t) {
            return ke.call(e, t);
        },
    Ie =
        Array.isArray ||
        function (e) {
            return "[object Array]" === _e.call(e);
        };
function Pe(e) {
    return new RegExp("^(?:" + e.replace(/ /g, "|") + ")$");
}
function Te(e) {
    return e <= 65535
        ? String.fromCharCode(e)
        : ((e -= 65536),
          String.fromCharCode(55296 + (e >> 10), 56320 + (1023 & e)));
}
var Ne =
        /(?:[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/,
    Le = function (e, t) {
        (this.line = e), (this.column = t);
    };
Le.prototype.offset = function (e) {
    return new Le(this.line, this.column + e);
};
var Ve = function (e, t, i) {
    (this.start = t),
        (this.end = i),
        null !== e.sourceFile && (this.source = e.sourceFile);
};
function Re(e, t) {
    for (var i = 1, s = 0; ; ) {
        var u = ye(e, s, t);
        if (u < 0) return new Le(i, t - s);
        ++i, (s = u);
    }
}
var Me = {
        ecmaVersion: null,
        sourceType: "script",
        onInsertedSemicolon: null,
        onTrailingComma: null,
        allowReserved: null,
        allowReturnOutsideFunction: !1,
        allowImportExportEverywhere: !1,
        allowAwaitOutsideFunction: null,
        allowSuperOutsideMethod: null,
        allowHashBang: !1,
        locations: !1,
        onToken: null,
        onComment: null,
        ranges: !1,
        program: null,
        sourceFile: null,
        directSourceFile: null,
        preserveParens: !1,
    },
    Oe = !1;
function qe(e) {
    var t = {};
    for (var i in Me) t[i] = e && we(e, i) ? e[i] : Me[i];
    if (
        ("latest" === t.ecmaVersion
            ? (t.ecmaVersion = 1e8)
            : null == t.ecmaVersion
            ? (!Oe && "object" == typeof console && console.warn && (Oe = !0),
              (t.ecmaVersion = 11))
            : t.ecmaVersion >= 2015 && (t.ecmaVersion -= 2009),
        null == t.allowReserved && (t.allowReserved = t.ecmaVersion < 5),
        Ie(t.onToken))
    ) {
        var s = t.onToken;
        t.onToken = function (e) {
            return s.push(e);
        };
    }
    return (
        Ie(t.onComment) &&
            (t.onComment = (function (e, t) {
                return function (i, s, u, r, n, a) {
                    var o = {
                        type: i ? "Block" : "Line",
                        value: s,
                        start: u,
                        end: r,
                    };
                    e.locations && (o.loc = new Ve(this, n, a)),
                        e.ranges && (o.range = [u, r]),
                        t.push(o);
                };
            })(t, t.onComment)),
        t
    );
}
function Ue(e, t) {
    return 2 | (e ? 4 : 0) | (t ? 8 : 0);
}
var We = function (e, t, i) {
        (this.options = e = qe(e)),
            (this.sourceFile = e.sourceFile),
            (this.keywords = Pe(
                ae[
                    e.ecmaVersion >= 6
                        ? 6
                        : "module" === e.sourceType
                        ? "5module"
                        : 5
                ]
            ));
        var s = "";
        !0 !== e.allowReserved &&
            ((s = re[e.ecmaVersion >= 6 ? 6 : 5 === e.ecmaVersion ? 5 : 3]),
            "module" === e.sourceType && (s += " await")),
            (this.reservedWords = Pe(s));
        var u = (s ? s + " " : "") + re.strict;
        (this.reservedWordsStrict = Pe(u)),
            (this.reservedWordsStrictBind = Pe(u + " " + re.strictBind)),
            (this.input = String(t)),
            (this.containsEsc = !1),
            i
                ? ((this.pos = i),
                  (this.lineStart = this.input.lastIndexOf("\n", i - 1) + 1),
                  (this.curLine = this.input
                      .slice(0, this.lineStart)
                      .split(ge).length))
                : ((this.pos = this.lineStart = 0), (this.curLine = 1)),
            (this.type = Fe.eof),
            (this.value = null),
            (this.start = this.end = this.pos),
            (this.startLoc = this.endLoc = this.curPosition()),
            (this.lastTokEndLoc = this.lastTokStartLoc = null),
            (this.lastTokStart = this.lastTokEnd = this.pos),
            (this.context = this.initialContext()),
            (this.exprAllowed = !0),
            (this.inModule = "module" === e.sourceType),
            (this.strict = this.inModule || this.strictDirective(this.pos)),
            (this.potentialArrowAt = -1),
            (this.potentialArrowInForAwait = !1),
            (this.yieldPos = this.awaitPos = this.awaitIdentPos = 0),
            (this.labels = []),
            (this.undefinedExports = Object.create(null)),
            0 === this.pos &&
                e.allowHashBang &&
                "#!" === this.input.slice(0, 2) &&
                this.skipLineComment(2),
            (this.scopeStack = []),
            this.enterScope(1),
            (this.regexpState = null),
            (this.privateNameStack = []);
    },
    He = {
        inFunction: { configurable: !0 },
        inGenerator: { configurable: !0 },
        inAsync: { configurable: !0 },
        canAwait: { configurable: !0 },
        allowSuper: { configurable: !0 },
        allowDirectSuper: { configurable: !0 },
        treatFunctionsAsVar: { configurable: !0 },
        allowNewDotTarget: { configurable: !0 },
        inClassStaticBlock: { configurable: !0 },
    };
(We.prototype.parse = function () {
    var e = this.options.program || this.startNode();
    return this.nextToken(), this.parseTopLevel(e);
}),
    (He.inFunction.get = function () {
        return (2 & this.currentVarScope().flags) > 0;
    }),
    (He.inGenerator.get = function () {
        return (
            (8 & this.currentVarScope().flags) > 0 &&
            !this.currentVarScope().inClassFieldInit
        );
    }),
    (He.inAsync.get = function () {
        return (
            (4 & this.currentVarScope().flags) > 0 &&
            !this.currentVarScope().inClassFieldInit
        );
    }),
    (He.canAwait.get = function () {
        for (var e = this.scopeStack.length - 1; e >= 0; e--) {
            var t = this.scopeStack[e];
            if (t.inClassFieldInit || 256 & t.flags) return !1;
            if (2 & t.flags) return (4 & t.flags) > 0;
        }
        return (
            (this.inModule && this.options.ecmaVersion >= 13) ||
            this.options.allowAwaitOutsideFunction
        );
    }),
    (He.allowSuper.get = function () {
        var e = this.currentThisScope(),
            t = e.flags,
            i = e.inClassFieldInit;
        return (64 & t) > 0 || i || this.options.allowSuperOutsideMethod;
    }),
    (He.allowDirectSuper.get = function () {
        return (128 & this.currentThisScope().flags) > 0;
    }),
    (He.treatFunctionsAsVar.get = function () {
        return this.treatFunctionsAsVarInScope(this.currentScope());
    }),
    (He.allowNewDotTarget.get = function () {
        var e = this.currentThisScope(),
            t = e.flags,
            i = e.inClassFieldInit;
        return (258 & t) > 0 || i;
    }),
    (He.inClassStaticBlock.get = function () {
        return (256 & this.currentVarScope().flags) > 0;
    }),
    (We.extend = function () {
        for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
        for (var i = this, s = 0; s < e.length; s++) i = e[s](i);
        return i;
    }),
    (We.parse = function (e, t) {
        return new this(t, e).parse();
    }),
    (We.parseExpressionAt = function (e, t, i) {
        var s = new this(i, e, t);
        return s.nextToken(), s.parseExpression();
    }),
    (We.tokenizer = function (e, t) {
        return new this(t, e);
    }),
    Object.defineProperties(We.prototype, He);
var je = We.prototype,
    Ge = /^(?:'((?:\\.|[^'\\])*?)'|"((?:\\.|[^"\\])*?)")/;
(je.strictDirective = function (e) {
    if (this.options.ecmaVersion < 5) return !1;
    for (;;) {
        (Se.lastIndex = e), (e += Se.exec(this.input)[0].length);
        var t = Ge.exec(this.input.slice(e));
        if (!t) return !1;
        if ("use strict" === (t[1] || t[2])) {
            Se.lastIndex = e + t[0].length;
            var i = Se.exec(this.input),
                s = i.index + i[0].length,
                u = this.input.charAt(s);
            return (
                ";" === u ||
                "}" === u ||
                (ge.test(i[0]) &&
                    !(
                        /[(`.[+\-/*%<>=,?^&]/.test(u) ||
                        ("!" === u && "=" === this.input.charAt(s + 1))
                    ))
            );
        }
        (e += t[0].length),
            (Se.lastIndex = e),
            (e += Se.exec(this.input)[0].length),
            ";" === this.input[e] && e++;
    }
}),
    (je.eat = function (e) {
        return this.type === e && (this.next(), !0);
    }),
    (je.isContextual = function (e) {
        return this.type === Fe.name && this.value === e && !this.containsEsc;
    }),
    (je.eatContextual = function (e) {
        return !!this.isContextual(e) && (this.next(), !0);
    }),
    (je.expectContextual = function (e) {
        this.eatContextual(e) || this.unexpected();
    }),
    (je.canInsertSemicolon = function () {
        return (
            this.type === Fe.eof ||
            this.type === Fe.braceR ||
            ge.test(this.input.slice(this.lastTokEnd, this.start))
        );
    }),
    (je.insertSemicolon = function () {
        if (this.canInsertSemicolon())
            return (
                this.options.onInsertedSemicolon &&
                    this.options.onInsertedSemicolon(
                        this.lastTokEnd,
                        this.lastTokEndLoc
                    ),
                !0
            );
    }),
    (je.semicolon = function () {
        this.eat(Fe.semi) || this.insertSemicolon() || this.unexpected();
    }),
    (je.afterTrailingComma = function (e, t) {
        if (this.type === e)
            return (
                this.options.onTrailingComma &&
                    this.options.onTrailingComma(
                        this.lastTokStart,
                        this.lastTokStartLoc
                    ),
                t || this.next(),
                !0
            );
    }),
    (je.expect = function (e) {
        this.eat(e) || this.unexpected();
    }),
    (je.unexpected = function (e) {
        this.raise(null != e ? e : this.start, "Unexpected token");
    });
var ze = function () {
    this.shorthandAssign =
        this.trailingComma =
        this.parenthesizedAssign =
        this.parenthesizedBind =
        this.doubleProto =
            -1;
};
(je.checkPatternErrors = function (e, t) {
    if (e) {
        e.trailingComma > -1 &&
            this.raiseRecoverable(
                e.trailingComma,
                "Comma is not permitted after the rest element"
            );
        var i = t ? e.parenthesizedAssign : e.parenthesizedBind;
        i > -1 && this.raiseRecoverable(i, "Parenthesized pattern");
    }
}),
    (je.checkExpressionErrors = function (e, t) {
        if (!e) return !1;
        var i = e.shorthandAssign,
            s = e.doubleProto;
        if (!t) return i >= 0 || s >= 0;
        i >= 0 &&
            this.raise(
                i,
                "Shorthand property assignments are valid only in destructuring patterns"
            ),
            s >= 0 &&
                this.raiseRecoverable(s, "Redefinition of __proto__ property");
    }),
    (je.checkYieldAwaitInDefaultParams = function () {
        this.yieldPos &&
            (!this.awaitPos || this.yieldPos < this.awaitPos) &&
            this.raise(
                this.yieldPos,
                "Yield expression cannot be a default value"
            ),
            this.awaitPos &&
                this.raise(
                    this.awaitPos,
                    "Await expression cannot be a default value"
                );
    }),
    (je.isSimpleAssignTarget = function (e) {
        return "ParenthesizedExpression" === e.type
            ? this.isSimpleAssignTarget(e.expression)
            : "Identifier" === e.type || "MemberExpression" === e.type;
    });
var Ke = We.prototype;
Ke.parseTopLevel = function (e) {
    var t = Object.create(null);
    for (e.body || (e.body = []); this.type !== Fe.eof; ) {
        var i = this.parseStatement(null, !0, t);
        e.body.push(i);
    }
    if (this.inModule)
        for (
            var s = 0, u = Object.keys(this.undefinedExports);
            s < u.length;
            s += 1
        ) {
            var r = u[s];
            this.raiseRecoverable(
                this.undefinedExports[r].start,
                "Export '" + r + "' is not defined"
            );
        }
    return (
        this.adaptDirectivePrologue(e.body),
        this.next(),
        (e.sourceType = this.options.sourceType),
        this.finishNode(e, "Program")
    );
};
var Qe = { kind: "loop" },
    Ye = { kind: "switch" };
(Ke.isLet = function (e) {
    if (this.options.ecmaVersion < 6 || !this.isContextual("let")) return !1;
    Se.lastIndex = this.pos;
    var t = Se.exec(this.input),
        i = this.pos + t[0].length,
        s = this.input.charCodeAt(i);
    if (91 === s || 92 === s || (s > 55295 && s < 56320)) return !0;
    if (e) return !1;
    if (123 === s) return !0;
    if (le(s, !0)) {
        for (var u = i + 1; De((s = this.input.charCodeAt(u)), !0); ) ++u;
        if (92 === s || (s > 55295 && s < 56320)) return !0;
        var r = this.input.slice(i, u);
        if (!oe.test(r)) return !0;
    }
    return !1;
}),
    (Ke.isAsyncFunction = function () {
        if (this.options.ecmaVersion < 8 || !this.isContextual("async"))
            return !1;
        Se.lastIndex = this.pos;
        var e,
            t = Se.exec(this.input),
            i = this.pos + t[0].length;
        return !(
            ge.test(this.input.slice(this.pos, i)) ||
            "function" !== this.input.slice(i, i + 8) ||
            (i + 8 !== this.input.length &&
                (De((e = this.input.charCodeAt(i + 8))) ||
                    (e > 55295 && e < 56320)))
        );
    }),
    (Ke.parseStatement = function (e, t, i) {
        var s,
            u = this.type,
            r = this.startNode();
        switch ((this.isLet(e) && ((u = Fe._var), (s = "let")), u)) {
            case Fe._break:
            case Fe._continue:
                return this.parseBreakContinueStatement(r, u.keyword);
            case Fe._debugger:
                return this.parseDebuggerStatement(r);
            case Fe._do:
                return this.parseDoStatement(r);
            case Fe._for:
                return this.parseForStatement(r);
            case Fe._function:
                return (
                    e &&
                        (this.strict || ("if" !== e && "label" !== e)) &&
                        this.options.ecmaVersion >= 6 &&
                        this.unexpected(),
                    this.parseFunctionStatement(r, !1, !e)
                );
            case Fe._class:
                return e && this.unexpected(), this.parseClass(r, !0);
            case Fe._if:
                return this.parseIfStatement(r);
            case Fe._return:
                return this.parseReturnStatement(r);
            case Fe._switch:
                return this.parseSwitchStatement(r);
            case Fe._throw:
                return this.parseThrowStatement(r);
            case Fe._try:
                return this.parseTryStatement(r);
            case Fe._const:
            case Fe._var:
                return (
                    (s = s || this.value),
                    e && "var" !== s && this.unexpected(),
                    this.parseVarStatement(r, s)
                );
            case Fe._while:
                return this.parseWhileStatement(r);
            case Fe._with:
                return this.parseWithStatement(r);
            case Fe.braceL:
                return this.parseBlock(!0, r);
            case Fe.semi:
                return this.parseEmptyStatement(r);
            case Fe._export:
            case Fe._import:
                if (this.options.ecmaVersion > 10 && u === Fe._import) {
                    Se.lastIndex = this.pos;
                    var n = Se.exec(this.input),
                        a = this.pos + n[0].length,
                        o = this.input.charCodeAt(a);
                    if (40 === o || 46 === o)
                        return this.parseExpressionStatement(
                            r,
                            this.parseExpression()
                        );
                }
                return (
                    this.options.allowImportExportEverywhere ||
                        (t ||
                            this.raise(
                                this.start,
                                "'import' and 'export' may only appear at the top level"
                            ),
                        this.inModule ||
                            this.raise(
                                this.start,
                                "'import' and 'export' may appear only with 'sourceType: module'"
                            )),
                    u === Fe._import
                        ? this.parseImport(r)
                        : this.parseExport(r, i)
                );
            default:
                if (this.isAsyncFunction())
                    return (
                        e && this.unexpected(),
                        this.next(),
                        this.parseFunctionStatement(r, !0, !e)
                    );
                var h = this.value,
                    p = this.parseExpression();
                return u === Fe.name &&
                    "Identifier" === p.type &&
                    this.eat(Fe.colon)
                    ? this.parseLabeledStatement(r, h, p, e)
                    : this.parseExpressionStatement(r, p);
        }
    }),
    (Ke.parseBreakContinueStatement = function (e, t) {
        var i = "break" === t;
        this.next(),
            this.eat(Fe.semi) || this.insertSemicolon()
                ? (e.label = null)
                : this.type !== Fe.name
                ? this.unexpected()
                : ((e.label = this.parseIdent()), this.semicolon());
        for (var s = 0; s < this.labels.length; ++s) {
            var u = this.labels[s];
            if (null == e.label || u.name === e.label.name) {
                if (null != u.kind && (i || "loop" === u.kind)) break;
                if (e.label && i) break;
            }
        }
        return (
            s === this.labels.length && this.raise(e.start, "Unsyntactic " + t),
            this.finishNode(e, i ? "BreakStatement" : "ContinueStatement")
        );
    }),
    (Ke.parseDebuggerStatement = function (e) {
        return (
            this.next(),
            this.semicolon(),
            this.finishNode(e, "DebuggerStatement")
        );
    }),
    (Ke.parseDoStatement = function (e) {
        return (
            this.next(),
            this.labels.push(Qe),
            (e.body = this.parseStatement("do")),
            this.labels.pop(),
            this.expect(Fe._while),
            (e.test = this.parseParenExpression()),
            this.options.ecmaVersion >= 6
                ? this.eat(Fe.semi)
                : this.semicolon(),
            this.finishNode(e, "DoWhileStatement")
        );
    }),
    (Ke.parseForStatement = function (e) {
        this.next();
        var t =
            this.options.ecmaVersion >= 9 &&
            this.canAwait &&
            this.eatContextual("await")
                ? this.lastTokStart
                : -1;
        if (
            (this.labels.push(Qe),
            this.enterScope(0),
            this.expect(Fe.parenL),
            this.type === Fe.semi)
        )
            return t > -1 && this.unexpected(t), this.parseFor(e, null);
        var i = this.isLet();
        if (this.type === Fe._var || this.type === Fe._const || i) {
            var s = this.startNode(),
                u = i ? "let" : this.value;
            return (
                this.next(),
                this.parseVar(s, !0, u),
                this.finishNode(s, "VariableDeclaration"),
                (this.type === Fe._in ||
                    (this.options.ecmaVersion >= 6 &&
                        this.isContextual("of"))) &&
                1 === s.declarations.length
                    ? (this.options.ecmaVersion >= 9 &&
                          (this.type === Fe._in
                              ? t > -1 && this.unexpected(t)
                              : (e.await = t > -1)),
                      this.parseForIn(e, s))
                    : (t > -1 && this.unexpected(t), this.parseFor(e, s))
            );
        }
        var r = this.isContextual("let"),
            n = !1,
            a = new ze(),
            o = this.parseExpression(!(t > -1) || "await", a);
        return this.type === Fe._in ||
            (n = this.options.ecmaVersion >= 6 && this.isContextual("of"))
            ? (this.options.ecmaVersion >= 9 &&
                  (this.type === Fe._in
                      ? t > -1 && this.unexpected(t)
                      : (e.await = t > -1)),
              r &&
                  n &&
                  this.raise(
                      o.start,
                      "The left-hand side of a for-of loop may not start with 'let'."
                  ),
              this.toAssignable(o, !1, a),
              this.checkLValPattern(o),
              this.parseForIn(e, o))
            : (this.checkExpressionErrors(a, !0),
              t > -1 && this.unexpected(t),
              this.parseFor(e, o));
    }),
    (Ke.parseFunctionStatement = function (e, t, i) {
        return this.next(), this.parseFunction(e, Ze | (i ? 0 : $e), !1, t);
    }),
    (Ke.parseIfStatement = function (e) {
        return (
            this.next(),
            (e.test = this.parseParenExpression()),
            (e.consequent = this.parseStatement("if")),
            (e.alternate = this.eat(Fe._else)
                ? this.parseStatement("if")
                : null),
            this.finishNode(e, "IfStatement")
        );
    }),
    (Ke.parseReturnStatement = function (e) {
        return (
            this.inFunction ||
                this.options.allowReturnOutsideFunction ||
                this.raise(this.start, "'return' outside of function"),
            this.next(),
            this.eat(Fe.semi) || this.insertSemicolon()
                ? (e.argument = null)
                : ((e.argument = this.parseExpression()), this.semicolon()),
            this.finishNode(e, "ReturnStatement")
        );
    }),
    (Ke.parseSwitchStatement = function (e) {
        var t;
        this.next(),
            (e.discriminant = this.parseParenExpression()),
            (e.cases = []),
            this.expect(Fe.braceL),
            this.labels.push(Ye),
            this.enterScope(0);
        for (var i = !1; this.type !== Fe.braceR; )
            if (this.type === Fe._case || this.type === Fe._default) {
                var s = this.type === Fe._case;
                t && this.finishNode(t, "SwitchCase"),
                    e.cases.push((t = this.startNode())),
                    (t.consequent = []),
                    this.next(),
                    s
                        ? (t.test = this.parseExpression())
                        : (i &&
                              this.raiseRecoverable(
                                  this.lastTokStart,
                                  "Multiple default clauses"
                              ),
                          (i = !0),
                          (t.test = null)),
                    this.expect(Fe.colon);
            } else
                t || this.unexpected(),
                    t.consequent.push(this.parseStatement(null));
        return (
            this.exitScope(),
            t && this.finishNode(t, "SwitchCase"),
            this.next(),
            this.labels.pop(),
            this.finishNode(e, "SwitchStatement")
        );
    }),
    (Ke.parseThrowStatement = function (e) {
        return (
            this.next(),
            ge.test(this.input.slice(this.lastTokEnd, this.start)) &&
                this.raise(this.lastTokEnd, "Illegal newline after throw"),
            (e.argument = this.parseExpression()),
            this.semicolon(),
            this.finishNode(e, "ThrowStatement")
        );
    });
var Xe = [];
(Ke.parseTryStatement = function (e) {
    if (
        (this.next(),
        (e.block = this.parseBlock()),
        (e.handler = null),
        this.type === Fe._catch)
    ) {
        var t = this.startNode();
        if ((this.next(), this.eat(Fe.parenL))) {
            t.param = this.parseBindingAtom();
            var i = "Identifier" === t.param.type;
            this.enterScope(i ? 32 : 0),
                this.checkLValPattern(t.param, i ? 4 : 2),
                this.expect(Fe.parenR);
        } else
            this.options.ecmaVersion < 10 && this.unexpected(),
                (t.param = null),
                this.enterScope(0);
        (t.body = this.parseBlock(!1)),
            this.exitScope(),
            (e.handler = this.finishNode(t, "CatchClause"));
    }
    return (
        (e.finalizer = this.eat(Fe._finally) ? this.parseBlock() : null),
        e.handler ||
            e.finalizer ||
            this.raise(e.start, "Missing catch or finally clause"),
        this.finishNode(e, "TryStatement")
    );
}),
    (Ke.parseVarStatement = function (e, t) {
        return (
            this.next(),
            this.parseVar(e, !1, t),
            this.semicolon(),
            this.finishNode(e, "VariableDeclaration")
        );
    }),
    (Ke.parseWhileStatement = function (e) {
        return (
            this.next(),
            (e.test = this.parseParenExpression()),
            this.labels.push(Qe),
            (e.body = this.parseStatement("while")),
            this.labels.pop(),
            this.finishNode(e, "WhileStatement")
        );
    }),
    (Ke.parseWithStatement = function (e) {
        return (
            this.strict && this.raise(this.start, "'with' in strict mode"),
            this.next(),
            (e.object = this.parseParenExpression()),
            (e.body = this.parseStatement("with")),
            this.finishNode(e, "WithStatement")
        );
    }),
    (Ke.parseEmptyStatement = function (e) {
        return this.next(), this.finishNode(e, "EmptyStatement");
    }),
    (Ke.parseLabeledStatement = function (e, t, i, s) {
        for (var u = 0, r = this.labels; u < r.length; u += 1) {
            r[u].name === t &&
                this.raise(i.start, "Label '" + t + "' is already declared");
        }
        for (
            var n = this.type.isLoop
                    ? "loop"
                    : this.type === Fe._switch
                    ? "switch"
                    : null,
                a = this.labels.length - 1;
            a >= 0;
            a--
        ) {
            var o = this.labels[a];
            if (o.statementStart !== e.start) break;
            (o.statementStart = this.start), (o.kind = n);
        }
        return (
            this.labels.push({ name: t, kind: n, statementStart: this.start }),
            (e.body = this.parseStatement(
                s ? (-1 === s.indexOf("label") ? s + "label" : s) : "label"
            )),
            this.labels.pop(),
            (e.label = i),
            this.finishNode(e, "LabeledStatement")
        );
    }),
    (Ke.parseExpressionStatement = function (e, t) {
        return (
            (e.expression = t),
            this.semicolon(),
            this.finishNode(e, "ExpressionStatement")
        );
    }),
    (Ke.parseBlock = function (e, t, i) {
        for (
            void 0 === e && (e = !0),
                void 0 === t && (t = this.startNode()),
                t.body = [],
                this.expect(Fe.braceL),
                e && this.enterScope(0);
            this.type !== Fe.braceR;

        ) {
            var s = this.parseStatement(null);
            t.body.push(s);
        }
        return (
            i && (this.strict = !1),
            this.next(),
            e && this.exitScope(),
            this.finishNode(t, "BlockStatement")
        );
    }),
    (Ke.parseFor = function (e, t) {
        return (
            (e.init = t),
            this.expect(Fe.semi),
            (e.test = this.type === Fe.semi ? null : this.parseExpression()),
            this.expect(Fe.semi),
            (e.update =
                this.type === Fe.parenR ? null : this.parseExpression()),
            this.expect(Fe.parenR),
            (e.body = this.parseStatement("for")),
            this.exitScope(),
            this.labels.pop(),
            this.finishNode(e, "ForStatement")
        );
    }),
    (Ke.parseForIn = function (e, t) {
        var i = this.type === Fe._in;
        return (
            this.next(),
            "VariableDeclaration" === t.type &&
                null != t.declarations[0].init &&
                (!i ||
                    this.options.ecmaVersion < 8 ||
                    this.strict ||
                    "var" !== t.kind ||
                    "Identifier" !== t.declarations[0].id.type) &&
                this.raise(
                    t.start,
                    (i ? "for-in" : "for-of") +
                        " loop variable declaration may not have an initializer"
                ),
            (e.left = t),
            (e.right = i ? this.parseExpression() : this.parseMaybeAssign()),
            this.expect(Fe.parenR),
            (e.body = this.parseStatement("for")),
            this.exitScope(),
            this.labels.pop(),
            this.finishNode(e, i ? "ForInStatement" : "ForOfStatement")
        );
    }),
    (Ke.parseVar = function (e, t, i) {
        for (e.declarations = [], e.kind = i; ; ) {
            var s = this.startNode();
            if (
                (this.parseVarId(s, i),
                this.eat(Fe.eq)
                    ? (s.init = this.parseMaybeAssign(t))
                    : "const" !== i ||
                      this.type === Fe._in ||
                      (this.options.ecmaVersion >= 6 && this.isContextual("of"))
                    ? "Identifier" === s.id.type ||
                      (t && (this.type === Fe._in || this.isContextual("of")))
                        ? (s.init = null)
                        : this.raise(
                              this.lastTokEnd,
                              "Complex binding patterns require an initialization value"
                          )
                    : this.unexpected(),
                e.declarations.push(this.finishNode(s, "VariableDeclarator")),
                !this.eat(Fe.comma))
            )
                break;
        }
        return e;
    }),
    (Ke.parseVarId = function (e, t) {
        (e.id = this.parseBindingAtom()),
            this.checkLValPattern(e.id, "var" === t ? 1 : 2, !1);
    });
var Ze = 1,
    $e = 2;
function Je(e, t) {
    var i = t.key.name,
        s = e[i],
        u = "true";
    return (
        "MethodDefinition" !== t.type ||
            ("get" !== t.kind && "set" !== t.kind) ||
            (u = (t.static ? "s" : "i") + t.kind),
        ("iget" === s && "iset" === u) ||
        ("iset" === s && "iget" === u) ||
        ("sget" === s && "sset" === u) ||
        ("sset" === s && "sget" === u)
            ? ((e[i] = "true"), !1)
            : !!s || ((e[i] = u), !1)
    );
}
function et(e, t) {
    var i = e.computed,
        s = e.key;
    return (
        !i &&
        (("Identifier" === s.type && s.name === t) ||
            ("Literal" === s.type && s.value === t))
    );
}
(Ke.parseFunction = function (e, t, i, s, u) {
    this.initFunction(e),
        (this.options.ecmaVersion >= 9 ||
            (this.options.ecmaVersion >= 6 && !s)) &&
            (this.type === Fe.star && t & $e && this.unexpected(),
            (e.generator = this.eat(Fe.star))),
        this.options.ecmaVersion >= 8 && (e.async = !!s),
        t & Ze &&
            ((e.id = 4 & t && this.type !== Fe.name ? null : this.parseIdent()),
            !e.id ||
                t & $e ||
                this.checkLValSimple(
                    e.id,
                    this.strict || e.generator || e.async
                        ? this.treatFunctionsAsVar
                            ? 1
                            : 2
                        : 3
                ));
    var r = this.yieldPos,
        n = this.awaitPos,
        a = this.awaitIdentPos;
    return (
        (this.yieldPos = 0),
        (this.awaitPos = 0),
        (this.awaitIdentPos = 0),
        this.enterScope(Ue(e.async, e.generator)),
        t & Ze || (e.id = this.type === Fe.name ? this.parseIdent() : null),
        this.parseFunctionParams(e),
        this.parseFunctionBody(e, i, !1, u),
        (this.yieldPos = r),
        (this.awaitPos = n),
        (this.awaitIdentPos = a),
        this.finishNode(
            e,
            t & Ze ? "FunctionDeclaration" : "FunctionExpression"
        )
    );
}),
    (Ke.parseFunctionParams = function (e) {
        this.expect(Fe.parenL),
            (e.params = this.parseBindingList(
                Fe.parenR,
                !1,
                this.options.ecmaVersion >= 8
            )),
            this.checkYieldAwaitInDefaultParams();
    }),
    (Ke.parseClass = function (e, t) {
        this.next();
        var i = this.strict;
        (this.strict = !0), this.parseClassId(e, t), this.parseClassSuper(e);
        var s = this.enterClassBody(),
            u = this.startNode(),
            r = !1;
        for (u.body = [], this.expect(Fe.braceL); this.type !== Fe.braceR; ) {
            var n = this.parseClassElement(null !== e.superClass);
            n &&
                (u.body.push(n),
                "MethodDefinition" === n.type && "constructor" === n.kind
                    ? (r &&
                          this.raise(
                              n.start,
                              "Duplicate constructor in the same class"
                          ),
                      (r = !0))
                    : n.key &&
                      "PrivateIdentifier" === n.key.type &&
                      Je(s, n) &&
                      this.raiseRecoverable(
                          n.key.start,
                          "Identifier '#" +
                              n.key.name +
                              "' has already been declared"
                      ));
        }
        return (
            (this.strict = i),
            this.next(),
            (e.body = this.finishNode(u, "ClassBody")),
            this.exitClassBody(),
            this.finishNode(e, t ? "ClassDeclaration" : "ClassExpression")
        );
    }),
    (Ke.parseClassElement = function (e) {
        if (this.eat(Fe.semi)) return null;
        var t = this.options.ecmaVersion,
            i = this.startNode(),
            s = "",
            u = !1,
            r = !1,
            n = "method",
            a = !1;
        if (this.eatContextual("static")) {
            if (t >= 13 && this.eat(Fe.braceL))
                return this.parseClassStaticBlock(i), i;
            this.isClassElementNameStart() || this.type === Fe.star
                ? (a = !0)
                : (s = "static");
        }
        if (
            ((i.static = a),
            !s &&
                t >= 8 &&
                this.eatContextual("async") &&
                ((!this.isClassElementNameStart() && this.type !== Fe.star) ||
                this.canInsertSemicolon()
                    ? (s = "async")
                    : (r = !0)),
            !s && (t >= 9 || !r) && this.eat(Fe.star) && (u = !0),
            !s && !r && !u)
        ) {
            var o = this.value;
            (this.eatContextual("get") || this.eatContextual("set")) &&
                (this.isClassElementNameStart() ? (n = o) : (s = o));
        }
        if (
            (s
                ? ((i.computed = !1),
                  (i.key = this.startNodeAt(
                      this.lastTokStart,
                      this.lastTokStartLoc
                  )),
                  (i.key.name = s),
                  this.finishNode(i.key, "Identifier"))
                : this.parseClassElementName(i),
            t < 13 || this.type === Fe.parenL || "method" !== n || u || r)
        ) {
            var h = !i.static && et(i, "constructor"),
                p = h && e;
            h &&
                "method" !== n &&
                this.raise(
                    i.key.start,
                    "Constructor can't have get/set modifier"
                ),
                (i.kind = h ? "constructor" : n),
                this.parseClassMethod(i, u, r, p);
        } else this.parseClassField(i);
        return i;
    }),
    (Ke.isClassElementNameStart = function () {
        return (
            this.type === Fe.name ||
            this.type === Fe.privateId ||
            this.type === Fe.num ||
            this.type === Fe.string ||
            this.type === Fe.bracketL ||
            this.type.keyword
        );
    }),
    (Ke.parseClassElementName = function (e) {
        this.type === Fe.privateId
            ? ("constructor" === this.value &&
                  this.raise(
                      this.start,
                      "Classes can't have an element named '#constructor'"
                  ),
              (e.computed = !1),
              (e.key = this.parsePrivateIdent()))
            : this.parsePropertyName(e);
    }),
    (Ke.parseClassMethod = function (e, t, i, s) {
        var u = e.key;
        "constructor" === e.kind
            ? (t && this.raise(u.start, "Constructor can't be a generator"),
              i && this.raise(u.start, "Constructor can't be an async method"))
            : e.static &&
              et(e, "prototype") &&
              this.raise(
                  u.start,
                  "Classes may not have a static property named prototype"
              );
        var r = (e.value = this.parseMethod(t, i, s));
        return (
            "get" === e.kind &&
                0 !== r.params.length &&
                this.raiseRecoverable(r.start, "getter should have no params"),
            "set" === e.kind &&
                1 !== r.params.length &&
                this.raiseRecoverable(
                    r.start,
                    "setter should have exactly one param"
                ),
            "set" === e.kind &&
                "RestElement" === r.params[0].type &&
                this.raiseRecoverable(
                    r.params[0].start,
                    "Setter cannot use rest params"
                ),
            this.finishNode(e, "MethodDefinition")
        );
    }),
    (Ke.parseClassField = function (e) {
        if (
            (et(e, "constructor")
                ? this.raise(
                      e.key.start,
                      "Classes can't have a field named 'constructor'"
                  )
                : e.static &&
                  et(e, "prototype") &&
                  this.raise(
                      e.key.start,
                      "Classes can't have a static field named 'prototype'"
                  ),
            this.eat(Fe.eq))
        ) {
            var t = this.currentThisScope(),
                i = t.inClassFieldInit;
            (t.inClassFieldInit = !0),
                (e.value = this.parseMaybeAssign()),
                (t.inClassFieldInit = i);
        } else e.value = null;
        return this.semicolon(), this.finishNode(e, "PropertyDefinition");
    }),
    (Ke.parseClassStaticBlock = function (e) {
        e.body = [];
        var t = this.labels;
        for (
            this.labels = [], this.enterScope(320);
            this.type !== Fe.braceR;

        ) {
            var i = this.parseStatement(null);
            e.body.push(i);
        }
        return (
            this.next(),
            this.exitScope(),
            (this.labels = t),
            this.finishNode(e, "StaticBlock")
        );
    }),
    (Ke.parseClassId = function (e, t) {
        this.type === Fe.name
            ? ((e.id = this.parseIdent()),
              t && this.checkLValSimple(e.id, 2, !1))
            : (!0 === t && this.unexpected(), (e.id = null));
    }),
    (Ke.parseClassSuper = function (e) {
        e.superClass = this.eat(Fe._extends)
            ? this.parseExprSubscripts(!1)
            : null;
    }),
    (Ke.enterClassBody = function () {
        var e = { declared: Object.create(null), used: [] };
        return this.privateNameStack.push(e), e.declared;
    }),
    (Ke.exitClassBody = function () {
        for (
            var e = this.privateNameStack.pop(),
                t = e.declared,
                i = e.used,
                s = this.privateNameStack.length,
                u = 0 === s ? null : this.privateNameStack[s - 1],
                r = 0;
            r < i.length;
            ++r
        ) {
            var n = i[r];
            we(t, n.name) ||
                (u
                    ? u.used.push(n)
                    : this.raiseRecoverable(
                          n.start,
                          "Private field '#" +
                              n.name +
                              "' must be declared in an enclosing class"
                      ));
        }
    }),
    (Ke.parseExport = function (e, t) {
        if ((this.next(), this.eat(Fe.star)))
            return (
                this.options.ecmaVersion >= 11 &&
                    (this.eatContextual("as")
                        ? ((e.exported = this.parseModuleExportName()),
                          this.checkExport(t, e.exported, this.lastTokStart))
                        : (e.exported = null)),
                this.expectContextual("from"),
                this.type !== Fe.string && this.unexpected(),
                (e.source = this.parseExprAtom()),
                this.semicolon(),
                this.finishNode(e, "ExportAllDeclaration")
            );
        if (this.eat(Fe._default)) {
            var i;
            if (
                (this.checkExport(t, "default", this.lastTokStart),
                this.type === Fe._function || (i = this.isAsyncFunction()))
            ) {
                var s = this.startNode();
                this.next(),
                    i && this.next(),
                    (e.declaration = this.parseFunction(s, 4 | Ze, !1, i));
            } else if (this.type === Fe._class) {
                var u = this.startNode();
                e.declaration = this.parseClass(u, "nullableID");
            } else (e.declaration = this.parseMaybeAssign()), this.semicolon();
            return this.finishNode(e, "ExportDefaultDeclaration");
        }
        if (this.shouldParseExportStatement())
            (e.declaration = this.parseStatement(null)),
                "VariableDeclaration" === e.declaration.type
                    ? this.checkVariableExport(t, e.declaration.declarations)
                    : this.checkExport(
                          t,
                          e.declaration.id,
                          e.declaration.id.start
                      ),
                (e.specifiers = []),
                (e.source = null);
        else {
            if (
                ((e.declaration = null),
                (e.specifiers = this.parseExportSpecifiers(t)),
                this.eatContextual("from"))
            )
                this.type !== Fe.string && this.unexpected(),
                    (e.source = this.parseExprAtom());
            else {
                for (var r = 0, n = e.specifiers; r < n.length; r += 1) {
                    var a = n[r];
                    this.checkUnreserved(a.local),
                        this.checkLocalExport(a.local),
                        "Literal" === a.local.type &&
                            this.raise(
                                a.local.start,
                                "A string literal cannot be used as an exported binding without `from`."
                            );
                }
                e.source = null;
            }
            this.semicolon();
        }
        return this.finishNode(e, "ExportNamedDeclaration");
    }),
    (Ke.checkExport = function (e, t, i) {
        e &&
            ("string" != typeof t &&
                (t = "Identifier" === t.type ? t.name : t.value),
            we(e, t) &&
                this.raiseRecoverable(i, "Duplicate export '" + t + "'"),
            (e[t] = !0));
    }),
    (Ke.checkPatternExport = function (e, t) {
        var i = t.type;
        if ("Identifier" === i) this.checkExport(e, t, t.start);
        else if ("ObjectPattern" === i)
            for (var s = 0, u = t.properties; s < u.length; s += 1) {
                var r = u[s];
                this.checkPatternExport(e, r);
            }
        else if ("ArrayPattern" === i)
            for (var n = 0, a = t.elements; n < a.length; n += 1) {
                var o = a[n];
                o && this.checkPatternExport(e, o);
            }
        else
            "Property" === i
                ? this.checkPatternExport(e, t.value)
                : "AssignmentPattern" === i
                ? this.checkPatternExport(e, t.left)
                : "RestElement" === i
                ? this.checkPatternExport(e, t.argument)
                : "ParenthesizedExpression" === i &&
                  this.checkPatternExport(e, t.expression);
    }),
    (Ke.checkVariableExport = function (e, t) {
        if (e)
            for (var i = 0, s = t; i < s.length; i += 1) {
                var u = s[i];
                this.checkPatternExport(e, u.id);
            }
    }),
    (Ke.shouldParseExportStatement = function () {
        return (
            "var" === this.type.keyword ||
            "const" === this.type.keyword ||
            "class" === this.type.keyword ||
            "function" === this.type.keyword ||
            this.isLet() ||
            this.isAsyncFunction()
        );
    }),
    (Ke.parseExportSpecifiers = function (e) {
        var t = [],
            i = !0;
        for (this.expect(Fe.braceL); !this.eat(Fe.braceR); ) {
            if (i) i = !1;
            else if (
                (this.expect(Fe.comma), this.afterTrailingComma(Fe.braceR))
            )
                break;
            var s = this.startNode();
            (s.local = this.parseModuleExportName()),
                (s.exported = this.eatContextual("as")
                    ? this.parseModuleExportName()
                    : s.local),
                this.checkExport(e, s.exported, s.exported.start),
                t.push(this.finishNode(s, "ExportSpecifier"));
        }
        return t;
    }),
    (Ke.parseImport = function (e) {
        return (
            this.next(),
            this.type === Fe.string
                ? ((e.specifiers = Xe), (e.source = this.parseExprAtom()))
                : ((e.specifiers = this.parseImportSpecifiers()),
                  this.expectContextual("from"),
                  (e.source =
                      this.type === Fe.string
                          ? this.parseExprAtom()
                          : this.unexpected())),
            this.semicolon(),
            this.finishNode(e, "ImportDeclaration")
        );
    }),
    (Ke.parseImportSpecifiers = function () {
        var e = [],
            t = !0;
        if (this.type === Fe.name) {
            var i = this.startNode();
            if (
                ((i.local = this.parseIdent()),
                this.checkLValSimple(i.local, 2),
                e.push(this.finishNode(i, "ImportDefaultSpecifier")),
                !this.eat(Fe.comma))
            )
                return e;
        }
        if (this.type === Fe.star) {
            var s = this.startNode();
            return (
                this.next(),
                this.expectContextual("as"),
                (s.local = this.parseIdent()),
                this.checkLValSimple(s.local, 2),
                e.push(this.finishNode(s, "ImportNamespaceSpecifier")),
                e
            );
        }
        for (this.expect(Fe.braceL); !this.eat(Fe.braceR); ) {
            if (t) t = !1;
            else if (
                (this.expect(Fe.comma), this.afterTrailingComma(Fe.braceR))
            )
                break;
            var u = this.startNode();
            (u.imported = this.parseModuleExportName()),
                this.eatContextual("as")
                    ? (u.local = this.parseIdent())
                    : (this.checkUnreserved(u.imported),
                      (u.local = u.imported)),
                this.checkLValSimple(u.local, 2),
                e.push(this.finishNode(u, "ImportSpecifier"));
        }
        return e;
    }),
    (Ke.parseModuleExportName = function () {
        if (this.options.ecmaVersion >= 13 && this.type === Fe.string) {
            var e = this.parseLiteral(this.value);
            return (
                Ne.test(e.value) &&
                    this.raise(
                        e.start,
                        "An export name cannot include a lone surrogate."
                    ),
                e
            );
        }
        return this.parseIdent(!0);
    }),
    (Ke.adaptDirectivePrologue = function (e) {
        for (var t = 0; t < e.length && this.isDirectiveCandidate(e[t]); ++t)
            e[t].directive = e[t].expression.raw.slice(1, -1);
    }),
    (Ke.isDirectiveCandidate = function (e) {
        return (
            "ExpressionStatement" === e.type &&
            "Literal" === e.expression.type &&
            "string" == typeof e.expression.value &&
            ('"' === this.input[e.start] || "'" === this.input[e.start])
        );
    });
var tt = We.prototype;
(tt.toAssignable = function (e, t, i) {
    if (this.options.ecmaVersion >= 6 && e)
        switch (e.type) {
            case "Identifier":
                this.inAsync &&
                    "await" === e.name &&
                    this.raise(
                        e.start,
                        "Cannot use 'await' as identifier inside an async function"
                    );
                break;
            case "ObjectPattern":
            case "ArrayPattern":
            case "AssignmentPattern":
            case "RestElement":
                break;
            case "ObjectExpression":
                (e.type = "ObjectPattern"), i && this.checkPatternErrors(i, !0);
                for (var s = 0, u = e.properties; s < u.length; s += 1) {
                    var r = u[s];
                    this.toAssignable(r, t),
                        "RestElement" !== r.type ||
                            ("ArrayPattern" !== r.argument.type &&
                                "ObjectPattern" !== r.argument.type) ||
                            this.raise(r.argument.start, "Unexpected token");
                }
                break;
            case "Property":
                "init" !== e.kind &&
                    this.raise(
                        e.key.start,
                        "Object pattern can't contain getter or setter"
                    ),
                    this.toAssignable(e.value, t);
                break;
            case "ArrayExpression":
                (e.type = "ArrayPattern"),
                    i && this.checkPatternErrors(i, !0),
                    this.toAssignableList(e.elements, t);
                break;
            case "SpreadElement":
                (e.type = "RestElement"),
                    this.toAssignable(e.argument, t),
                    "AssignmentPattern" === e.argument.type &&
                        this.raise(
                            e.argument.start,
                            "Rest elements cannot have a default value"
                        );
                break;
            case "AssignmentExpression":
                "=" !== e.operator &&
                    this.raise(
                        e.left.end,
                        "Only '=' operator can be used for specifying default value."
                    ),
                    (e.type = "AssignmentPattern"),
                    delete e.operator,
                    this.toAssignable(e.left, t);
                break;
            case "ParenthesizedExpression":
                this.toAssignable(e.expression, t, i);
                break;
            case "ChainExpression":
                this.raiseRecoverable(
                    e.start,
                    "Optional chaining cannot appear in left-hand side"
                );
                break;
            case "MemberExpression":
                if (!t) break;
            default:
                this.raise(e.start, "Assigning to rvalue");
        }
    else i && this.checkPatternErrors(i, !0);
    return e;
}),
    (tt.toAssignableList = function (e, t) {
        for (var i = e.length, s = 0; s < i; s++) {
            var u = e[s];
            u && this.toAssignable(u, t);
        }
        if (i) {
            var r = e[i - 1];
            6 === this.options.ecmaVersion &&
                t &&
                r &&
                "RestElement" === r.type &&
                "Identifier" !== r.argument.type &&
                this.unexpected(r.argument.start);
        }
        return e;
    }),
    (tt.parseSpread = function (e) {
        var t = this.startNode();
        return (
            this.next(),
            (t.argument = this.parseMaybeAssign(!1, e)),
            this.finishNode(t, "SpreadElement")
        );
    }),
    (tt.parseRestBinding = function () {
        var e = this.startNode();
        return (
            this.next(),
            6 === this.options.ecmaVersion &&
                this.type !== Fe.name &&
                this.unexpected(),
            (e.argument = this.parseBindingAtom()),
            this.finishNode(e, "RestElement")
        );
    }),
    (tt.parseBindingAtom = function () {
        if (this.options.ecmaVersion >= 6)
            switch (this.type) {
                case Fe.bracketL:
                    var e = this.startNode();
                    return (
                        this.next(),
                        (e.elements = this.parseBindingList(
                            Fe.bracketR,
                            !0,
                            !0
                        )),
                        this.finishNode(e, "ArrayPattern")
                    );
                case Fe.braceL:
                    return this.parseObj(!0);
            }
        return this.parseIdent();
    }),
    (tt.parseBindingList = function (e, t, i) {
        for (var s = [], u = !0; !this.eat(e); )
            if (
                (u ? (u = !1) : this.expect(Fe.comma),
                t && this.type === Fe.comma)
            )
                s.push(null);
            else {
                if (i && this.afterTrailingComma(e)) break;
                if (this.type === Fe.ellipsis) {
                    var r = this.parseRestBinding();
                    this.parseBindingListItem(r),
                        s.push(r),
                        this.type === Fe.comma &&
                            this.raise(
                                this.start,
                                "Comma is not permitted after the rest element"
                            ),
                        this.expect(e);
                    break;
                }
                var n = this.parseMaybeDefault(this.start, this.startLoc);
                this.parseBindingListItem(n), s.push(n);
            }
        return s;
    }),
    (tt.parseBindingListItem = function (e) {
        return e;
    }),
    (tt.parseMaybeDefault = function (e, t, i) {
        if (
            ((i = i || this.parseBindingAtom()),
            this.options.ecmaVersion < 6 || !this.eat(Fe.eq))
        )
            return i;
        var s = this.startNodeAt(e, t);
        return (
            (s.left = i),
            (s.right = this.parseMaybeAssign()),
            this.finishNode(s, "AssignmentPattern")
        );
    }),
    (tt.checkLValSimple = function (e, t, i) {
        void 0 === t && (t = 0);
        var s = 0 !== t;
        switch (e.type) {
            case "Identifier":
                this.strict &&
                    this.reservedWordsStrictBind.test(e.name) &&
                    this.raiseRecoverable(
                        e.start,
                        (s ? "Binding " : "Assigning to ") +
                            e.name +
                            " in strict mode"
                    ),
                    s &&
                        (2 === t &&
                            "let" === e.name &&
                            this.raiseRecoverable(
                                e.start,
                                "let is disallowed as a lexically bound name"
                            ),
                        i &&
                            (we(i, e.name) &&
                                this.raiseRecoverable(
                                    e.start,
                                    "Argument name clash"
                                ),
                            (i[e.name] = !0)),
                        5 !== t && this.declareName(e.name, t, e.start));
                break;
            case "ChainExpression":
                this.raiseRecoverable(
                    e.start,
                    "Optional chaining cannot appear in left-hand side"
                );
                break;
            case "MemberExpression":
                s &&
                    this.raiseRecoverable(e.start, "Binding member expression");
                break;
            case "ParenthesizedExpression":
                return (
                    s &&
                        this.raiseRecoverable(
                            e.start,
                            "Binding parenthesized expression"
                        ),
                    this.checkLValSimple(e.expression, t, i)
                );
            default:
                this.raise(
                    e.start,
                    (s ? "Binding" : "Assigning to") + " rvalue"
                );
        }
    }),
    (tt.checkLValPattern = function (e, t, i) {
        switch ((void 0 === t && (t = 0), e.type)) {
            case "ObjectPattern":
                for (var s = 0, u = e.properties; s < u.length; s += 1) {
                    var r = u[s];
                    this.checkLValInnerPattern(r, t, i);
                }
                break;
            case "ArrayPattern":
                for (var n = 0, a = e.elements; n < a.length; n += 1) {
                    var o = a[n];
                    o && this.checkLValInnerPattern(o, t, i);
                }
                break;
            default:
                this.checkLValSimple(e, t, i);
        }
    }),
    (tt.checkLValInnerPattern = function (e, t, i) {
        switch ((void 0 === t && (t = 0), e.type)) {
            case "Property":
                this.checkLValInnerPattern(e.value, t, i);
                break;
            case "AssignmentPattern":
                this.checkLValPattern(e.left, t, i);
                break;
            case "RestElement":
                this.checkLValPattern(e.argument, t, i);
                break;
            default:
                this.checkLValPattern(e, t, i);
        }
    });
var it = function (e, t, i, s, u) {
        (this.token = e),
            (this.isExpr = !!t),
            (this.preserveSpace = !!i),
            (this.override = s),
            (this.generator = !!u);
    },
    st = {
        b_stat: new it("{", !1),
        b_expr: new it("{", !0),
        b_tmpl: new it("${", !1),
        p_stat: new it("(", !1),
        p_expr: new it("(", !0),
        q_tmpl: new it("`", !0, !0, function (e) {
            return e.tryReadTemplateToken();
        }),
        f_stat: new it("function", !1),
        f_expr: new it("function", !0),
        f_expr_gen: new it("function", !0, !1, null, !0),
        f_gen: new it("function", !1, !1, null, !0),
    },
    ut = We.prototype;
(ut.initialContext = function () {
    return [st.b_stat];
}),
    (ut.curContext = function () {
        return this.context[this.context.length - 1];
    }),
    (ut.braceIsBlock = function (e) {
        var t = this.curContext();
        return (
            t === st.f_expr ||
            t === st.f_stat ||
            (e !== Fe.colon || (t !== st.b_stat && t !== st.b_expr)
                ? e === Fe._return || (e === Fe.name && this.exprAllowed)
                    ? ge.test(this.input.slice(this.lastTokEnd, this.start))
                    : e === Fe._else ||
                      e === Fe.semi ||
                      e === Fe.eof ||
                      e === Fe.parenR ||
                      e === Fe.arrow ||
                      (e === Fe.braceL
                          ? t === st.b_stat
                          : e !== Fe._var &&
                            e !== Fe._const &&
                            e !== Fe.name &&
                            !this.exprAllowed)
                : !t.isExpr)
        );
    }),
    (ut.inGeneratorContext = function () {
        for (var e = this.context.length - 1; e >= 1; e--) {
            var t = this.context[e];
            if ("function" === t.token) return t.generator;
        }
        return !1;
    }),
    (ut.updateContext = function (e) {
        var t,
            i = this.type;
        i.keyword && e === Fe.dot
            ? (this.exprAllowed = !1)
            : (t = i.updateContext)
            ? t.call(this, e)
            : (this.exprAllowed = i.beforeExpr);
    }),
    (ut.overrideContext = function (e) {
        this.curContext() !== e && (this.context[this.context.length - 1] = e);
    }),
    (Fe.parenR.updateContext = Fe.braceR.updateContext =
        function () {
            if (1 !== this.context.length) {
                var e = this.context.pop();
                e === st.b_stat &&
                    "function" === this.curContext().token &&
                    (e = this.context.pop()),
                    (this.exprAllowed = !e.isExpr);
            } else this.exprAllowed = !0;
        }),
    (Fe.braceL.updateContext = function (e) {
        this.context.push(this.braceIsBlock(e) ? st.b_stat : st.b_expr),
            (this.exprAllowed = !0);
    }),
    (Fe.dollarBraceL.updateContext = function () {
        this.context.push(st.b_tmpl), (this.exprAllowed = !0);
    }),
    (Fe.parenL.updateContext = function (e) {
        var t =
            e === Fe._if || e === Fe._for || e === Fe._with || e === Fe._while;
        this.context.push(t ? st.p_stat : st.p_expr), (this.exprAllowed = !0);
    }),
    (Fe.incDec.updateContext = function () {}),
    (Fe._function.updateContext = Fe._class.updateContext =
        function (e) {
            !e.beforeExpr ||
            e === Fe._else ||
            (e === Fe.semi && this.curContext() !== st.p_stat) ||
            (e === Fe._return &&
                ge.test(this.input.slice(this.lastTokEnd, this.start))) ||
            ((e === Fe.colon || e === Fe.braceL) &&
                this.curContext() === st.b_stat)
                ? this.context.push(st.f_stat)
                : this.context.push(st.f_expr),
                (this.exprAllowed = !1);
        }),
    (Fe.backQuote.updateContext = function () {
        this.curContext() === st.q_tmpl
            ? this.context.pop()
            : this.context.push(st.q_tmpl),
            (this.exprAllowed = !1);
    }),
    (Fe.star.updateContext = function (e) {
        if (e === Fe._function) {
            var t = this.context.length - 1;
            this.context[t] === st.f_expr
                ? (this.context[t] = st.f_expr_gen)
                : (this.context[t] = st.f_gen);
        }
        this.exprAllowed = !0;
    }),
    (Fe.name.updateContext = function (e) {
        var t = !1;
        this.options.ecmaVersion >= 6 &&
            e !== Fe.dot &&
            (("of" === this.value && !this.exprAllowed) ||
                ("yield" === this.value && this.inGeneratorContext())) &&
            (t = !0),
            (this.exprAllowed = t);
    });
var rt = We.prototype;
function nt(e) {
    return (
        ("MemberExpression" === e.type &&
            "PrivateIdentifier" === e.property.type) ||
        ("ChainExpression" === e.type && nt(e.expression))
    );
}
(rt.checkPropClash = function (e, t, i) {
    if (
        !(
            (this.options.ecmaVersion >= 9 && "SpreadElement" === e.type) ||
            (this.options.ecmaVersion >= 6 &&
                (e.computed || e.method || e.shorthand))
        )
    ) {
        var s,
            u = e.key;
        switch (u.type) {
            case "Identifier":
                s = u.name;
                break;
            case "Literal":
                s = String(u.value);
                break;
            default:
                return;
        }
        var r = e.kind;
        if (this.options.ecmaVersion >= 6)
            "__proto__" === s &&
                "init" === r &&
                (t.proto &&
                    (i
                        ? i.doubleProto < 0 && (i.doubleProto = u.start)
                        : this.raiseRecoverable(
                              u.start,
                              "Redefinition of __proto__ property"
                          )),
                (t.proto = !0));
        else {
            var n = t[(s = "$" + s)];
            if (n)
                ("init" === r
                    ? (this.strict && n.init) || n.get || n.set
                    : n.init || n[r]) &&
                    this.raiseRecoverable(u.start, "Redefinition of property");
            else n = t[s] = { init: !1, get: !1, set: !1 };
            n[r] = !0;
        }
    }
}),
    (rt.parseExpression = function (e, t) {
        var i = this.start,
            s = this.startLoc,
            u = this.parseMaybeAssign(e, t);
        if (this.type === Fe.comma) {
            var r = this.startNodeAt(i, s);
            for (r.expressions = [u]; this.eat(Fe.comma); )
                r.expressions.push(this.parseMaybeAssign(e, t));
            return this.finishNode(r, "SequenceExpression");
        }
        return u;
    }),
    (rt.parseMaybeAssign = function (e, t, i) {
        if (this.isContextual("yield")) {
            if (this.inGenerator) return this.parseYield(e);
            this.exprAllowed = !1;
        }
        var s = !1,
            u = -1,
            r = -1,
            n = -1;
        t
            ? ((u = t.parenthesizedAssign),
              (r = t.trailingComma),
              (n = t.doubleProto),
              (t.parenthesizedAssign = t.trailingComma = -1))
            : ((t = new ze()), (s = !0));
        var a = this.start,
            o = this.startLoc;
        (this.type !== Fe.parenL && this.type !== Fe.name) ||
            ((this.potentialArrowAt = this.start),
            (this.potentialArrowInForAwait = "await" === e));
        var h = this.parseMaybeConditional(e, t);
        if ((i && (h = i.call(this, h, a, o)), this.type.isAssign)) {
            var p = this.startNodeAt(a, o);
            return (
                (p.operator = this.value),
                this.type === Fe.eq && (h = this.toAssignable(h, !1, t)),
                s ||
                    (t.parenthesizedAssign =
                        t.trailingComma =
                        t.doubleProto =
                            -1),
                t.shorthandAssign >= h.start && (t.shorthandAssign = -1),
                this.type === Fe.eq
                    ? this.checkLValPattern(h)
                    : this.checkLValSimple(h),
                (p.left = h),
                this.next(),
                (p.right = this.parseMaybeAssign(e)),
                n > -1 && (t.doubleProto = n),
                this.finishNode(p, "AssignmentExpression")
            );
        }
        return (
            s && this.checkExpressionErrors(t, !0),
            u > -1 && (t.parenthesizedAssign = u),
            r > -1 && (t.trailingComma = r),
            h
        );
    }),
    (rt.parseMaybeConditional = function (e, t) {
        var i = this.start,
            s = this.startLoc,
            u = this.parseExprOps(e, t);
        if (this.checkExpressionErrors(t)) return u;
        if (this.eat(Fe.question)) {
            var r = this.startNodeAt(i, s);
            return (
                (r.test = u),
                (r.consequent = this.parseMaybeAssign()),
                this.expect(Fe.colon),
                (r.alternate = this.parseMaybeAssign(e)),
                this.finishNode(r, "ConditionalExpression")
            );
        }
        return u;
    }),
    (rt.parseExprOps = function (e, t) {
        var i = this.start,
            s = this.startLoc,
            u = this.parseMaybeUnary(t, !1, !1, e);
        return this.checkExpressionErrors(t) ||
            (u.start === i && "ArrowFunctionExpression" === u.type)
            ? u
            : this.parseExprOp(u, i, s, -1, e);
    }),
    (rt.parseExprOp = function (e, t, i, s, u) {
        var r = this.type.binop;
        if (null != r && (!u || this.type !== Fe._in) && r > s) {
            var n = this.type === Fe.logicalOR || this.type === Fe.logicalAND,
                a = this.type === Fe.coalesce;
            a && (r = Fe.logicalAND.binop);
            var o = this.value;
            this.next();
            var h = this.start,
                p = this.startLoc,
                c = this.parseExprOp(
                    this.parseMaybeUnary(null, !1, !1, u),
                    h,
                    p,
                    r,
                    u
                ),
                l = this.buildBinary(t, i, e, c, o, n || a);
            return (
                ((n && this.type === Fe.coalesce) ||
                    (a &&
                        (this.type === Fe.logicalOR ||
                            this.type === Fe.logicalAND))) &&
                    this.raiseRecoverable(
                        this.start,
                        "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses"
                    ),
                this.parseExprOp(l, t, i, s, u)
            );
        }
        return e;
    }),
    (rt.buildBinary = function (e, t, i, s, u, r) {
        "PrivateIdentifier" === s.type &&
            this.raise(
                s.start,
                "Private identifier can only be left side of binary expression"
            );
        var n = this.startNodeAt(e, t);
        return (
            (n.left = i),
            (n.operator = u),
            (n.right = s),
            this.finishNode(n, r ? "LogicalExpression" : "BinaryExpression")
        );
    }),
    (rt.parseMaybeUnary = function (e, t, i, s) {
        var u,
            r = this.start,
            n = this.startLoc;
        if (this.isContextual("await") && this.canAwait)
            (u = this.parseAwait(s)), (t = !0);
        else if (this.type.prefix) {
            var a = this.startNode(),
                o = this.type === Fe.incDec;
            (a.operator = this.value),
                (a.prefix = !0),
                this.next(),
                (a.argument = this.parseMaybeUnary(null, !0, o, s)),
                this.checkExpressionErrors(e, !0),
                o
                    ? this.checkLValSimple(a.argument)
                    : this.strict &&
                      "delete" === a.operator &&
                      "Identifier" === a.argument.type
                    ? this.raiseRecoverable(
                          a.start,
                          "Deleting local variable in strict mode"
                      )
                    : "delete" === a.operator && nt(a.argument)
                    ? this.raiseRecoverable(
                          a.start,
                          "Private fields can not be deleted"
                      )
                    : (t = !0),
                (u = this.finishNode(
                    a,
                    o ? "UpdateExpression" : "UnaryExpression"
                ));
        } else if (t || this.type !== Fe.privateId) {
            if (
                ((u = this.parseExprSubscripts(e, s)),
                this.checkExpressionErrors(e))
            )
                return u;
            for (; this.type.postfix && !this.canInsertSemicolon(); ) {
                var h = this.startNodeAt(r, n);
                (h.operator = this.value),
                    (h.prefix = !1),
                    (h.argument = u),
                    this.checkLValSimple(u),
                    this.next(),
                    (u = this.finishNode(h, "UpdateExpression"));
            }
        } else
            (s || 0 === this.privateNameStack.length) && this.unexpected(),
                (u = this.parsePrivateIdent()),
                this.type !== Fe._in && this.unexpected();
        return i || !this.eat(Fe.starstar)
            ? u
            : t
            ? void this.unexpected(this.lastTokStart)
            : this.buildBinary(
                  r,
                  n,
                  u,
                  this.parseMaybeUnary(null, !1, !1, s),
                  "**",
                  !1
              );
    }),
    (rt.parseExprSubscripts = function (e, t) {
        var i = this.start,
            s = this.startLoc,
            u = this.parseExprAtom(e, t);
        if (
            "ArrowFunctionExpression" === u.type &&
            ")" !== this.input.slice(this.lastTokStart, this.lastTokEnd)
        )
            return u;
        var r = this.parseSubscripts(u, i, s, !1, t);
        return (
            e &&
                "MemberExpression" === r.type &&
                (e.parenthesizedAssign >= r.start &&
                    (e.parenthesizedAssign = -1),
                e.parenthesizedBind >= r.start && (e.parenthesizedBind = -1),
                e.trailingComma >= r.start && (e.trailingComma = -1)),
            r
        );
    }),
    (rt.parseSubscripts = function (e, t, i, s, u) {
        for (
            var r =
                    this.options.ecmaVersion >= 8 &&
                    "Identifier" === e.type &&
                    "async" === e.name &&
                    this.lastTokEnd === e.end &&
                    !this.canInsertSemicolon() &&
                    e.end - e.start == 5 &&
                    this.potentialArrowAt === e.start,
                n = !1;
            ;

        ) {
            var a = this.parseSubscript(e, t, i, s, r, n, u);
            if (
                (a.optional && (n = !0),
                a === e || "ArrowFunctionExpression" === a.type)
            ) {
                if (n) {
                    var o = this.startNodeAt(t, i);
                    (o.expression = a),
                        (a = this.finishNode(o, "ChainExpression"));
                }
                return a;
            }
            e = a;
        }
    }),
    (rt.parseSubscript = function (e, t, i, s, u, r, n) {
        var a = this.options.ecmaVersion >= 11,
            o = a && this.eat(Fe.questionDot);
        s &&
            o &&
            this.raise(
                this.lastTokStart,
                "Optional chaining cannot appear in the callee of new expressions"
            );
        var h = this.eat(Fe.bracketL);
        if (
            h ||
            (o && this.type !== Fe.parenL && this.type !== Fe.backQuote) ||
            this.eat(Fe.dot)
        ) {
            var p = this.startNodeAt(t, i);
            (p.object = e),
                h
                    ? ((p.property = this.parseExpression()),
                      this.expect(Fe.bracketR))
                    : this.type === Fe.privateId && "Super" !== e.type
                    ? (p.property = this.parsePrivateIdent())
                    : (p.property = this.parseIdent(
                          "never" !== this.options.allowReserved
                      )),
                (p.computed = !!h),
                a && (p.optional = o),
                (e = this.finishNode(p, "MemberExpression"));
        } else if (!s && this.eat(Fe.parenL)) {
            var c = new ze(),
                l = this.yieldPos,
                D = this.awaitPos,
                d = this.awaitIdentPos;
            (this.yieldPos = 0), (this.awaitPos = 0), (this.awaitIdentPos = 0);
            var f = this.parseExprList(
                Fe.parenR,
                this.options.ecmaVersion >= 8,
                !1,
                c
            );
            if (u && !o && !this.canInsertSemicolon() && this.eat(Fe.arrow))
                return (
                    this.checkPatternErrors(c, !1),
                    this.checkYieldAwaitInDefaultParams(),
                    this.awaitIdentPos > 0 &&
                        this.raise(
                            this.awaitIdentPos,
                            "Cannot use 'await' as identifier inside an async function"
                        ),
                    (this.yieldPos = l),
                    (this.awaitPos = D),
                    (this.awaitIdentPos = d),
                    this.parseArrowExpression(this.startNodeAt(t, i), f, !0, n)
                );
            this.checkExpressionErrors(c, !0),
                (this.yieldPos = l || this.yieldPos),
                (this.awaitPos = D || this.awaitPos),
                (this.awaitIdentPos = d || this.awaitIdentPos);
            var A = this.startNodeAt(t, i);
            (A.callee = e),
                (A.arguments = f),
                a && (A.optional = o),
                (e = this.finishNode(A, "CallExpression"));
        } else if (this.type === Fe.backQuote) {
            (o || r) &&
                this.raise(
                    this.start,
                    "Optional chaining cannot appear in the tag of tagged template expressions"
                );
            var C = this.startNodeAt(t, i);
            (C.tag = e),
                (C.quasi = this.parseTemplate({ isTagged: !0 })),
                (e = this.finishNode(C, "TaggedTemplateExpression"));
        }
        return e;
    }),
    (rt.parseExprAtom = function (e, t) {
        this.type === Fe.slash && this.readRegexp();
        var i,
            s = this.potentialArrowAt === this.start;
        switch (this.type) {
            case Fe._super:
                return (
                    this.allowSuper ||
                        this.raise(
                            this.start,
                            "'super' keyword outside a method"
                        ),
                    (i = this.startNode()),
                    this.next(),
                    this.type !== Fe.parenL ||
                        this.allowDirectSuper ||
                        this.raise(
                            i.start,
                            "super() call outside constructor of a subclass"
                        ),
                    this.type !== Fe.dot &&
                        this.type !== Fe.bracketL &&
                        this.type !== Fe.parenL &&
                        this.unexpected(),
                    this.finishNode(i, "Super")
                );
            case Fe._this:
                return (
                    (i = this.startNode()),
                    this.next(),
                    this.finishNode(i, "ThisExpression")
                );
            case Fe.name:
                var u = this.start,
                    r = this.startLoc,
                    n = this.containsEsc,
                    a = this.parseIdent(!1);
                if (
                    this.options.ecmaVersion >= 8 &&
                    !n &&
                    "async" === a.name &&
                    !this.canInsertSemicolon() &&
                    this.eat(Fe._function)
                )
                    return (
                        this.overrideContext(st.f_expr),
                        this.parseFunction(this.startNodeAt(u, r), 0, !1, !0, t)
                    );
                if (s && !this.canInsertSemicolon()) {
                    if (this.eat(Fe.arrow))
                        return this.parseArrowExpression(
                            this.startNodeAt(u, r),
                            [a],
                            !1,
                            t
                        );
                    if (
                        this.options.ecmaVersion >= 8 &&
                        "async" === a.name &&
                        this.type === Fe.name &&
                        !n &&
                        (!this.potentialArrowInForAwait ||
                            "of" !== this.value ||
                            this.containsEsc)
                    )
                        return (
                            (a = this.parseIdent(!1)),
                            (!this.canInsertSemicolon() &&
                                this.eat(Fe.arrow)) ||
                                this.unexpected(),
                            this.parseArrowExpression(
                                this.startNodeAt(u, r),
                                [a],
                                !0,
                                t
                            )
                        );
                }
                return a;
            case Fe.regexp:
                var o = this.value;
                return (
                    ((i = this.parseLiteral(o.value)).regex = {
                        pattern: o.pattern,
                        flags: o.flags,
                    }),
                    i
                );
            case Fe.num:
            case Fe.string:
                return this.parseLiteral(this.value);
            case Fe._null:
            case Fe._true:
            case Fe._false:
                return (
                    ((i = this.startNode()).value =
                        this.type === Fe._null ? null : this.type === Fe._true),
                    (i.raw = this.type.keyword),
                    this.next(),
                    this.finishNode(i, "Literal")
                );
            case Fe.parenL:
                var h = this.start,
                    p = this.parseParenAndDistinguishExpression(s, t);
                return (
                    e &&
                        (e.parenthesizedAssign < 0 &&
                            !this.isSimpleAssignTarget(p) &&
                            (e.parenthesizedAssign = h),
                        e.parenthesizedBind < 0 && (e.parenthesizedBind = h)),
                    p
                );
            case Fe.bracketL:
                return (
                    (i = this.startNode()),
                    this.next(),
                    (i.elements = this.parseExprList(Fe.bracketR, !0, !0, e)),
                    this.finishNode(i, "ArrayExpression")
                );
            case Fe.braceL:
                return this.overrideContext(st.b_expr), this.parseObj(!1, e);
            case Fe._function:
                return (
                    (i = this.startNode()),
                    this.next(),
                    this.parseFunction(i, 0)
                );
            case Fe._class:
                return this.parseClass(this.startNode(), !1);
            case Fe._new:
                return this.parseNew();
            case Fe.backQuote:
                return this.parseTemplate();
            case Fe._import:
                return this.options.ecmaVersion >= 11
                    ? this.parseExprImport()
                    : this.unexpected();
            default:
                this.unexpected();
        }
    }),
    (rt.parseExprImport = function () {
        var e = this.startNode();
        this.containsEsc &&
            this.raiseRecoverable(
                this.start,
                "Escape sequence in keyword import"
            );
        var t = this.parseIdent(!0);
        switch (this.type) {
            case Fe.parenL:
                return this.parseDynamicImport(e);
            case Fe.dot:
                return (e.meta = t), this.parseImportMeta(e);
            default:
                this.unexpected();
        }
    }),
    (rt.parseDynamicImport = function (e) {
        if (
            (this.next(),
            (e.source = this.parseMaybeAssign()),
            !this.eat(Fe.parenR))
        ) {
            var t = this.start;
            this.eat(Fe.comma) && this.eat(Fe.parenR)
                ? this.raiseRecoverable(
                      t,
                      "Trailing comma is not allowed in import()"
                  )
                : this.unexpected(t);
        }
        return this.finishNode(e, "ImportExpression");
    }),
    (rt.parseImportMeta = function (e) {
        this.next();
        var t = this.containsEsc;
        return (
            (e.property = this.parseIdent(!0)),
            "meta" !== e.property.name &&
                this.raiseRecoverable(
                    e.property.start,
                    "The only valid meta property for import is 'import.meta'"
                ),
            t &&
                this.raiseRecoverable(
                    e.start,
                    "'import.meta' must not contain escaped characters"
                ),
            "module" === this.options.sourceType ||
                this.options.allowImportExportEverywhere ||
                this.raiseRecoverable(
                    e.start,
                    "Cannot use 'import.meta' outside a module"
                ),
            this.finishNode(e, "MetaProperty")
        );
    }),
    (rt.parseLiteral = function (e) {
        var t = this.startNode();
        return (
            (t.value = e),
            (t.raw = this.input.slice(this.start, this.end)),
            110 === t.raw.charCodeAt(t.raw.length - 1) &&
                (t.bigint = t.raw.slice(0, -1).replace(/_/g, "")),
            this.next(),
            this.finishNode(t, "Literal")
        );
    }),
    (rt.parseParenExpression = function () {
        this.expect(Fe.parenL);
        var e = this.parseExpression();
        return this.expect(Fe.parenR), e;
    }),
    (rt.parseParenAndDistinguishExpression = function (e, t) {
        var i,
            s = this.start,
            u = this.startLoc,
            r = this.options.ecmaVersion >= 8;
        if (this.options.ecmaVersion >= 6) {
            this.next();
            var n,
                a = this.start,
                o = this.startLoc,
                h = [],
                p = !0,
                c = !1,
                l = new ze(),
                D = this.yieldPos,
                d = this.awaitPos;
            for (
                this.yieldPos = 0, this.awaitPos = 0;
                this.type !== Fe.parenR;

            ) {
                if (
                    (p ? (p = !1) : this.expect(Fe.comma),
                    r && this.afterTrailingComma(Fe.parenR, !0))
                ) {
                    c = !0;
                    break;
                }
                if (this.type === Fe.ellipsis) {
                    (n = this.start),
                        h.push(this.parseParenItem(this.parseRestBinding())),
                        this.type === Fe.comma &&
                            this.raise(
                                this.start,
                                "Comma is not permitted after the rest element"
                            );
                    break;
                }
                h.push(this.parseMaybeAssign(!1, l, this.parseParenItem));
            }
            var f = this.lastTokEnd,
                A = this.lastTokEndLoc;
            if (
                (this.expect(Fe.parenR),
                e && !this.canInsertSemicolon() && this.eat(Fe.arrow))
            )
                return (
                    this.checkPatternErrors(l, !1),
                    this.checkYieldAwaitInDefaultParams(),
                    (this.yieldPos = D),
                    (this.awaitPos = d),
                    this.parseParenArrowList(s, u, h, t)
                );
            (h.length && !c) || this.unexpected(this.lastTokStart),
                n && this.unexpected(n),
                this.checkExpressionErrors(l, !0),
                (this.yieldPos = D || this.yieldPos),
                (this.awaitPos = d || this.awaitPos),
                h.length > 1
                    ? (((i = this.startNodeAt(a, o)).expressions = h),
                      this.finishNodeAt(i, "SequenceExpression", f, A))
                    : (i = h[0]);
        } else i = this.parseParenExpression();
        if (this.options.preserveParens) {
            var C = this.startNodeAt(s, u);
            return (
                (C.expression = i),
                this.finishNode(C, "ParenthesizedExpression")
            );
        }
        return i;
    }),
    (rt.parseParenItem = function (e) {
        return e;
    }),
    (rt.parseParenArrowList = function (e, t, i, s) {
        return this.parseArrowExpression(this.startNodeAt(e, t), i, !1, s);
    });
var at = [];
(rt.parseNew = function () {
    this.containsEsc &&
        this.raiseRecoverable(this.start, "Escape sequence in keyword new");
    var e = this.startNode(),
        t = this.parseIdent(!0);
    if (this.options.ecmaVersion >= 6 && this.eat(Fe.dot)) {
        e.meta = t;
        var i = this.containsEsc;
        return (
            (e.property = this.parseIdent(!0)),
            "target" !== e.property.name &&
                this.raiseRecoverable(
                    e.property.start,
                    "The only valid meta property for new is 'new.target'"
                ),
            i &&
                this.raiseRecoverable(
                    e.start,
                    "'new.target' must not contain escaped characters"
                ),
            this.allowNewDotTarget ||
                this.raiseRecoverable(
                    e.start,
                    "'new.target' can only be used in functions and class static block"
                ),
            this.finishNode(e, "MetaProperty")
        );
    }
    var s = this.start,
        u = this.startLoc,
        r = this.type === Fe._import;
    return (
        (e.callee = this.parseSubscripts(this.parseExprAtom(), s, u, !0, !1)),
        r &&
            "ImportExpression" === e.callee.type &&
            this.raise(s, "Cannot use new with import()"),
        this.eat(Fe.parenL)
            ? (e.arguments = this.parseExprList(
                  Fe.parenR,
                  this.options.ecmaVersion >= 8,
                  !1
              ))
            : (e.arguments = at),
        this.finishNode(e, "NewExpression")
    );
}),
    (rt.parseTemplateElement = function (e) {
        var t = e.isTagged,
            i = this.startNode();
        return (
            this.type === Fe.invalidTemplate
                ? (t ||
                      this.raiseRecoverable(
                          this.start,
                          "Bad escape sequence in untagged template literal"
                      ),
                  (i.value = { raw: this.value, cooked: null }))
                : (i.value = {
                      raw: this.input
                          .slice(this.start, this.end)
                          .replace(/\r\n?/g, "\n"),
                      cooked: this.value,
                  }),
            this.next(),
            (i.tail = this.type === Fe.backQuote),
            this.finishNode(i, "TemplateElement")
        );
    }),
    (rt.parseTemplate = function (e) {
        void 0 === e && (e = {});
        var t = e.isTagged;
        void 0 === t && (t = !1);
        var i = this.startNode();
        this.next(), (i.expressions = []);
        var s = this.parseTemplateElement({ isTagged: t });
        for (i.quasis = [s]; !s.tail; )
            this.type === Fe.eof &&
                this.raise(this.pos, "Unterminated template literal"),
                this.expect(Fe.dollarBraceL),
                i.expressions.push(this.parseExpression()),
                this.expect(Fe.braceR),
                i.quasis.push((s = this.parseTemplateElement({ isTagged: t })));
        return this.next(), this.finishNode(i, "TemplateLiteral");
    }),
    (rt.isAsyncProp = function (e) {
        return (
            !e.computed &&
            "Identifier" === e.key.type &&
            "async" === e.key.name &&
            (this.type === Fe.name ||
                this.type === Fe.num ||
                this.type === Fe.string ||
                this.type === Fe.bracketL ||
                this.type.keyword ||
                (this.options.ecmaVersion >= 9 && this.type === Fe.star)) &&
            !ge.test(this.input.slice(this.lastTokEnd, this.start))
        );
    }),
    (rt.parseObj = function (e, t) {
        var i = this.startNode(),
            s = !0,
            u = {};
        for (i.properties = [], this.next(); !this.eat(Fe.braceR); ) {
            if (s) s = !1;
            else if (
                (this.expect(Fe.comma),
                this.options.ecmaVersion >= 5 &&
                    this.afterTrailingComma(Fe.braceR))
            )
                break;
            var r = this.parseProperty(e, t);
            e || this.checkPropClash(r, u, t), i.properties.push(r);
        }
        return this.finishNode(i, e ? "ObjectPattern" : "ObjectExpression");
    }),
    (rt.parseProperty = function (e, t) {
        var i,
            s,
            u,
            r,
            n = this.startNode();
        if (this.options.ecmaVersion >= 9 && this.eat(Fe.ellipsis))
            return e
                ? ((n.argument = this.parseIdent(!1)),
                  this.type === Fe.comma &&
                      this.raise(
                          this.start,
                          "Comma is not permitted after the rest element"
                      ),
                  this.finishNode(n, "RestElement"))
                : (this.type === Fe.parenL &&
                      t &&
                      (t.parenthesizedAssign < 0 &&
                          (t.parenthesizedAssign = this.start),
                      t.parenthesizedBind < 0 &&
                          (t.parenthesizedBind = this.start)),
                  (n.argument = this.parseMaybeAssign(!1, t)),
                  this.type === Fe.comma &&
                      t &&
                      t.trailingComma < 0 &&
                      (t.trailingComma = this.start),
                  this.finishNode(n, "SpreadElement"));
        this.options.ecmaVersion >= 6 &&
            ((n.method = !1),
            (n.shorthand = !1),
            (e || t) && ((u = this.start), (r = this.startLoc)),
            e || (i = this.eat(Fe.star)));
        var a = this.containsEsc;
        return (
            this.parsePropertyName(n),
            !e &&
            !a &&
            this.options.ecmaVersion >= 8 &&
            !i &&
            this.isAsyncProp(n)
                ? ((s = !0),
                  (i = this.options.ecmaVersion >= 9 && this.eat(Fe.star)),
                  this.parsePropertyName(n, t))
                : (s = !1),
            this.parsePropertyValue(n, e, i, s, u, r, t, a),
            this.finishNode(n, "Property")
        );
    }),
    (rt.parsePropertyValue = function (e, t, i, s, u, r, n, a) {
        if (
            ((i || s) && this.type === Fe.colon && this.unexpected(),
            this.eat(Fe.colon))
        )
            (e.value = t
                ? this.parseMaybeDefault(this.start, this.startLoc)
                : this.parseMaybeAssign(!1, n)),
                (e.kind = "init");
        else if (this.options.ecmaVersion >= 6 && this.type === Fe.parenL)
            t && this.unexpected(),
                (e.kind = "init"),
                (e.method = !0),
                (e.value = this.parseMethod(i, s));
        else if (
            t ||
            a ||
            !(this.options.ecmaVersion >= 5) ||
            e.computed ||
            "Identifier" !== e.key.type ||
            ("get" !== e.key.name && "set" !== e.key.name) ||
            this.type === Fe.comma ||
            this.type === Fe.braceR ||
            this.type === Fe.eq
        )
            this.options.ecmaVersion >= 6 &&
            !e.computed &&
            "Identifier" === e.key.type
                ? ((i || s) && this.unexpected(),
                  this.checkUnreserved(e.key),
                  "await" !== e.key.name ||
                      this.awaitIdentPos ||
                      (this.awaitIdentPos = u),
                  (e.kind = "init"),
                  t
                      ? (e.value = this.parseMaybeDefault(
                            u,
                            r,
                            this.copyNode(e.key)
                        ))
                      : this.type === Fe.eq && n
                      ? (n.shorthandAssign < 0 &&
                            (n.shorthandAssign = this.start),
                        (e.value = this.parseMaybeDefault(
                            u,
                            r,
                            this.copyNode(e.key)
                        )))
                      : (e.value = this.copyNode(e.key)),
                  (e.shorthand = !0))
                : this.unexpected();
        else {
            (i || s) && this.unexpected(),
                (e.kind = e.key.name),
                this.parsePropertyName(e),
                (e.value = this.parseMethod(!1));
            var o = "get" === e.kind ? 0 : 1;
            if (e.value.params.length !== o) {
                var h = e.value.start;
                "get" === e.kind
                    ? this.raiseRecoverable(h, "getter should have no params")
                    : this.raiseRecoverable(
                          h,
                          "setter should have exactly one param"
                      );
            } else
                "set" === e.kind &&
                    "RestElement" === e.value.params[0].type &&
                    this.raiseRecoverable(
                        e.value.params[0].start,
                        "Setter cannot use rest params"
                    );
        }
    }),
    (rt.parsePropertyName = function (e) {
        if (this.options.ecmaVersion >= 6) {
            if (this.eat(Fe.bracketL))
                return (
                    (e.computed = !0),
                    (e.key = this.parseMaybeAssign()),
                    this.expect(Fe.bracketR),
                    e.key
                );
            e.computed = !1;
        }
        return (e.key =
            this.type === Fe.num || this.type === Fe.string
                ? this.parseExprAtom()
                : this.parseIdent("never" !== this.options.allowReserved));
    }),
    (rt.initFunction = function (e) {
        (e.id = null),
            this.options.ecmaVersion >= 6 && (e.generator = e.expression = !1),
            this.options.ecmaVersion >= 8 && (e.async = !1);
    }),
    (rt.parseMethod = function (e, t, i) {
        var s = this.startNode(),
            u = this.yieldPos,
            r = this.awaitPos,
            n = this.awaitIdentPos;
        return (
            this.initFunction(s),
            this.options.ecmaVersion >= 6 && (s.generator = e),
            this.options.ecmaVersion >= 8 && (s.async = !!t),
            (this.yieldPos = 0),
            (this.awaitPos = 0),
            (this.awaitIdentPos = 0),
            this.enterScope(64 | Ue(t, s.generator) | (i ? 128 : 0)),
            this.expect(Fe.parenL),
            (s.params = this.parseBindingList(
                Fe.parenR,
                !1,
                this.options.ecmaVersion >= 8
            )),
            this.checkYieldAwaitInDefaultParams(),
            this.parseFunctionBody(s, !1, !0, !1),
            (this.yieldPos = u),
            (this.awaitPos = r),
            (this.awaitIdentPos = n),
            this.finishNode(s, "FunctionExpression")
        );
    }),
    (rt.parseArrowExpression = function (e, t, i, s) {
        var u = this.yieldPos,
            r = this.awaitPos,
            n = this.awaitIdentPos;
        return (
            this.enterScope(16 | Ue(i, !1)),
            this.initFunction(e),
            this.options.ecmaVersion >= 8 && (e.async = !!i),
            (this.yieldPos = 0),
            (this.awaitPos = 0),
            (this.awaitIdentPos = 0),
            (e.params = this.toAssignableList(t, !0)),
            this.parseFunctionBody(e, !0, !1, s),
            (this.yieldPos = u),
            (this.awaitPos = r),
            (this.awaitIdentPos = n),
            this.finishNode(e, "ArrowFunctionExpression")
        );
    }),
    (rt.parseFunctionBody = function (e, t, i, s) {
        var u = t && this.type !== Fe.braceL,
            r = this.strict,
            n = !1;
        if (u)
            (e.body = this.parseMaybeAssign(s)),
                (e.expression = !0),
                this.checkParams(e, !1);
        else {
            var a =
                this.options.ecmaVersion >= 7 &&
                !this.isSimpleParamList(e.params);
            (r && !a) ||
                ((n = this.strictDirective(this.end)) &&
                    a &&
                    this.raiseRecoverable(
                        e.start,
                        "Illegal 'use strict' directive in function with non-simple parameter list"
                    ));
            var o = this.labels;
            (this.labels = []),
                n && (this.strict = !0),
                this.checkParams(
                    e,
                    !r && !n && !t && !i && this.isSimpleParamList(e.params)
                ),
                this.strict && e.id && this.checkLValSimple(e.id, 5),
                (e.body = this.parseBlock(!1, void 0, n && !r)),
                (e.expression = !1),
                this.adaptDirectivePrologue(e.body.body),
                (this.labels = o);
        }
        this.exitScope();
    }),
    (rt.isSimpleParamList = function (e) {
        for (var t = 0, i = e; t < i.length; t += 1) {
            if ("Identifier" !== i[t].type) return !1;
        }
        return !0;
    }),
    (rt.checkParams = function (e, t) {
        for (
            var i = Object.create(null), s = 0, u = e.params;
            s < u.length;
            s += 1
        ) {
            var r = u[s];
            this.checkLValInnerPattern(r, 1, t ? null : i);
        }
    }),
    (rt.parseExprList = function (e, t, i, s) {
        for (var u = [], r = !0; !this.eat(e); ) {
            if (r) r = !1;
            else if ((this.expect(Fe.comma), t && this.afterTrailingComma(e)))
                break;
            var n = void 0;
            i && this.type === Fe.comma
                ? (n = null)
                : this.type === Fe.ellipsis
                ? ((n = this.parseSpread(s)),
                  s &&
                      this.type === Fe.comma &&
                      s.trailingComma < 0 &&
                      (s.trailingComma = this.start))
                : (n = this.parseMaybeAssign(!1, s)),
                u.push(n);
        }
        return u;
    }),
    (rt.checkUnreserved = function (e) {
        var t = e.start,
            i = e.end,
            s = e.name;
        (this.inGenerator &&
            "yield" === s &&
            this.raiseRecoverable(
                t,
                "Cannot use 'yield' as identifier inside a generator"
            ),
        this.inAsync &&
            "await" === s &&
            this.raiseRecoverable(
                t,
                "Cannot use 'await' as identifier inside an async function"
            ),
        this.currentThisScope().inClassFieldInit &&
            "arguments" === s &&
            this.raiseRecoverable(
                t,
                "Cannot use 'arguments' in class field initializer"
            ),
        !this.inClassStaticBlock ||
            ("arguments" !== s && "await" !== s) ||
            this.raise(
                t,
                "Cannot use " + s + " in class static initialization block"
            ),
        this.keywords.test(s) &&
            this.raise(t, "Unexpected keyword '" + s + "'"),
        this.options.ecmaVersion < 6 &&
            -1 !== this.input.slice(t, i).indexOf("\\")) ||
            ((this.strict ? this.reservedWordsStrict : this.reservedWords).test(
                s
            ) &&
                (this.inAsync ||
                    "await" !== s ||
                    this.raiseRecoverable(
                        t,
                        "Cannot use keyword 'await' outside an async function"
                    ),
                this.raiseRecoverable(
                    t,
                    "The keyword '" + s + "' is reserved"
                )));
    }),
    (rt.parseIdent = function (e, t) {
        var i = this.startNode();
        return (
            this.type === Fe.name
                ? (i.name = this.value)
                : this.type.keyword
                ? ((i.name = this.type.keyword),
                  ("class" !== i.name && "function" !== i.name) ||
                      (this.lastTokEnd === this.lastTokStart + 1 &&
                          46 === this.input.charCodeAt(this.lastTokStart)) ||
                      this.context.pop())
                : this.unexpected(),
            this.next(!!e),
            this.finishNode(i, "Identifier"),
            e ||
                (this.checkUnreserved(i),
                "await" !== i.name ||
                    this.awaitIdentPos ||
                    (this.awaitIdentPos = i.start)),
            i
        );
    }),
    (rt.parsePrivateIdent = function () {
        var e = this.startNode();
        return (
            this.type === Fe.privateId
                ? (e.name = this.value)
                : this.unexpected(),
            this.next(),
            this.finishNode(e, "PrivateIdentifier"),
            0 === this.privateNameStack.length
                ? this.raise(
                      e.start,
                      "Private field '#" +
                          e.name +
                          "' must be declared in an enclosing class"
                  )
                : this.privateNameStack[
                      this.privateNameStack.length - 1
                  ].used.push(e),
            e
        );
    }),
    (rt.parseYield = function (e) {
        this.yieldPos || (this.yieldPos = this.start);
        var t = this.startNode();
        return (
            this.next(),
            this.type === Fe.semi ||
            this.canInsertSemicolon() ||
            (this.type !== Fe.star && !this.type.startsExpr)
                ? ((t.delegate = !1), (t.argument = null))
                : ((t.delegate = this.eat(Fe.star)),
                  (t.argument = this.parseMaybeAssign(e))),
            this.finishNode(t, "YieldExpression")
        );
    }),
    (rt.parseAwait = function (e) {
        this.awaitPos || (this.awaitPos = this.start);
        var t = this.startNode();
        return (
            this.next(),
            (t.argument = this.parseMaybeUnary(null, !0, !1, e)),
            this.finishNode(t, "AwaitExpression")
        );
    });
var ot = We.prototype;
(ot.raise = function (e, t) {
    var i = Re(this.input, e);
    t += " (" + i.line + ":" + i.column + ")";
    var s = new SyntaxError(t);
    throw ((s.pos = e), (s.loc = i), (s.raisedAt = this.pos), s);
}),
    (ot.raiseRecoverable = ot.raise),
    (ot.curPosition = function () {
        if (this.options.locations)
            return new Le(this.curLine, this.pos - this.lineStart);
    });
var ht = We.prototype,
    pt = function (e) {
        (this.flags = e),
            (this.var = []),
            (this.lexical = []),
            (this.functions = []),
            (this.inClassFieldInit = !1);
    };
(ht.enterScope = function (e) {
    this.scopeStack.push(new pt(e));
}),
    (ht.exitScope = function () {
        this.scopeStack.pop();
    }),
    (ht.treatFunctionsAsVarInScope = function (e) {
        return 2 & e.flags || (!this.inModule && 1 & e.flags);
    }),
    (ht.declareName = function (e, t, i) {
        var s = !1;
        if (2 === t) {
            var u = this.currentScope();
            (s =
                u.lexical.indexOf(e) > -1 ||
                u.functions.indexOf(e) > -1 ||
                u.var.indexOf(e) > -1),
                u.lexical.push(e),
                this.inModule && 1 & u.flags && delete this.undefinedExports[e];
        } else if (4 === t) {
            this.currentScope().lexical.push(e);
        } else if (3 === t) {
            var r = this.currentScope();
            (s = this.treatFunctionsAsVar
                ? r.lexical.indexOf(e) > -1
                : r.lexical.indexOf(e) > -1 || r.var.indexOf(e) > -1),
                r.functions.push(e);
        } else
            for (var n = this.scopeStack.length - 1; n >= 0; --n) {
                var a = this.scopeStack[n];
                if (
                    (a.lexical.indexOf(e) > -1 &&
                        !(32 & a.flags && a.lexical[0] === e)) ||
                    (!this.treatFunctionsAsVarInScope(a) &&
                        a.functions.indexOf(e) > -1)
                ) {
                    s = !0;
                    break;
                }
                if (
                    (a.var.push(e),
                    this.inModule &&
                        1 & a.flags &&
                        delete this.undefinedExports[e],
                    259 & a.flags)
                )
                    break;
            }
        s &&
            this.raiseRecoverable(
                i,
                "Identifier '" + e + "' has already been declared"
            );
    }),
    (ht.checkLocalExport = function (e) {
        -1 === this.scopeStack[0].lexical.indexOf(e.name) &&
            -1 === this.scopeStack[0].var.indexOf(e.name) &&
            (this.undefinedExports[e.name] = e);
    }),
    (ht.currentScope = function () {
        return this.scopeStack[this.scopeStack.length - 1];
    }),
    (ht.currentVarScope = function () {
        for (var e = this.scopeStack.length - 1; ; e--) {
            var t = this.scopeStack[e];
            if (259 & t.flags) return t;
        }
    }),
    (ht.currentThisScope = function () {
        for (var e = this.scopeStack.length - 1; ; e--) {
            var t = this.scopeStack[e];
            if (259 & t.flags && !(16 & t.flags)) return t;
        }
    });
var ct = function (e, t, i) {
        (this.type = ""),
            (this.start = t),
            (this.end = 0),
            e.options.locations && (this.loc = new Ve(e, i)),
            e.options.directSourceFile &&
                (this.sourceFile = e.options.directSourceFile),
            e.options.ranges && (this.range = [t, 0]);
    },
    lt = We.prototype;
function Dt(e, t, i, s) {
    return (
        (e.type = t),
        (e.end = i),
        this.options.locations && (e.loc.end = s),
        this.options.ranges && (e.range[1] = i),
        e
    );
}
(lt.startNode = function () {
    return new ct(this, this.start, this.startLoc);
}),
    (lt.startNodeAt = function (e, t) {
        return new ct(this, e, t);
    }),
    (lt.finishNode = function (e, t) {
        return Dt.call(this, e, t, this.lastTokEnd, this.lastTokEndLoc);
    }),
    (lt.finishNodeAt = function (e, t, i, s) {
        return Dt.call(this, e, t, i, s);
    }),
    (lt.copyNode = function (e) {
        var t = new ct(this, e.start, this.startLoc);
        for (var i in e) t[i] = e[i];
        return t;
    });
var dt =
        "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS",
    ft = dt + " Extended_Pictographic",
    At = ft + " EBase EComp EMod EPres ExtPict",
    Ct = {
        9: dt,
        10: ft,
        11: ft,
        12: At,
        13: "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS Extended_Pictographic EBase EComp EMod EPres ExtPict",
    },
    mt =
        "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu",
    Et =
        "Adlam Adlm Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb",
    Ft =
        Et +
        " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd",
    gt =
        Ft +
        " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho",
    xt =
        gt +
        " Chorasmian Chrs Diak Dives_Akuru Khitan_Small_Script Kits Yezi Yezidi",
    Bt = {
        9: Et,
        10: Ft,
        11: gt,
        12: xt,
        13: "Adlam Adlm Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho Chorasmian Chrs Diak Dives_Akuru Khitan_Small_Script Kits Yezi Yezidi Cypro_Minoan Cpmn Old_Uyghur Ougr Tangsa Tnsa Toto Vithkuqi Vith",
    },
    yt = {};
function vt(e) {
    var t = (yt[e] = {
        binary: Pe(Ct[e] + " " + mt),
        nonBinary: { General_Category: Pe(mt), Script: Pe(Bt[e]) },
    });
    (t.nonBinary.Script_Extensions = t.nonBinary.Script),
        (t.nonBinary.gc = t.nonBinary.General_Category),
        (t.nonBinary.sc = t.nonBinary.Script),
        (t.nonBinary.scx = t.nonBinary.Script_Extensions);
}
for (var St = 0, bt = [9, 10, 11, 12, 13]; St < bt.length; St += 1) {
    vt(bt[St]);
}
var kt = We.prototype,
    _t = function (e) {
        (this.parser = e),
            (this.validFlags =
                "gim" +
                (e.options.ecmaVersion >= 6 ? "uy" : "") +
                (e.options.ecmaVersion >= 9 ? "s" : "") +
                (e.options.ecmaVersion >= 13 ? "d" : "")),
            (this.unicodeProperties =
                yt[e.options.ecmaVersion >= 13 ? 13 : e.options.ecmaVersion]),
            (this.source = ""),
            (this.flags = ""),
            (this.start = 0),
            (this.switchU = !1),
            (this.switchN = !1),
            (this.pos = 0),
            (this.lastIntValue = 0),
            (this.lastStringValue = ""),
            (this.lastAssertionIsQuantifiable = !1),
            (this.numCapturingParens = 0),
            (this.maxBackReference = 0),
            (this.groupNames = []),
            (this.backReferenceNames = []);
    };
function wt(e) {
    return (
        36 === e ||
        (e >= 40 && e <= 43) ||
        46 === e ||
        63 === e ||
        (e >= 91 && e <= 94) ||
        (e >= 123 && e <= 125)
    );
}
function It(e) {
    return (e >= 65 && e <= 90) || (e >= 97 && e <= 122);
}
function Pt(e) {
    return It(e) || 95 === e;
}
function Tt(e) {
    return Pt(e) || Nt(e);
}
function Nt(e) {
    return e >= 48 && e <= 57;
}
function Lt(e) {
    return (
        (e >= 48 && e <= 57) || (e >= 65 && e <= 70) || (e >= 97 && e <= 102)
    );
}
function Vt(e) {
    return e >= 65 && e <= 70
        ? e - 65 + 10
        : e >= 97 && e <= 102
        ? e - 97 + 10
        : e - 48;
}
function Rt(e) {
    return e >= 48 && e <= 55;
}
(_t.prototype.reset = function (e, t, i) {
    var s = -1 !== i.indexOf("u");
    (this.start = 0 | e),
        (this.source = t + ""),
        (this.flags = i),
        (this.switchU = s && this.parser.options.ecmaVersion >= 6),
        (this.switchN = s && this.parser.options.ecmaVersion >= 9);
}),
    (_t.prototype.raise = function (e) {
        this.parser.raiseRecoverable(
            this.start,
            "Invalid regular expression: /" + this.source + "/: " + e
        );
    }),
    (_t.prototype.at = function (e, t) {
        void 0 === t && (t = !1);
        var i = this.source,
            s = i.length;
        if (e >= s) return -1;
        var u = i.charCodeAt(e);
        if ((!t && !this.switchU) || u <= 55295 || u >= 57344 || e + 1 >= s)
            return u;
        var r = i.charCodeAt(e + 1);
        return r >= 56320 && r <= 57343 ? (u << 10) + r - 56613888 : u;
    }),
    (_t.prototype.nextIndex = function (e, t) {
        void 0 === t && (t = !1);
        var i = this.source,
            s = i.length;
        if (e >= s) return s;
        var u,
            r = i.charCodeAt(e);
        return (!t && !this.switchU) ||
            r <= 55295 ||
            r >= 57344 ||
            e + 1 >= s ||
            (u = i.charCodeAt(e + 1)) < 56320 ||
            u > 57343
            ? e + 1
            : e + 2;
    }),
    (_t.prototype.current = function (e) {
        return void 0 === e && (e = !1), this.at(this.pos, e);
    }),
    (_t.prototype.lookahead = function (e) {
        return (
            void 0 === e && (e = !1), this.at(this.nextIndex(this.pos, e), e)
        );
    }),
    (_t.prototype.advance = function (e) {
        void 0 === e && (e = !1), (this.pos = this.nextIndex(this.pos, e));
    }),
    (_t.prototype.eat = function (e, t) {
        return (
            void 0 === t && (t = !1),
            this.current(t) === e && (this.advance(t), !0)
        );
    }),
    (kt.validateRegExpFlags = function (e) {
        for (var t = e.validFlags, i = e.flags, s = 0; s < i.length; s++) {
            var u = i.charAt(s);
            -1 === t.indexOf(u) &&
                this.raise(e.start, "Invalid regular expression flag"),
                i.indexOf(u, s + 1) > -1 &&
                    this.raise(e.start, "Duplicate regular expression flag");
        }
    }),
    (kt.validateRegExpPattern = function (e) {
        this.regexp_pattern(e),
            !e.switchN &&
                this.options.ecmaVersion >= 9 &&
                e.groupNames.length > 0 &&
                ((e.switchN = !0), this.regexp_pattern(e));
    }),
    (kt.regexp_pattern = function (e) {
        (e.pos = 0),
            (e.lastIntValue = 0),
            (e.lastStringValue = ""),
            (e.lastAssertionIsQuantifiable = !1),
            (e.numCapturingParens = 0),
            (e.maxBackReference = 0),
            (e.groupNames.length = 0),
            (e.backReferenceNames.length = 0),
            this.regexp_disjunction(e),
            e.pos !== e.source.length &&
                (e.eat(41) && e.raise("Unmatched ')'"),
                (e.eat(93) || e.eat(125)) &&
                    e.raise("Lone quantifier brackets")),
            e.maxBackReference > e.numCapturingParens &&
                e.raise("Invalid escape");
        for (var t = 0, i = e.backReferenceNames; t < i.length; t += 1) {
            var s = i[t];
            -1 === e.groupNames.indexOf(s) &&
                e.raise("Invalid named capture referenced");
        }
    }),
    (kt.regexp_disjunction = function (e) {
        for (this.regexp_alternative(e); e.eat(124); )
            this.regexp_alternative(e);
        this.regexp_eatQuantifier(e, !0) && e.raise("Nothing to repeat"),
            e.eat(123) && e.raise("Lone quantifier brackets");
    }),
    (kt.regexp_alternative = function (e) {
        for (; e.pos < e.source.length && this.regexp_eatTerm(e); );
    }),
    (kt.regexp_eatTerm = function (e) {
        return this.regexp_eatAssertion(e)
            ? (e.lastAssertionIsQuantifiable &&
                  this.regexp_eatQuantifier(e) &&
                  e.switchU &&
                  e.raise("Invalid quantifier"),
              !0)
            : !!(e.switchU
                  ? this.regexp_eatAtom(e)
                  : this.regexp_eatExtendedAtom(e)) &&
                  (this.regexp_eatQuantifier(e), !0);
    }),
    (kt.regexp_eatAssertion = function (e) {
        var t = e.pos;
        if (((e.lastAssertionIsQuantifiable = !1), e.eat(94) || e.eat(36)))
            return !0;
        if (e.eat(92)) {
            if (e.eat(66) || e.eat(98)) return !0;
            e.pos = t;
        }
        if (e.eat(40) && e.eat(63)) {
            var i = !1;
            if (
                (this.options.ecmaVersion >= 9 && (i = e.eat(60)),
                e.eat(61) || e.eat(33))
            )
                return (
                    this.regexp_disjunction(e),
                    e.eat(41) || e.raise("Unterminated group"),
                    (e.lastAssertionIsQuantifiable = !i),
                    !0
                );
        }
        return (e.pos = t), !1;
    }),
    (kt.regexp_eatQuantifier = function (e, t) {
        return (
            void 0 === t && (t = !1),
            !!this.regexp_eatQuantifierPrefix(e, t) && (e.eat(63), !0)
        );
    }),
    (kt.regexp_eatQuantifierPrefix = function (e, t) {
        return (
            e.eat(42) ||
            e.eat(43) ||
            e.eat(63) ||
            this.regexp_eatBracedQuantifier(e, t)
        );
    }),
    (kt.regexp_eatBracedQuantifier = function (e, t) {
        var i = e.pos;
        if (e.eat(123)) {
            var s = 0,
                u = -1;
            if (
                this.regexp_eatDecimalDigits(e) &&
                ((s = e.lastIntValue),
                e.eat(44) &&
                    this.regexp_eatDecimalDigits(e) &&
                    (u = e.lastIntValue),
                e.eat(125))
            )
                return (
                    -1 !== u &&
                        u < s &&
                        !t &&
                        e.raise("numbers out of order in {} quantifier"),
                    !0
                );
            e.switchU && !t && e.raise("Incomplete quantifier"), (e.pos = i);
        }
        return !1;
    }),
    (kt.regexp_eatAtom = function (e) {
        return (
            this.regexp_eatPatternCharacters(e) ||
            e.eat(46) ||
            this.regexp_eatReverseSolidusAtomEscape(e) ||
            this.regexp_eatCharacterClass(e) ||
            this.regexp_eatUncapturingGroup(e) ||
            this.regexp_eatCapturingGroup(e)
        );
    }),
    (kt.regexp_eatReverseSolidusAtomEscape = function (e) {
        var t = e.pos;
        if (e.eat(92)) {
            if (this.regexp_eatAtomEscape(e)) return !0;
            e.pos = t;
        }
        return !1;
    }),
    (kt.regexp_eatUncapturingGroup = function (e) {
        var t = e.pos;
        if (e.eat(40)) {
            if (e.eat(63) && e.eat(58)) {
                if ((this.regexp_disjunction(e), e.eat(41))) return !0;
                e.raise("Unterminated group");
            }
            e.pos = t;
        }
        return !1;
    }),
    (kt.regexp_eatCapturingGroup = function (e) {
        if (e.eat(40)) {
            if (
                (this.options.ecmaVersion >= 9
                    ? this.regexp_groupSpecifier(e)
                    : 63 === e.current() && e.raise("Invalid group"),
                this.regexp_disjunction(e),
                e.eat(41))
            )
                return (e.numCapturingParens += 1), !0;
            e.raise("Unterminated group");
        }
        return !1;
    }),
    (kt.regexp_eatExtendedAtom = function (e) {
        return (
            e.eat(46) ||
            this.regexp_eatReverseSolidusAtomEscape(e) ||
            this.regexp_eatCharacterClass(e) ||
            this.regexp_eatUncapturingGroup(e) ||
            this.regexp_eatCapturingGroup(e) ||
            this.regexp_eatInvalidBracedQuantifier(e) ||
            this.regexp_eatExtendedPatternCharacter(e)
        );
    }),
    (kt.regexp_eatInvalidBracedQuantifier = function (e) {
        return (
            this.regexp_eatBracedQuantifier(e, !0) &&
                e.raise("Nothing to repeat"),
            !1
        );
    }),
    (kt.regexp_eatSyntaxCharacter = function (e) {
        var t = e.current();
        return !!wt(t) && ((e.lastIntValue = t), e.advance(), !0);
    }),
    (kt.regexp_eatPatternCharacters = function (e) {
        for (var t = e.pos, i = 0; -1 !== (i = e.current()) && !wt(i); )
            e.advance();
        return e.pos !== t;
    }),
    (kt.regexp_eatExtendedPatternCharacter = function (e) {
        var t = e.current();
        return (
            !(
                -1 === t ||
                36 === t ||
                (t >= 40 && t <= 43) ||
                46 === t ||
                63 === t ||
                91 === t ||
                94 === t ||
                124 === t
            ) && (e.advance(), !0)
        );
    }),
    (kt.regexp_groupSpecifier = function (e) {
        if (e.eat(63)) {
            if (this.regexp_eatGroupName(e))
                return (
                    -1 !== e.groupNames.indexOf(e.lastStringValue) &&
                        e.raise("Duplicate capture group name"),
                    void e.groupNames.push(e.lastStringValue)
                );
            e.raise("Invalid group");
        }
    }),
    (kt.regexp_eatGroupName = function (e) {
        if (((e.lastStringValue = ""), e.eat(60))) {
            if (this.regexp_eatRegExpIdentifierName(e) && e.eat(62)) return !0;
            e.raise("Invalid capture group name");
        }
        return !1;
    }),
    (kt.regexp_eatRegExpIdentifierName = function (e) {
        if (
            ((e.lastStringValue = ""), this.regexp_eatRegExpIdentifierStart(e))
        ) {
            for (
                e.lastStringValue += Te(e.lastIntValue);
                this.regexp_eatRegExpIdentifierPart(e);

            )
                e.lastStringValue += Te(e.lastIntValue);
            return !0;
        }
        return !1;
    }),
    (kt.regexp_eatRegExpIdentifierStart = function (e) {
        var t = e.pos,
            i = this.options.ecmaVersion >= 11,
            s = e.current(i);
        return (
            e.advance(i),
            92 === s &&
                this.regexp_eatRegExpUnicodeEscapeSequence(e, i) &&
                (s = e.lastIntValue),
            (function (e) {
                return le(e, !0) || 36 === e || 95 === e;
            })(s)
                ? ((e.lastIntValue = s), !0)
                : ((e.pos = t), !1)
        );
    }),
    (kt.regexp_eatRegExpIdentifierPart = function (e) {
        var t = e.pos,
            i = this.options.ecmaVersion >= 11,
            s = e.current(i);
        return (
            e.advance(i),
            92 === s &&
                this.regexp_eatRegExpUnicodeEscapeSequence(e, i) &&
                (s = e.lastIntValue),
            (function (e) {
                return (
                    De(e, !0) ||
                    36 === e ||
                    95 === e ||
                    8204 === e ||
                    8205 === e
                );
            })(s)
                ? ((e.lastIntValue = s), !0)
                : ((e.pos = t), !1)
        );
    }),
    (kt.regexp_eatAtomEscape = function (e) {
        return (
            !!(
                this.regexp_eatBackReference(e) ||
                this.regexp_eatCharacterClassEscape(e) ||
                this.regexp_eatCharacterEscape(e) ||
                (e.switchN && this.regexp_eatKGroupName(e))
            ) ||
            (e.switchU &&
                (99 === e.current() && e.raise("Invalid unicode escape"),
                e.raise("Invalid escape")),
            !1)
        );
    }),
    (kt.regexp_eatBackReference = function (e) {
        var t = e.pos;
        if (this.regexp_eatDecimalEscape(e)) {
            var i = e.lastIntValue;
            if (e.switchU)
                return i > e.maxBackReference && (e.maxBackReference = i), !0;
            if (i <= e.numCapturingParens) return !0;
            e.pos = t;
        }
        return !1;
    }),
    (kt.regexp_eatKGroupName = function (e) {
        if (e.eat(107)) {
            if (this.regexp_eatGroupName(e))
                return e.backReferenceNames.push(e.lastStringValue), !0;
            e.raise("Invalid named reference");
        }
        return !1;
    }),
    (kt.regexp_eatCharacterEscape = function (e) {
        return (
            this.regexp_eatControlEscape(e) ||
            this.regexp_eatCControlLetter(e) ||
            this.regexp_eatZero(e) ||
            this.regexp_eatHexEscapeSequence(e) ||
            this.regexp_eatRegExpUnicodeEscapeSequence(e, !1) ||
            (!e.switchU && this.regexp_eatLegacyOctalEscapeSequence(e)) ||
            this.regexp_eatIdentityEscape(e)
        );
    }),
    (kt.regexp_eatCControlLetter = function (e) {
        var t = e.pos;
        if (e.eat(99)) {
            if (this.regexp_eatControlLetter(e)) return !0;
            e.pos = t;
        }
        return !1;
    }),
    (kt.regexp_eatZero = function (e) {
        return (
            48 === e.current() &&
            !Nt(e.lookahead()) &&
            ((e.lastIntValue = 0), e.advance(), !0)
        );
    }),
    (kt.regexp_eatControlEscape = function (e) {
        var t = e.current();
        return 116 === t
            ? ((e.lastIntValue = 9), e.advance(), !0)
            : 110 === t
            ? ((e.lastIntValue = 10), e.advance(), !0)
            : 118 === t
            ? ((e.lastIntValue = 11), e.advance(), !0)
            : 102 === t
            ? ((e.lastIntValue = 12), e.advance(), !0)
            : 114 === t && ((e.lastIntValue = 13), e.advance(), !0);
    }),
    (kt.regexp_eatControlLetter = function (e) {
        var t = e.current();
        return !!It(t) && ((e.lastIntValue = t % 32), e.advance(), !0);
    }),
    (kt.regexp_eatRegExpUnicodeEscapeSequence = function (e, t) {
        void 0 === t && (t = !1);
        var i = e.pos,
            s = t || e.switchU;
        if (e.eat(117)) {
            if (this.regexp_eatFixedHexDigits(e, 4)) {
                var u = e.lastIntValue;
                if (s && u >= 55296 && u <= 56319) {
                    var r = e.pos;
                    if (
                        e.eat(92) &&
                        e.eat(117) &&
                        this.regexp_eatFixedHexDigits(e, 4)
                    ) {
                        var n = e.lastIntValue;
                        if (n >= 56320 && n <= 57343)
                            return (
                                (e.lastIntValue =
                                    1024 * (u - 55296) + (n - 56320) + 65536),
                                !0
                            );
                    }
                    (e.pos = r), (e.lastIntValue = u);
                }
                return !0;
            }
            if (
                s &&
                e.eat(123) &&
                this.regexp_eatHexDigits(e) &&
                e.eat(125) &&
                (function (e) {
                    return e >= 0 && e <= 1114111;
                })(e.lastIntValue)
            )
                return !0;
            s && e.raise("Invalid unicode escape"), (e.pos = i);
        }
        return !1;
    }),
    (kt.regexp_eatIdentityEscape = function (e) {
        if (e.switchU)
            return (
                !!this.regexp_eatSyntaxCharacter(e) ||
                (!!e.eat(47) && ((e.lastIntValue = 47), !0))
            );
        var t = e.current();
        return (
            !(99 === t || (e.switchN && 107 === t)) &&
            ((e.lastIntValue = t), e.advance(), !0)
        );
    }),
    (kt.regexp_eatDecimalEscape = function (e) {
        e.lastIntValue = 0;
        var t = e.current();
        if (t >= 49 && t <= 57) {
            do {
                (e.lastIntValue = 10 * e.lastIntValue + (t - 48)), e.advance();
            } while ((t = e.current()) >= 48 && t <= 57);
            return !0;
        }
        return !1;
    }),
    (kt.regexp_eatCharacterClassEscape = function (e) {
        var t = e.current();
        if (
            (function (e) {
                return (
                    100 === e ||
                    68 === e ||
                    115 === e ||
                    83 === e ||
                    119 === e ||
                    87 === e
                );
            })(t)
        )
            return (e.lastIntValue = -1), e.advance(), !0;
        if (
            e.switchU &&
            this.options.ecmaVersion >= 9 &&
            (80 === t || 112 === t)
        ) {
            if (
                ((e.lastIntValue = -1),
                e.advance(),
                e.eat(123) &&
                    this.regexp_eatUnicodePropertyValueExpression(e) &&
                    e.eat(125))
            )
                return !0;
            e.raise("Invalid property name");
        }
        return !1;
    }),
    (kt.regexp_eatUnicodePropertyValueExpression = function (e) {
        var t = e.pos;
        if (this.regexp_eatUnicodePropertyName(e) && e.eat(61)) {
            var i = e.lastStringValue;
            if (this.regexp_eatUnicodePropertyValue(e)) {
                var s = e.lastStringValue;
                return (
                    this.regexp_validateUnicodePropertyNameAndValue(e, i, s), !0
                );
            }
        }
        if (((e.pos = t), this.regexp_eatLoneUnicodePropertyNameOrValue(e))) {
            var u = e.lastStringValue;
            return this.regexp_validateUnicodePropertyNameOrValue(e, u), !0;
        }
        return !1;
    }),
    (kt.regexp_validateUnicodePropertyNameAndValue = function (e, t, i) {
        we(e.unicodeProperties.nonBinary, t) ||
            e.raise("Invalid property name"),
            e.unicodeProperties.nonBinary[t].test(i) ||
                e.raise("Invalid property value");
    }),
    (kt.regexp_validateUnicodePropertyNameOrValue = function (e, t) {
        e.unicodeProperties.binary.test(t) || e.raise("Invalid property name");
    }),
    (kt.regexp_eatUnicodePropertyName = function (e) {
        var t = 0;
        for (e.lastStringValue = ""; Pt((t = e.current())); )
            (e.lastStringValue += Te(t)), e.advance();
        return "" !== e.lastStringValue;
    }),
    (kt.regexp_eatUnicodePropertyValue = function (e) {
        var t = 0;
        for (e.lastStringValue = ""; Tt((t = e.current())); )
            (e.lastStringValue += Te(t)), e.advance();
        return "" !== e.lastStringValue;
    }),
    (kt.regexp_eatLoneUnicodePropertyNameOrValue = function (e) {
        return this.regexp_eatUnicodePropertyValue(e);
    }),
    (kt.regexp_eatCharacterClass = function (e) {
        if (e.eat(91)) {
            if ((e.eat(94), this.regexp_classRanges(e), e.eat(93))) return !0;
            e.raise("Unterminated character class");
        }
        return !1;
    }),
    (kt.regexp_classRanges = function (e) {
        for (; this.regexp_eatClassAtom(e); ) {
            var t = e.lastIntValue;
            if (e.eat(45) && this.regexp_eatClassAtom(e)) {
                var i = e.lastIntValue;
                !e.switchU ||
                    (-1 !== t && -1 !== i) ||
                    e.raise("Invalid character class"),
                    -1 !== t &&
                        -1 !== i &&
                        t > i &&
                        e.raise("Range out of order in character class");
            }
        }
    }),
    (kt.regexp_eatClassAtom = function (e) {
        var t = e.pos;
        if (e.eat(92)) {
            if (this.regexp_eatClassEscape(e)) return !0;
            if (e.switchU) {
                var i = e.current();
                (99 === i || Rt(i)) && e.raise("Invalid class escape"),
                    e.raise("Invalid escape");
            }
            e.pos = t;
        }
        var s = e.current();
        return 93 !== s && ((e.lastIntValue = s), e.advance(), !0);
    }),
    (kt.regexp_eatClassEscape = function (e) {
        var t = e.pos;
        if (e.eat(98)) return (e.lastIntValue = 8), !0;
        if (e.switchU && e.eat(45)) return (e.lastIntValue = 45), !0;
        if (!e.switchU && e.eat(99)) {
            if (this.regexp_eatClassControlLetter(e)) return !0;
            e.pos = t;
        }
        return (
            this.regexp_eatCharacterClassEscape(e) ||
            this.regexp_eatCharacterEscape(e)
        );
    }),
    (kt.regexp_eatClassControlLetter = function (e) {
        var t = e.current();
        return (
            !(!Nt(t) && 95 !== t) &&
            ((e.lastIntValue = t % 32), e.advance(), !0)
        );
    }),
    (kt.regexp_eatHexEscapeSequence = function (e) {
        var t = e.pos;
        if (e.eat(120)) {
            if (this.regexp_eatFixedHexDigits(e, 2)) return !0;
            e.switchU && e.raise("Invalid escape"), (e.pos = t);
        }
        return !1;
    }),
    (kt.regexp_eatDecimalDigits = function (e) {
        var t = e.pos,
            i = 0;
        for (e.lastIntValue = 0; Nt((i = e.current())); )
            (e.lastIntValue = 10 * e.lastIntValue + (i - 48)), e.advance();
        return e.pos !== t;
    }),
    (kt.regexp_eatHexDigits = function (e) {
        var t = e.pos,
            i = 0;
        for (e.lastIntValue = 0; Lt((i = e.current())); )
            (e.lastIntValue = 16 * e.lastIntValue + Vt(i)), e.advance();
        return e.pos !== t;
    }),
    (kt.regexp_eatLegacyOctalEscapeSequence = function (e) {
        if (this.regexp_eatOctalDigit(e)) {
            var t = e.lastIntValue;
            if (this.regexp_eatOctalDigit(e)) {
                var i = e.lastIntValue;
                t <= 3 && this.regexp_eatOctalDigit(e)
                    ? (e.lastIntValue = 64 * t + 8 * i + e.lastIntValue)
                    : (e.lastIntValue = 8 * t + i);
            } else e.lastIntValue = t;
            return !0;
        }
        return !1;
    }),
    (kt.regexp_eatOctalDigit = function (e) {
        var t = e.current();
        return Rt(t)
            ? ((e.lastIntValue = t - 48), e.advance(), !0)
            : ((e.lastIntValue = 0), !1);
    }),
    (kt.regexp_eatFixedHexDigits = function (e, t) {
        var i = e.pos;
        e.lastIntValue = 0;
        for (var s = 0; s < t; ++s) {
            var u = e.current();
            if (!Lt(u)) return (e.pos = i), !1;
            (e.lastIntValue = 16 * e.lastIntValue + Vt(u)), e.advance();
        }
        return !0;
    });
var Mt = function (e) {
        (this.type = e.type),
            (this.value = e.value),
            (this.start = e.start),
            (this.end = e.end),
            e.options.locations && (this.loc = new Ve(e, e.startLoc, e.endLoc)),
            e.options.ranges && (this.range = [e.start, e.end]);
    },
    Ot = We.prototype;
function qt(e) {
    return "function" != typeof BigInt ? null : BigInt(e.replace(/_/g, ""));
}
(Ot.next = function (e) {
    !e &&
        this.type.keyword &&
        this.containsEsc &&
        this.raiseRecoverable(
            this.start,
            "Escape sequence in keyword " + this.type.keyword
        ),
        this.options.onToken && this.options.onToken(new Mt(this)),
        (this.lastTokEnd = this.end),
        (this.lastTokStart = this.start),
        (this.lastTokEndLoc = this.endLoc),
        (this.lastTokStartLoc = this.startLoc),
        this.nextToken();
}),
    (Ot.getToken = function () {
        return this.next(), new Mt(this);
    }),
    "undefined" != typeof Symbol &&
        (Ot[Symbol.iterator] = function () {
            var e = this;
            return {
                next: function () {
                    var t = e.getToken();
                    return { done: t.type === Fe.eof, value: t };
                },
            };
        }),
    (Ot.nextToken = function () {
        var e = this.curContext();
        return (
            (e && e.preserveSpace) || this.skipSpace(),
            (this.start = this.pos),
            this.options.locations && (this.startLoc = this.curPosition()),
            this.pos >= this.input.length
                ? this.finishToken(Fe.eof)
                : e.override
                ? e.override(this)
                : void this.readToken(this.fullCharCodeAtPos())
        );
    }),
    (Ot.readToken = function (e) {
        return le(e, this.options.ecmaVersion >= 6) || 92 === e
            ? this.readWord()
            : this.getTokenFromCode(e);
    }),
    (Ot.fullCharCodeAtPos = function () {
        var e = this.input.charCodeAt(this.pos);
        if (e <= 55295 || e >= 56320) return e;
        var t = this.input.charCodeAt(this.pos + 1);
        return t <= 56319 || t >= 57344 ? e : (e << 10) + t - 56613888;
    }),
    (Ot.skipBlockComment = function () {
        var e = this.options.onComment && this.curPosition(),
            t = this.pos,
            i = this.input.indexOf("*/", (this.pos += 2));
        if (
            (-1 === i && this.raise(this.pos - 2, "Unterminated comment"),
            (this.pos = i + 2),
            this.options.locations)
        )
            for (
                var s = void 0, u = t;
                (s = ye(this.input, u, this.pos)) > -1;

            )
                ++this.curLine, (u = this.lineStart = s);
        this.options.onComment &&
            this.options.onComment(
                !0,
                this.input.slice(t + 2, i),
                t,
                this.pos,
                e,
                this.curPosition()
            );
    }),
    (Ot.skipLineComment = function (e) {
        for (
            var t = this.pos,
                i = this.options.onComment && this.curPosition(),
                s = this.input.charCodeAt((this.pos += e));
            this.pos < this.input.length && !Be(s);

        )
            s = this.input.charCodeAt(++this.pos);
        this.options.onComment &&
            this.options.onComment(
                !1,
                this.input.slice(t + e, this.pos),
                t,
                this.pos,
                i,
                this.curPosition()
            );
    }),
    (Ot.skipSpace = function () {
        e: for (; this.pos < this.input.length; ) {
            var e = this.input.charCodeAt(this.pos);
            switch (e) {
                case 32:
                case 160:
                    ++this.pos;
                    break;
                case 13:
                    10 === this.input.charCodeAt(this.pos + 1) && ++this.pos;
                case 10:
                case 8232:
                case 8233:
                    ++this.pos,
                        this.options.locations &&
                            (++this.curLine, (this.lineStart = this.pos));
                    break;
                case 47:
                    switch (this.input.charCodeAt(this.pos + 1)) {
                        case 42:
                            this.skipBlockComment();
                            break;
                        case 47:
                            this.skipLineComment(2);
                            break;
                        default:
                            break e;
                    }
                    break;
                default:
                    if (
                        !(
                            (e > 8 && e < 14) ||
                            (e >= 5760 && ve.test(String.fromCharCode(e)))
                        )
                    )
                        break e;
                    ++this.pos;
            }
        }
    }),
    (Ot.finishToken = function (e, t) {
        (this.end = this.pos),
            this.options.locations && (this.endLoc = this.curPosition());
        var i = this.type;
        (this.type = e), (this.value = t), this.updateContext(i);
    }),
    (Ot.readToken_dot = function () {
        var e = this.input.charCodeAt(this.pos + 1);
        if (e >= 48 && e <= 57) return this.readNumber(!0);
        var t = this.input.charCodeAt(this.pos + 2);
        return this.options.ecmaVersion >= 6 && 46 === e && 46 === t
            ? ((this.pos += 3), this.finishToken(Fe.ellipsis))
            : (++this.pos, this.finishToken(Fe.dot));
    }),
    (Ot.readToken_slash = function () {
        var e = this.input.charCodeAt(this.pos + 1);
        return this.exprAllowed
            ? (++this.pos, this.readRegexp())
            : 61 === e
            ? this.finishOp(Fe.assign, 2)
            : this.finishOp(Fe.slash, 1);
    }),
    (Ot.readToken_mult_modulo_exp = function (e) {
        var t = this.input.charCodeAt(this.pos + 1),
            i = 1,
            s = 42 === e ? Fe.star : Fe.modulo;
        return (
            this.options.ecmaVersion >= 7 &&
                42 === e &&
                42 === t &&
                (++i,
                (s = Fe.starstar),
                (t = this.input.charCodeAt(this.pos + 2))),
            61 === t ? this.finishOp(Fe.assign, i + 1) : this.finishOp(s, i)
        );
    }),
    (Ot.readToken_pipe_amp = function (e) {
        var t = this.input.charCodeAt(this.pos + 1);
        if (t === e) {
            if (this.options.ecmaVersion >= 12)
                if (61 === this.input.charCodeAt(this.pos + 2))
                    return this.finishOp(Fe.assign, 3);
            return this.finishOp(124 === e ? Fe.logicalOR : Fe.logicalAND, 2);
        }
        return 61 === t
            ? this.finishOp(Fe.assign, 2)
            : this.finishOp(124 === e ? Fe.bitwiseOR : Fe.bitwiseAND, 1);
    }),
    (Ot.readToken_caret = function () {
        return 61 === this.input.charCodeAt(this.pos + 1)
            ? this.finishOp(Fe.assign, 2)
            : this.finishOp(Fe.bitwiseXOR, 1);
    }),
    (Ot.readToken_plus_min = function (e) {
        var t = this.input.charCodeAt(this.pos + 1);
        return t === e
            ? 45 !== t ||
              this.inModule ||
              62 !== this.input.charCodeAt(this.pos + 2) ||
              (0 !== this.lastTokEnd &&
                  !ge.test(this.input.slice(this.lastTokEnd, this.pos)))
                ? this.finishOp(Fe.incDec, 2)
                : (this.skipLineComment(3), this.skipSpace(), this.nextToken())
            : 61 === t
            ? this.finishOp(Fe.assign, 2)
            : this.finishOp(Fe.plusMin, 1);
    }),
    (Ot.readToken_lt_gt = function (e) {
        var t = this.input.charCodeAt(this.pos + 1),
            i = 1;
        return t === e
            ? ((i =
                  62 === e && 62 === this.input.charCodeAt(this.pos + 2)
                      ? 3
                      : 2),
              61 === this.input.charCodeAt(this.pos + i)
                  ? this.finishOp(Fe.assign, i + 1)
                  : this.finishOp(Fe.bitShift, i))
            : 33 !== t ||
              60 !== e ||
              this.inModule ||
              45 !== this.input.charCodeAt(this.pos + 2) ||
              45 !== this.input.charCodeAt(this.pos + 3)
            ? (61 === t && (i = 2), this.finishOp(Fe.relational, i))
            : (this.skipLineComment(4), this.skipSpace(), this.nextToken());
    }),
    (Ot.readToken_eq_excl = function (e) {
        var t = this.input.charCodeAt(this.pos + 1);
        return 61 === t
            ? this.finishOp(
                  Fe.equality,
                  61 === this.input.charCodeAt(this.pos + 2) ? 3 : 2
              )
            : 61 === e && 62 === t && this.options.ecmaVersion >= 6
            ? ((this.pos += 2), this.finishToken(Fe.arrow))
            : this.finishOp(61 === e ? Fe.eq : Fe.prefix, 1);
    }),
    (Ot.readToken_question = function () {
        var e = this.options.ecmaVersion;
        if (e >= 11) {
            var t = this.input.charCodeAt(this.pos + 1);
            if (46 === t) {
                var i = this.input.charCodeAt(this.pos + 2);
                if (i < 48 || i > 57) return this.finishOp(Fe.questionDot, 2);
            }
            if (63 === t) {
                if (e >= 12)
                    if (61 === this.input.charCodeAt(this.pos + 2))
                        return this.finishOp(Fe.assign, 3);
                return this.finishOp(Fe.coalesce, 2);
            }
        }
        return this.finishOp(Fe.question, 1);
    }),
    (Ot.readToken_numberSign = function () {
        var e = 35;
        if (
            this.options.ecmaVersion >= 13 &&
            (++this.pos, le((e = this.fullCharCodeAtPos()), !0) || 92 === e)
        )
            return this.finishToken(Fe.privateId, this.readWord1());
        this.raise(this.pos, "Unexpected character '" + Te(e) + "'");
    }),
    (Ot.getTokenFromCode = function (e) {
        switch (e) {
            case 46:
                return this.readToken_dot();
            case 40:
                return ++this.pos, this.finishToken(Fe.parenL);
            case 41:
                return ++this.pos, this.finishToken(Fe.parenR);
            case 59:
                return ++this.pos, this.finishToken(Fe.semi);
            case 44:
                return ++this.pos, this.finishToken(Fe.comma);
            case 91:
                return ++this.pos, this.finishToken(Fe.bracketL);
            case 93:
                return ++this.pos, this.finishToken(Fe.bracketR);
            case 123:
                return ++this.pos, this.finishToken(Fe.braceL);
            case 125:
                return ++this.pos, this.finishToken(Fe.braceR);
            case 58:
                return ++this.pos, this.finishToken(Fe.colon);
            case 96:
                if (this.options.ecmaVersion < 6) break;
                return ++this.pos, this.finishToken(Fe.backQuote);
            case 48:
                var t = this.input.charCodeAt(this.pos + 1);
                if (120 === t || 88 === t) return this.readRadixNumber(16);
                if (this.options.ecmaVersion >= 6) {
                    if (111 === t || 79 === t) return this.readRadixNumber(8);
                    if (98 === t || 66 === t) return this.readRadixNumber(2);
                }
            case 49:
            case 50:
            case 51:
            case 52:
            case 53:
            case 54:
            case 55:
            case 56:
            case 57:
                return this.readNumber(!1);
            case 34:
            case 39:
                return this.readString(e);
            case 47:
                return this.readToken_slash();
            case 37:
            case 42:
                return this.readToken_mult_modulo_exp(e);
            case 124:
            case 38:
                return this.readToken_pipe_amp(e);
            case 94:
                return this.readToken_caret();
            case 43:
            case 45:
                return this.readToken_plus_min(e);
            case 60:
            case 62:
                return this.readToken_lt_gt(e);
            case 61:
            case 33:
                return this.readToken_eq_excl(e);
            case 63:
                return this.readToken_question();
            case 126:
                return this.finishOp(Fe.prefix, 1);
            case 35:
                return this.readToken_numberSign();
        }
        this.raise(this.pos, "Unexpected character '" + Te(e) + "'");
    }),
    (Ot.finishOp = function (e, t) {
        var i = this.input.slice(this.pos, this.pos + t);
        return (this.pos += t), this.finishToken(e, i);
    }),
    (Ot.readRegexp = function () {
        for (var e, t, i = this.pos; ; ) {
            this.pos >= this.input.length &&
                this.raise(i, "Unterminated regular expression");
            var s = this.input.charAt(this.pos);
            if (
                (ge.test(s) && this.raise(i, "Unterminated regular expression"),
                e)
            )
                e = !1;
            else {
                if ("[" === s) t = !0;
                else if ("]" === s && t) t = !1;
                else if ("/" === s && !t) break;
                e = "\\" === s;
            }
            ++this.pos;
        }
        var u = this.input.slice(i, this.pos);
        ++this.pos;
        var r = this.pos,
            n = this.readWord1();
        this.containsEsc && this.unexpected(r);
        var a = this.regexpState || (this.regexpState = new _t(this));
        a.reset(i, u, n),
            this.validateRegExpFlags(a),
            this.validateRegExpPattern(a);
        var o = null;
        try {
            o = new RegExp(u, n);
        } catch (e) {}
        return this.finishToken(Fe.regexp, { pattern: u, flags: n, value: o });
    }),
    (Ot.readInt = function (e, t, i) {
        for (
            var s = this.options.ecmaVersion >= 12 && void 0 === t,
                u = i && 48 === this.input.charCodeAt(this.pos),
                r = this.pos,
                n = 0,
                a = 0,
                o = 0,
                h = null == t ? 1 / 0 : t;
            o < h;
            ++o, ++this.pos
        ) {
            var p = this.input.charCodeAt(this.pos),
                c = void 0;
            if (s && 95 === p)
                u &&
                    this.raiseRecoverable(
                        this.pos,
                        "Numeric separator is not allowed in legacy octal numeric literals"
                    ),
                    95 === a &&
                        this.raiseRecoverable(
                            this.pos,
                            "Numeric separator must be exactly one underscore"
                        ),
                    0 === o &&
                        this.raiseRecoverable(
                            this.pos,
                            "Numeric separator is not allowed at the first of digits"
                        ),
                    (a = p);
            else {
                if (
                    (c =
                        p >= 97
                            ? p - 97 + 10
                            : p >= 65
                            ? p - 65 + 10
                            : p >= 48 && p <= 57
                            ? p - 48
                            : 1 / 0) >= e
                )
                    break;
                (a = p), (n = n * e + c);
            }
        }
        return (
            s &&
                95 === a &&
                this.raiseRecoverable(
                    this.pos - 1,
                    "Numeric separator is not allowed at the last of digits"
                ),
            this.pos === r || (null != t && this.pos - r !== t) ? null : n
        );
    }),
    (Ot.readRadixNumber = function (e) {
        var t = this.pos;
        this.pos += 2;
        var i = this.readInt(e);
        return (
            null == i &&
                this.raise(this.start + 2, "Expected number in radix " + e),
            this.options.ecmaVersion >= 11 &&
            110 === this.input.charCodeAt(this.pos)
                ? ((i = qt(this.input.slice(t, this.pos))), ++this.pos)
                : le(this.fullCharCodeAtPos()) &&
                  this.raise(this.pos, "Identifier directly after number"),
            this.finishToken(Fe.num, i)
        );
    }),
    (Ot.readNumber = function (e) {
        var t = this.pos;
        e ||
            null !== this.readInt(10, void 0, !0) ||
            this.raise(t, "Invalid number");
        var i = this.pos - t >= 2 && 48 === this.input.charCodeAt(t);
        i && this.strict && this.raise(t, "Invalid number");
        var s = this.input.charCodeAt(this.pos);
        if (!i && !e && this.options.ecmaVersion >= 11 && 110 === s) {
            var u = qt(this.input.slice(t, this.pos));
            return (
                ++this.pos,
                le(this.fullCharCodeAtPos()) &&
                    this.raise(this.pos, "Identifier directly after number"),
                this.finishToken(Fe.num, u)
            );
        }
        i && /[89]/.test(this.input.slice(t, this.pos)) && (i = !1),
            46 !== s ||
                i ||
                (++this.pos,
                this.readInt(10),
                (s = this.input.charCodeAt(this.pos))),
            (69 !== s && 101 !== s) ||
                i ||
                ((43 !== (s = this.input.charCodeAt(++this.pos)) && 45 !== s) ||
                    ++this.pos,
                null === this.readInt(10) && this.raise(t, "Invalid number")),
            le(this.fullCharCodeAtPos()) &&
                this.raise(this.pos, "Identifier directly after number");
        var r,
            n =
                ((r = this.input.slice(t, this.pos)),
                i ? parseInt(r, 8) : parseFloat(r.replace(/_/g, "")));
        return this.finishToken(Fe.num, n);
    }),
    (Ot.readCodePoint = function () {
        var e;
        if (123 === this.input.charCodeAt(this.pos)) {
            this.options.ecmaVersion < 6 && this.unexpected();
            var t = ++this.pos;
            (e = this.readHexChar(
                this.input.indexOf("}", this.pos) - this.pos
            )),
                ++this.pos,
                e > 1114111 &&
                    this.invalidStringToken(t, "Code point out of bounds");
        } else e = this.readHexChar(4);
        return e;
    }),
    (Ot.readString = function (e) {
        for (var t = "", i = ++this.pos; ; ) {
            this.pos >= this.input.length &&
                this.raise(this.start, "Unterminated string constant");
            var s = this.input.charCodeAt(this.pos);
            if (s === e) break;
            92 === s
                ? ((t += this.input.slice(i, this.pos)),
                  (t += this.readEscapedChar(!1)),
                  (i = this.pos))
                : 8232 === s || 8233 === s
                ? (this.options.ecmaVersion < 10 &&
                      this.raise(this.start, "Unterminated string constant"),
                  ++this.pos,
                  this.options.locations &&
                      (this.curLine++, (this.lineStart = this.pos)))
                : (Be(s) &&
                      this.raise(this.start, "Unterminated string constant"),
                  ++this.pos);
        }
        return (
            (t += this.input.slice(i, this.pos++)),
            this.finishToken(Fe.string, t)
        );
    });
var Ut = {};
(Ot.tryReadTemplateToken = function () {
    this.inTemplateElement = !0;
    try {
        this.readTmplToken();
    } catch (e) {
        if (e !== Ut) throw e;
        this.readInvalidTemplateToken();
    }
    this.inTemplateElement = !1;
}),
    (Ot.invalidStringToken = function (e, t) {
        if (this.inTemplateElement && this.options.ecmaVersion >= 9) throw Ut;
        this.raise(e, t);
    }),
    (Ot.readTmplToken = function () {
        for (var e = "", t = this.pos; ; ) {
            this.pos >= this.input.length &&
                this.raise(this.start, "Unterminated template");
            var i = this.input.charCodeAt(this.pos);
            if (
                96 === i ||
                (36 === i && 123 === this.input.charCodeAt(this.pos + 1))
            )
                return this.pos !== this.start ||
                    (this.type !== Fe.template &&
                        this.type !== Fe.invalidTemplate)
                    ? ((e += this.input.slice(t, this.pos)),
                      this.finishToken(Fe.template, e))
                    : 36 === i
                    ? ((this.pos += 2), this.finishToken(Fe.dollarBraceL))
                    : (++this.pos, this.finishToken(Fe.backQuote));
            if (92 === i)
                (e += this.input.slice(t, this.pos)),
                    (e += this.readEscapedChar(!0)),
                    (t = this.pos);
            else if (Be(i)) {
                switch (((e += this.input.slice(t, this.pos)), ++this.pos, i)) {
                    case 13:
                        10 === this.input.charCodeAt(this.pos) && ++this.pos;
                    case 10:
                        e += "\n";
                        break;
                    default:
                        e += String.fromCharCode(i);
                }
                this.options.locations &&
                    (++this.curLine, (this.lineStart = this.pos)),
                    (t = this.pos);
            } else ++this.pos;
        }
    }),
    (Ot.readInvalidTemplateToken = function () {
        for (; this.pos < this.input.length; this.pos++)
            switch (this.input[this.pos]) {
                case "\\":
                    ++this.pos;
                    break;
                case "$":
                    if ("{" !== this.input[this.pos + 1]) break;
                case "`":
                    return this.finishToken(
                        Fe.invalidTemplate,
                        this.input.slice(this.start, this.pos)
                    );
            }
        this.raise(this.start, "Unterminated template");
    }),
    (Ot.readEscapedChar = function (e) {
        var t = this.input.charCodeAt(++this.pos);
        switch ((++this.pos, t)) {
            case 110:
                return "\n";
            case 114:
                return "\r";
            case 120:
                return String.fromCharCode(this.readHexChar(2));
            case 117:
                return Te(this.readCodePoint());
            case 116:
                return "\t";
            case 98:
                return "\b";
            case 118:
                return "\v";
            case 102:
                return "\f";
            case 13:
                10 === this.input.charCodeAt(this.pos) && ++this.pos;
            case 10:
                return (
                    this.options.locations &&
                        ((this.lineStart = this.pos), ++this.curLine),
                    ""
                );
            case 56:
            case 57:
                if (
                    (this.strict &&
                        this.invalidStringToken(
                            this.pos - 1,
                            "Invalid escape sequence"
                        ),
                    e)
                ) {
                    var i = this.pos - 1;
                    return (
                        this.invalidStringToken(
                            i,
                            "Invalid escape sequence in template string"
                        ),
                        null
                    );
                }
            default:
                if (t >= 48 && t <= 55) {
                    var s = this.input
                            .substr(this.pos - 1, 3)
                            .match(/^[0-7]+/)[0],
                        u = parseInt(s, 8);
                    return (
                        u > 255 && ((s = s.slice(0, -1)), (u = parseInt(s, 8))),
                        (this.pos += s.length - 1),
                        (t = this.input.charCodeAt(this.pos)),
                        ("0" === s && 56 !== t && 57 !== t) ||
                            (!this.strict && !e) ||
                            this.invalidStringToken(
                                this.pos - 1 - s.length,
                                e
                                    ? "Octal literal in template string"
                                    : "Octal literal in strict mode"
                            ),
                        String.fromCharCode(u)
                    );
                }
                return Be(t) ? "" : String.fromCharCode(t);
        }
    }),
    (Ot.readHexChar = function (e) {
        var t = this.pos,
            i = this.readInt(16, e);
        return (
            null === i &&
                this.invalidStringToken(t, "Bad character escape sequence"),
            i
        );
    }),
    (Ot.readWord1 = function () {
        this.containsEsc = !1;
        for (
            var e = "", t = !0, i = this.pos, s = this.options.ecmaVersion >= 6;
            this.pos < this.input.length;

        ) {
            var u = this.fullCharCodeAtPos();
            if (De(u, s)) this.pos += u <= 65535 ? 1 : 2;
            else {
                if (92 !== u) break;
                (this.containsEsc = !0), (e += this.input.slice(i, this.pos));
                var r = this.pos;
                117 !== this.input.charCodeAt(++this.pos) &&
                    this.invalidStringToken(
                        this.pos,
                        "Expecting Unicode escape sequence \\uXXXX"
                    ),
                    ++this.pos;
                var n = this.readCodePoint();
                (t ? le : De)(n, s) ||
                    this.invalidStringToken(r, "Invalid Unicode escape"),
                    (e += Te(n)),
                    (i = this.pos);
            }
            t = !1;
        }
        return e + this.input.slice(i, this.pos);
    }),
    (Ot.readWord = function () {
        var e = this.readWord1(),
            t = Fe.name;
        return this.keywords.test(e) && (t = me[e]), this.finishToken(t, e);
    });
function Wt(e, t) {
    return We.parse(e, t);
}
We.acorn = {
    Parser: We,
    version: "8.7.1",
    defaultOptions: Me,
    Position: Le,
    SourceLocation: Ve,
    getLineInfo: Re,
    Node: ct,
    TokenType: de,
    tokTypes: Fe,
    keywordTypes: me,
    TokContext: it,
    tokContexts: st,
    isIdentifierChar: De,
    isIdentifierStart: le,
    Token: Mt,
    isNewLine: Be,
    lineBreak: ge,
    lineBreakG: xe,
    nonASCIIwhitespace: ve,
};
export { We as Parser, te as generate, Wt as parse };
//# sourceMappingURL=index.js.map
