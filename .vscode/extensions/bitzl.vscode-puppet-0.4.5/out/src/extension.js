"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const puppetLintProvider_1 = require("./features/puppetLintProvider");
const puppetParserProvider_1 = require("./features/puppetParserProvider");
function activate(context) {
    let linter = new puppetLintProvider_1.default();
    linter.activate(context.subscriptions);
    let parser = new puppetParserProvider_1.default();
    parser.activate(context.subscriptions);
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map