import type { TuiPlugin, TuiPluginModule } from "@opencode-ai/plugin/tui"
import { fileURLToPath } from "node:url"

const pluginID = "oc-lucent-tokyonight"
const defaultThemeName = "lucent-tokyonight"
const bundledThemePath = fileURLToPath(new URL("./lucent-tokyonight.json", import.meta.url))

type Options = {
  enabled?: boolean
  autoApply?: boolean
  theme?: string
}

const tui: TuiPlugin = async (api, options) => {
  const config = (options ?? {}) as Options
  if (config.enabled === false) return

  await api.theme.install(bundledThemePath)

  const themeName = config.theme?.trim() || defaultThemeName
  const shouldAutoApply = config.autoApply ?? true

  if (shouldAutoApply && api.theme.selected !== themeName) {
    api.theme.set(themeName)
  }
}

export default {
  id: pluginID,
  tui,
} satisfies TuiPluginModule & { id: string }
