// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { VsiconsPanel } from './IconsProvider';
import { SidebarProvider } from './sidebarProvider';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	const sidebarProvider = new SidebarProvider(context.extensionUri);
	context.subscriptions.push(
	  vscode.window.registerWebviewViewProvider(
		"stanicon-sidebar",
		sidebarProvider
	  )
	);
	context.subscriptions.push(vscode.commands.registerCommand('study.Vsicons', (data) => {
	    vscode.window.showInformationMessage(data);
		VsiconsPanel.createOrShow(context.extensionUri);
	})
	);
	context.subscriptions.push(vscode.commands.registerCommand('study.selection', () => {
		
		const {activeTextEditor} = vscode.window;

		if(!activeTextEditor){
			
			vscode.window.showErrorMessage("no editor is opened");
			return;
		}

		const text = activeTextEditor.document.getText(activeTextEditor.selection);

		vscode.window.showInformationMessage("selection:"+text);
	})

	);
	context.subscriptions.push(vscode.commands.registerCommand('study.refresh', () => {
		VsiconsPanel.kill();
         vscode.commands.executeCommand('@command:workbench.action.reloadWindow');
		VsiconsPanel.createOrShow(context.extensionUri);
	})

	);
	context.subscriptions.push(vscode.commands.registerCommand('study.copyicon', async () => {
		const result = await vscode.window.showInformationMessage('copy the icon','svg','png');
		if(result ==="svg" || result==="png"){
			vscode.window.showInformationMessage("copied !");
		}else {
			console.log("user did not click any where");
		}
	})

	);
}

// this method is called when your extension is deactivated
export function deactivate() {}
