import { defineConfig, loadEnv } from "vite"
import vue from "@vitejs/plugin-vue"
import vueDevTools from "vite-plugin-vue-devtools"
import { fileURLToPath, URL } from "node:url"

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "")

  return {
    plugins: [
      vue(),
      vueDevTools({
        launchEditor: env.VITE_EDITOR || "webstorm",
      }),
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        "#": fileURLToPath(new URL("./types", import.meta.url)),
        "~": fileURLToPath(new URL("./tests", import.meta.url)),
        "&": fileURLToPath(new URL("./constants", import.meta.url)),
      },
    },
  }
})
