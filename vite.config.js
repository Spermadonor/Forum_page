import { defineConfig } from 'vite';
import pugPlugin from "vite-plugin-pug"

const options = { pretty: true }

export default defineConfig({
  base: '/Forum_page/',

  plugins: [pugPlugin(options)],
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
        messages: "./messages.html"
      }
    }
  }
});
