import { fileURLToPath, URL } from 'node:url'
import path from "path";
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  build: {
		outDir: "web-win-vue",
		lib: {
			entry: path.resolve(__dirname, "./src/components/webwin/index.ts"), //指定组件编译入口文件
			name: "web-win-vue",
			fileName: "web-win-vue",
		},
		rollupOptions: {
			external: ["vue"],
			output: {
        exports: 'named',
				globals: {
					vue: "Vue",
				},
			},
		},
	},
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
