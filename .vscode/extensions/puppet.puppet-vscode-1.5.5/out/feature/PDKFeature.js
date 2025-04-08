'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PDKFeature = void 0;
const fs = require("fs");
const path = require("path");
const vscode = require("vscode");
const messages_1 = require("../messages");
const telemetry_1 = require("../telemetry");
class PDKFeature {
    constructor(context, logger) {
        context.subscriptions.push(vscode.commands.registerCommand(messages_1.PDKCommandStrings.pdkNewModuleCommandId, () => {
            this.pdkNewModuleCommand();
        }));
        logger.debug('Registered ' + messages_1.PDKCommandStrings.pdkNewModuleCommandId + ' command');
        // commands that require no user input
        [
            { id: 'extension.pdkValidate', request: 'pdk validate', type: 'validate' },
            { id: 'extension.pdkTestUnit', request: 'pdk test unit', type: 'test' },
        ].forEach((command) => {
            context.subscriptions.push(vscode.commands.registerCommand(command.id, () => {
                this.getTerminal().sendText(command.request);
                this.getTerminal().show();
                if (telemetry_1.reporter) {
                    telemetry_1.reporter.sendTelemetryEvent(command.id);
                }
            }));
            logger.debug(`Registered ${command.id} command`);
        });
        // commands that require user input
        [
            { id: 'extension.pdkNewClass', request: 'pdk new class', type: 'Puppet class' },
            { id: 'extension.pdkNewTask', request: 'pdk new task', type: 'Bolt task' },
            { id: 'extension.pdkNewDefinedType', request: 'pdk new defined_type', type: 'Puppet defined_type' },
            { id: 'extension.pdkNewFact', request: 'pdk new fact', type: 'Puppet Fact' },
            { id: 'extension.pdkNewFunction', request: 'pdk new function', type: 'Puppet Function' },
        ].forEach((command) => {
            context.subscriptions.push(vscode.commands.registerCommand(command.id, () => __awaiter(this, void 0, void 0, function* () {
                const name = yield vscode.window.showInputBox({
                    prompt: `Enter a name for the new ${command.type}`,
                });
                if (name === undefined) {
                    vscode.window.showWarningMessage('No module name specifed. Exiting.');
                    return;
                }
                const request = `${command.request} ${name}`;
                this.getTerminal().sendText(request);
                this.getTerminal().show();
                if (telemetry_1.reporter) {
                    telemetry_1.reporter.sendTelemetryEvent(command.id);
                }
            })));
            logger.debug(`Registered ${command.id} command`);
        });
    }
    getTerminal() {
        const existingTerm = vscode.window.terminals.find((tm) => tm.name === 'Puppet PDK');
        return existingTerm === undefined ? vscode.window.createTerminal('Puppet PDK') : existingTerm;
    }
    dispose() {
        this.getTerminal().dispose();
    }
    pdkNewModuleCommand() {
        return __awaiter(this, void 0, void 0, function* () {
            const name = yield vscode.window.showInputBox({
                prompt: 'Enter a name for the new Puppet module',
            });
            if (!name) {
                vscode.window.showWarningMessage('No module name specifed. Exiting.');
                return;
            }
            const directory = yield vscode.window.showOpenDialog({
                canSelectMany: false,
                canSelectFiles: false,
                canSelectFolders: true,
                openLabel: 'Choose the path for the new Puppet module',
            });
            if (!directory) {
                vscode.window.showWarningMessage('No directory specifed. Exiting.');
                return;
            }
            const p = path.join(directory[0].fsPath, name);
            this.getTerminal().sendText(`pdk new module --skip-interview ${name} ${p}`);
            this.getTerminal().show();
            yield new Promise((resolve) => {
                let count = 0;
                const handle = setInterval(() => {
                    count++;
                    if (count >= 30) {
                        clearInterval(handle);
                        resolve();
                        return;
                    }
                    if (fs.existsSync(p)) {
                        resolve();
                        return;
                    }
                }, 1000);
            });
            const uri = vscode.Uri.file(p);
            yield vscode.commands.executeCommand('vscode.openFolder', uri);
            if (telemetry_1.reporter) {
                telemetry_1.reporter.sendTelemetryEvent(messages_1.PDKCommandStrings.pdkNewModuleCommandId);
            }
        });
    }
}
exports.PDKFeature = PDKFeature;
//# sourceMappingURL=PDKFeature.js.map