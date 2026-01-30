# Lucent Tokyo Night Theme for OpenCode

A translucent theme for [OpenCode](https://opencode.ai) based on the popular [Tokyo Night](https://tokyonight.org/) color scheme with transparent backgrounds for a modern, sleek appearance.

![Lucent Tokyo Night Theme Preview](preview.svg)

## Installation

1. Create the themes directory (if it doesn't exist):
   ```bash
   mkdir -p ~/.config/opencode/themes
   ```

2. Download the theme file:
   ```bash
   curl -o ~/.config/opencode/themes/lucent-tokyonight.json \
     https://raw.githubusercontent.com/YOUR_USERNAME/opencode-lucent-tokyonight-theme/main/.opencode/themes/lucent-tokyonight.json
   ```

3. Add to your `~/.config/opencode/opencode.json`:
   ```json
   {
     "theme": "lucent-tokyonight"
   }
   ```

4. Restart OpenCode.

## Features

- **Translucent Design**: Transparent backgrounds allow your desktop wallpaper to shine through
- **Tokyo Night Colors**: Uses the Tokyo Night color palette with transparent backgrounds
- **Both Modes**: Includes both dark and light mode variants

## Credits

- Color palette: [Tokyo Night](https://github.com/tokyo-night/tokyo-night-vscode-theme) created by [Enkia](https://github.com/enkia)
- Translucent design inspired by lucent-orng theme
- OpenCode theme structure inspired by [ajaxdude/opencode-ai-poimandres-theme](https://github.com/ajaxdude/opencode-ai-poimandres-theme)

## License

MIT License - see [LICENSE](LICENSE) file.
