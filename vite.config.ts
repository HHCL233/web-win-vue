import { fileURLToPath, URL } from 'node:url'
import path from "path";
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import dts from 'vite-plugin-dts' // 引入dts插件

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    // 添加dts插件配置（已移除bundle属性）
    dts({
      // 输出目录，与打包目录保持一致
      outDir: "web-win-vue/types",
      // 排除不需要生成声明文件的目录
      exclude: ['node_modules/**', '**/*.test.ts', '**/*.spec.ts'],
      // 声明文件的入口根目录
      entryRoot: path.resolve(__dirname, './src/components/webwin'),
      // 确保Vue组件的类型被正确生成
      include: ['src/components/webwin/**/*.vue', 'src/components/webwin/**/*.ts'],
      // 生成类型声明时是否自动清理输出目录
      cleanVueFileName: true
    })
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
