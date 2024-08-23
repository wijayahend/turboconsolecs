# TurboConsoleCS

TurboConsoleCS is a Visual Studio Code extension that helps you quickly insert a `Console.WriteLine` statement below the selected code. This is useful for debugging and logging variables and code snippets during development.

## Features

- **Insert `Console.WriteLine` Statement**: Quickly add a `Console.WriteLine` statement below the selected code.
- **Customizable Keybinding**: Easily change the keybinding to suit your preferences.
- **Handles Various Scenarios**: Correctly handles insertion even when the selected text is at the end of the document or inside code blocks.
- **Unique Random ID**: Includes a unique random ID in the `Console.WriteLine` statement for tracking purposes.
- **Optional Line Number and Filename**: Includes the filename and line number in the `Console.WriteLine` statement based on user preference.

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

[
    {
        "key": "ctrl+alt+m",
        "command": "turboconsolecs.logSelectedCode",
        "when": "editorTextFocus"
    }
]

### Configuration

You can configure the extension to include the filename and line number in the Console.WriteLine statement. To do this:

    Open Settings by pressing Ctrl+, or navigating to File > Preferences > Settings.
    Search for TurboConsoleCS.
    Find the setting TurboConsoleCS: Include Line Number and check the box to enable it.

When enabled, the Console.WriteLine statement will include the filename and line number in the format:
Console.WriteLine($"🚀 (filename.ext:lineNumber) ~ {selectedText}");

If disabled, the statement will use the format:

Console.WriteLine($"🚀 {uniqueId} ~ {selectedText}");

### Contact

For any questions, suggestions, or .NET development opportunities, feel free to reach out to me at hendrauswandy@gmail.com.