"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PDKCommandStrings = exports.PuppetCommandStrings = exports.CompileNodeGraphRequest = exports.PuppetNodeGraphRequest = exports.PuppetFixDiagnosticErrorsRequest = exports.PuppetResourceRequest = exports.PuppetVersionRequest = void 0;
/* eslint-disable @typescript-eslint/no-namespace */
const node_1 = require("vscode-languageclient/node");
var PuppetVersionRequest;
(function (PuppetVersionRequest) {
    PuppetVersionRequest.type = new node_1.RequestType0('puppet/getVersion');
})(PuppetVersionRequest || (exports.PuppetVersionRequest = PuppetVersionRequest = {}));
var PuppetResourceRequest;
(function (PuppetResourceRequest) {
    PuppetResourceRequest.type = new node_1.RequestType('puppet/getResource');
})(PuppetResourceRequest || (exports.PuppetResourceRequest = PuppetResourceRequest = {}));
var PuppetFixDiagnosticErrorsRequest;
(function (PuppetFixDiagnosticErrorsRequest) {
    PuppetFixDiagnosticErrorsRequest.type = new node_1.RequestType('puppet/fixDiagnosticErrors');
})(PuppetFixDiagnosticErrorsRequest || (exports.PuppetFixDiagnosticErrorsRequest = PuppetFixDiagnosticErrorsRequest = {}));
var PuppetNodeGraphRequest;
(function (PuppetNodeGraphRequest) {
    PuppetNodeGraphRequest.type = new node_1.RequestType('puppet/compileNodeGraph');
})(PuppetNodeGraphRequest || (exports.PuppetNodeGraphRequest = PuppetNodeGraphRequest = {}));
var CompileNodeGraphRequest;
(function (CompileNodeGraphRequest) {
    CompileNodeGraphRequest.type = new node_1.RequestType('puppet/compileNodeGraph');
})(CompileNodeGraphRequest || (exports.CompileNodeGraphRequest = CompileNodeGraphRequest = {}));
class PuppetCommandStrings {
}
exports.PuppetCommandStrings = PuppetCommandStrings;
PuppetCommandStrings.puppetResourceCommandId = 'extension.puppetResource';
PuppetCommandStrings.puppetShowConnectionMenuCommandId = 'extension.puppetShowConnectionMenu';
PuppetCommandStrings.puppetShowConnectionLogsCommandId = 'extension.puppetShowConnectionLogs';
PuppetCommandStrings.puppetUpdateConfigurationCommandId = 'extension.puppetUpdateConfiguration';
class PDKCommandStrings {
}
exports.PDKCommandStrings = PDKCommandStrings;
PDKCommandStrings.pdkNewModuleCommandId = 'extension.pdkNewModule';
PDKCommandStrings.pdkNewClassCommandId = 'extension.pdkNewClass';
PDKCommandStrings.pdkNewTaskCommandId = 'extension.pdkNewTask';
PDKCommandStrings.pdkNewFactCommandId = 'extension.pdkNewFact';
PDKCommandStrings.pdkNewFunctionCommandId = 'extension.pdkNewFunction';
PDKCommandStrings.pdkNewDefinedTypeCommandId = 'extension.pdkNewDefinedType';
PDKCommandStrings.pdkValidateCommandId = 'extension.pdkValidate';
PDKCommandStrings.pdkTestUnitCommandId = 'extension.pdkTestUnit';
//# sourceMappingURL=messages.js.map