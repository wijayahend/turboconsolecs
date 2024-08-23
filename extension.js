const vscode = require('vscode');

function generateUniqueId() {
    const capitalLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26)); // A-Z
    const randomNumber = Math.floor(Math.random() * 10000);
    return `${capitalLetter}_${randomNumber}`;
}

function activate(context) {
	console.log('Congratulations, your extension "turboconsolecs" is now active!');

	const disposable = vscode.commands.registerCommand('turboconsolecs.logSelectedCode', function () {
		const editor = vscode.window.activeTextEditor;
		if (editor) {
			const selection = editor.selection;
			let selectedText = editor.document.getText(selection).trim();

			// Escape any double quotes in the selected text
			selectedText = selectedText.replace(/"/g, '\\"');

			const includeLineNumber = vscode.workspace.getConfiguration('turboconsolecs').get('includeLineNumber', false);
			const position = selection.end;
			const document = editor.document;
			const randomNumber = Math.floor(Math.random() * 1000);

			editor.edit(editBuilder => {
				const nextLineNumber = position.line + 1;

				let logStatement = `Console.WriteLine($\"🚀 ~ (${generateUniqueId()}) \{${selectedText}}\");\n`;

				if (includeLineNumber) {
					const fileName = document.fileName.split('/').pop(); // Extract filename from path
					const lineNumber = position.line + 1; // Line number is 1-based
					logStatement = `Console.WriteLine($\"🚀 (${generateUniqueId()}) (${fileName}:${lineNumber}) ~ \{${selectedText}}\");\n`;
				}

				if (nextLineNumber >= document.lineCount) {
					editBuilder.insert(
						new vscode.Position(document.lineCount, 0),
						`\n${logStatement}`
					);
				} else {
					const nextLine = document.lineAt(nextLineNumber);
					const nextLineText = nextLine.text.trim();

					if (nextLineText === '{') {
						const indent = nextLine.firstNonWhitespaceCharacterIndex + 4; // Increase indent by 4 spaces
						editBuilder.insert(
							new vscode.Position(nextLineNumber + 1, 0),
							`${' '.repeat(indent)}${logStatement}\n`
						);
					} else {
						editBuilder.insert(
							new vscode.Position(nextLineNumber, 0),
							`\n${logStatement}`
						);
					}
				}
			});
		}
	});

	context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
};
