import { defineConfig } from 'vite';
import VueMacros from 'unplugin-vue-macros/vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import vueJsx from '@vitejs/plugin-vue-jsx';
import viteESLint from 'vite-plugin-eslint';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

function resolve(dir: string) {
  return path.join(__dirname, dir);
}
// https://vitejs.dev/config/
// https://github.com/vitejs/vite/issues/1930 .env
export default defineConfig({
  plugins: [
    VueMacros({
      shortEmits: true,
      plugins: {
        vue: vue(),
        vueJsx: vueJsx() // 如果需要
      }
    }),

    viteESLint(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  resolve: {
    alias: {
      '@': resolve('./src'),

      '@views': resolve('./src/views')
    }
  }
});
