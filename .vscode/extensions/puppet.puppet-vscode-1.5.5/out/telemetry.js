"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reporter = void 0;
/* eslint-disable @typescript-eslint/no-use-before-define */
const extension_telemetry_1 = require("@vscode/extension-telemetry");
const vscode = require("vscode");
exports.reporter = getTelemetryReporter();
function getTelemetryReporter() {
    const pkg = getPackageInfo();
    const reporter = new extension_telemetry_1.default(pkg.aiKey);
    return reporter;
}
function getPackageInfo() {
    const pkg = vscode.extensions.getExtension('puppet.puppet-vscode');
    return {
        aiKey: pkg.packageJSON.aiKey,
    };
}
//# sourceMappingURL=telemetry.js.map