"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cp = require("child_process");
const vscode = require("vscode");
class PuppetParserProvider {
    constructor() {
        this.regex = new RegExp("(\\[\\d{1,};\\d{1,}m)(Error|Warning):\\s(.*)at(.*):(\\d{1,})");
    }
    activate(subscriptions) {
        this.diagnosticCollection = vscode.languages.createDiagnosticCollection("PuppetParser");
        vscode.workspace.onDidOpenTextDocument(this.doPuppetParser, this, subscriptions);
        vscode.workspace.onDidCloseTextDocument((textDocument) => {
            this.diagnosticCollection.delete(textDocument.uri);
        }, null, subscriptions);
        vscode.workspace.onDidSaveTextDocument(this.doPuppetParser, this);
        vscode.workspace.textDocuments.forEach(this.doPuppetParser, this);
    }
    dispose() {
        this.diagnosticCollection.clear();
        this.diagnosticCollection.dispose();
    }
    doPuppetParser(textDocument) {
        if (textDocument.languageId !== "puppet") {
            return;
        }
        let decoded = "";
        let diagnostics = [];
        let options = vscode.workspace.rootPath ? { cwd: vscode.workspace.rootPath, shell: true } : undefined;
        let command = "";
        let subcommand;
        if (textDocument.fileName.endsWith('.epp')) {
            subcommand = "epp";
        }
        else {
            subcommand = "parser";
        }
        let commandOptions = ["parser", subcommand, "\"" + textDocument.fileName + "\""];
        if (process.platform === "win32") {
            command = "cmd.exe";
            commandOptions = ["/c", "puppet"].concat(commandOptions);
        }
        else {
            command = "puppet";
        }
        let childProcess = cp.spawn(command, commandOptions, options);
        if (childProcess.pid) {
            childProcess.stderr.on("data", (data) => {
                decoded += data;
            });
            // puppet Parser Validate uses Standard Error
            childProcess.stderr.on("end", () => {
                decoded.split("\n").forEach(item => {
                    if (item) {
                        let matches = this.regex.exec(item);
                        let isWarning = matches[2].toLowerCase() === "warning";
                        let severity = isWarning ? vscode.DiagnosticSeverity.Warning : vscode.DiagnosticSeverity.Error;
                        let message = "puppet parser validate: " + matches[3];
                        let range = new vscode.Range(Number(matches[5]) - 1, 0, Number(matches[5]), 300);
                        let diagnostic = new vscode.Diagnostic(range, message, severity);
                        diagnostics.push(diagnostic);
                    }
                });
                this.diagnosticCollection.set(textDocument.uri, diagnostics);
            });
        }
    }
}
exports.default = PuppetParserProvider;
//# sourceMappingURL=puppetParserProvider.js.map