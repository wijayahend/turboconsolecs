const vscode = require('vscode');

function activate(context) {
	console.log('Congratulations, your extension "turboconsolecs" is now active!');

	const disposable = vscode.commands.registerCommand('turboconsolecs.logSelectedCode', function () {
		const editor = vscode.window.activeTextEditor;
		if (editor) {
			const selection = editor.selection;
			let selectedText = editor.document.getText(selection);

			// Extract the last word or variable name after the last space
			const variableName = selectedText.split(' ').pop().replace(/[^a-zA-Z0-9_$]/g, "");

			editor.edit(editBuilder => {
				const position = selection.end;
				const document = editor.document;

				// Handle the case where the selection is at the last line of the document
				let nextLineNumber = position.line + 1;
				if (nextLineNumber >= document.lineCount) {
					// If we're at the end of the document, insert the console.log at the end of the last line
					const lastLine = document.lineAt(document.lineCount - 1);
					editBuilder.insert(
						new vscode.Position(document.lineCount, 0),
						`\nconsole.log("🚀 ~ ${variableName}:", ${variableName});`
					);
				} else {
					const nextLine = document.lineAt(nextLineNumber);
					const nextLineText = nextLine.text.trim();

					if (nextLineText === '{') {
						// Insert the console.log statement inside the block, properly indented
						const indent = nextLine.firstNonWhitespaceCharacterIndex + 4; // Increase indent by 4 spaces
						editBuilder.insert(
							new vscode.Position(nextLineNumber + 1, 0),
							`${' '.repeat(indent)}console.log("🚀 ~ ${variableName}:", ${variableName});\n`
						);
					} else {
						// Insert it below the selected text if there's no brace
						editBuilder.insert(
							new vscode.Position(nextLineNumber, 0),
							`console.log("🚀 ~ ${variableName}:", ${variableName});\n`
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
