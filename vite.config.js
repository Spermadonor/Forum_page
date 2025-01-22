import { defineConfig } from 'vite';
import pugPlugin from "vite-plugin-pug"

const options = { pretty: true } // FIXME: pug pretty is deprecated!
const locals = { name: "My Pug" }

export default defineConfig({
  base: '/Forum_page/',

  plugins: [pugPlugin(options, locals)],
/*   build: {
    cssMinify: false,
  }, */
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
        messages: "./messages.html"
      }
    }
  }
});
