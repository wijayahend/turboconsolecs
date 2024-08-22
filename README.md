# TurboConsoleCS

TurboConsoleCS is a Visual Studio Code extension that helps you quickly insert a `Console.WriteLine` statement below the selected code. This is useful for debugging and logging variables and code snippets during development.

## Features

- **Insert `Console.WriteLine` Statement**: Quickly add a `Console.WriteLine` statement below the selected code.
- **Customizable Keybinding**: Easily change the keybinding to suit your preferences.
- **Handles Various Scenarios**: Correctly handles insertion even when the selected text is at the end of the document or inside code blocks.

## Installation

1. Open Visual Studio Code.
2. Go to the Extensions view by pressing `Ctrl+Shift+X`.
3. Search for `TurboConsoleCS`.
4. Click `Install` to add the extension to your VSCode environment.

## Usage

1. **Select** the code or text you want to log.
2. **Press** the configured keybinding (`Ctrl+Alt+M` by default) to insert the `Console.WriteLine` statement below the selected code.

### Keybinding

The default keybinding for the `TurboConsoleCS: Log Selected Code` command is `Ctrl+Alt+M`. You can customize this keybinding to fit your preferences:

1. Open Keyboard Shortcuts by pressing `Ctrl+K Ctrl+S`.
2. Search for `TurboConsoleCS: Log Selected Code`.
3. Click the pencil icon next to the command and enter your desired keybinding.

Alternatively, edit the `keybindings.json` file directly:

```json
[
    {
        "key": "ctrl+alt+m",
        "command": "turboconsolecs.logSelectedCode",
        "when": "editorTextFocus"
    }
]
