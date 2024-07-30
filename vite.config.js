// import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'

import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from '@vant/auto-import-resolver'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [VantResolver()],
    }),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  resolve: {
    // alias: {
    //   '@': fileURLToPath(new URL('./src', import.meta.url))
    // }
    alias: [
      { find: '@', replacement: resolve(__dirname, './src') },
      { find: '~', replacement: resolve(__dirname, './src') },
    ],
  },
  server: {
    headers: {
      'Access-Control-Allow-Origin': '*', // NOSONAR
    },
    open: false,
    port: 8001,
    host: '0.0.0.0',
  }
})
