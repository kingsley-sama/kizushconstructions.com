"use strict";
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
exports.PuppetfileProvider = void 0;
const path = require("path");
const vscode_1 = require("vscode");
const vscode_languageclient_1 = require("vscode-languageclient");
const telemetry_1 = require("../telemetry");
class PuppetfileDependencyItem extends vscode_1.TreeItem {
    constructor(name, version, startLine, endLine, collapsibleState, children) {
        super(name, collapsibleState);
        this.name = name;
        this.version = version;
        this.startLine = startLine;
        this.endLine = endLine;
        this.collapsibleState = collapsibleState;
        this.children = children;
        this.tooltip = `${name}-${version}`;
        this.description = version;
        if (children) {
            this.iconPath = vscode_1.ThemeIcon.Folder;
        }
        else {
            this.iconPath = new vscode_1.ThemeIcon('package');
        }
    }
}
class PuppetfileDependency {
    constructor(name, version, startLine, endLine) {
        this.name = name;
        this.version = version;
        this.startLine = startLine;
        this.endLine = endLine;
        //
    }
}
class PuppetfileProvider {
    constructor(handler) {
        this.handler = handler;
        this._onDidChangeTreeData = new vscode_1.EventEmitter();
        this.onDidChangeTreeData = this._onDidChangeTreeData.event;
        vscode_1.commands.registerCommand('puppet.refreshPuppetfileDependencies', () => {
            telemetry_1.reporter.sendTelemetryEvent('puppet.refreshPuppetfileDependencies');
            this.refresh();
        });
        vscode_1.commands.registerCommand('puppet.goToPuppetfileDefinition', (puppetModule) => {
            telemetry_1.reporter.sendTelemetryEvent('puppet.goToPuppetfileDefinition');
            const workspaceFolder = vscode_1.workspace.workspaceFolders[0].uri;
            const puppetfile = path.join(workspaceFolder.fsPath, 'Puppetfile');
            vscode_1.workspace.openTextDocument(puppetfile).then((doc) => {
                const line = doc.lineAt(+puppetModule.startLine);
                vscode_1.window.showTextDocument(doc, {
                    preserveFocus: true,
                    preview: false,
                    selection: line.range,
                    viewColumn: vscode_1.ViewColumn.Active,
                });
            });
        });
    }
    refresh() {
        this._onDidChangeTreeData.fire(null);
    }
    getTreeItem(element) {
        return element;
    }
    getChildren(element) {
        if (element) {
            return Promise.resolve(element.children.map((e) => e[1]));
        }
        else {
            return this.getPuppetfileDependenciesFromLanguageServer();
        }
    }
    getPuppetfileDependenciesFromLanguageServer() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.handler.languageClient.start();
            const fileUri = vscode_1.Uri.file(path.join(vscode_1.workspace.workspaceFolders[0].uri.fsPath, 'Puppetfile'));
            /*
             We use openTextDocument here because we need to parse whether or not a user has opened a
             Puppetfile or not. This triggers onDidOpen notification which sends the content of the Puppetfile
             to the Puppet Language Server which caches the content for puppetfile-resolver to parse
            */
            return vscode_1.workspace.openTextDocument(fileUri).then(() => __awaiter(this, void 0, void 0, function* () {
                const results = yield this.handler.languageClient.sendRequest(new vscode_languageclient_1.RequestType('puppetfile/getDependencies'), {
                    uri: fileUri.toString(),
                });
                telemetry_1.reporter.sendTelemetryEvent('puppetfileView');
                if (results.error) {
                    vscode_1.window.showErrorMessage(`${results.error}`);
                }
                const list = results.dependencies.map((d) => {
                    return new PuppetfileDependencyItem(d.name, d.version, d.startLine, d.endLine, vscode_1.TreeItemCollapsibleState.None);
                });
                return list;
            }));
        });
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getParent(element) {
        throw new Error('Method not implemented.');
    }
}
exports.PuppetfileProvider = PuppetfileProvider;
//# sourceMappingURL=puppetfile.js.map