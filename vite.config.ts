import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";
import Layouts from "vite-plugin-vue-layouts";
import Components from "unplugin-vue-components/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      dts: "./src/components.d.ts",
      dirs: ["./src/components"],
      directoryAsNamespace: true,
    }),
    Layouts({
      defaultLayout: "default",
      layoutsDirs: "src/layouts",
    }),
    Pages({
      dirs: "./src/pages",
      routeStyle: "nuxt",
    }),
  ],
});
