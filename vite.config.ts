import { fileURLToPath, URL } from "node:url";
import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
import { readFileSync, writeFileSync, mkdirSync, existsSync, copyFileSync } from "fs";

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  const isLibBuild = command === 'build' && mode === 'lib';

  const config: any = {
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    server: {
      host: "0.0.0.0",
    },
  };

  config.plugins = [
    vue(),
    vueDevTools(),
  ];

  if (isLibBuild) {
    config.plugins.push({
      name: "generate-package-json",
      closeBundle() {
        // 读取根目录的 package.json
        const rootPackage = JSON.parse(
          readFileSync(path.resolve(__dirname, "package.json"), "utf-8")
        );

        const libPackageJson = {
          name: "web-win-vue",
          version: rootPackage.version || "0.0.0",
          description: rootPackage.description || "基于 Vue3 开发的 Windows10 风格 Web 组件库",
          main: "./web-win-vue.umd.js",
          module: "./web-win-vue.es.js",
          types: "./web-win-vue.d.ts",
          style: "./style.css",
          files: ["*.js", "*.d.ts", "*.css"],
          exports: {
            ".": {
              types: "./web-win-vue.d.ts",
              import: "./web-win-vue.es.js",
              require: "./web-win-vue.umd.js",
            },
            "./style": "./style.css",
            "./*": "./*",
          },
          keywords: [
            "Windows",
            "UI",
            "Vue",
            "WebWin",
            "Win",
            "Vue3"
          ],
          author: "hhcl2333",
          license: "MIT",
          peerDependencies: {
            vue: "^3.5.18",
          },
          repository: rootPackage.repository || {
            type: "git",
            url: "https://github.com/HHCL233/web-win-vue",
          },
          publishConfig: {
            access: "public",
          },
        };

        // 确保 packaged 目录存在
        const outputDir = path.resolve(__dirname, "packaged");
        if (!existsSync(outputDir)) {
          mkdirSync(outputDir, { recursive: true });
        }

        // 🔥 复制 README.md 文件
        const readmePath = path.resolve(__dirname, "README.md");
        const readmeOutputPath = path.join(outputDir, "README.md");

        if (existsSync(readmePath)) {
          try {
            copyFileSync(readmePath, readmeOutputPath);
            console.log("✓ README.md copied to packaged/ directory");
          } catch (error) {
            console.error("✗ Failed to copy README.md:", (error as Error).message);
          }
        } else {
          console.warn("⚠️ README.md not found in project root");
        }

        // 写入 package.json 到 packaged 目录
        writeFileSync(
          path.join(outputDir, "package.json"),
          JSON.stringify(libPackageJson, null, 2)
        );

        const dtsPath = path.join(outputDir, "web-win-vue.d.ts");
        if (!existsSync(dtsPath)) {
          const dtsContent = `declare module 'web-win-vue' {
  import type { App } from 'vue';
  
  // 导出组件
  export const winrange: any;
  export const wintopappbar: any;
  export const windropdown: any;
  export const wincard: any;
  export const wincontentdialog: any;
  export const winprogressbar: any;
  export const wincombobox: any;
  export const winradio: any;
  export const wincheckbox: any;
  export const winbutton: any;
  export const winitem: any;
  export const wintile: any;
  export const wintab: any;
  export const wininputbox: any;
  export const winpasswordbox: any;
  export const winricheditbox: any;
  export const winnotifications: any;
  export const winswitch: any;
  export const winlistview: any;
  export const winlistbox: any;
  
  // 导出安装函数
  const WebWin: {
    install(app: App): void;
  };
  
  export default WebWin;
}`;
          writeFileSync(dtsPath, dtsContent);
          console.log("✓ Created simple type declaration file");
        }
        console.log("✓ package.json generated in packaged/ directory");
      },
    });

    // 构建配置 - 组件库模式
    config.build = {
      outDir: "packaged",
      lib: {
        entry: path.resolve(__dirname, "./src/components/webwin/index.ts"),
        name: "web-win-vue",
        fileName: (format) => {
          if (format === 'es') {
            return 'web-win-vue.es.js'
          }
          if (format === 'umd') {
            return 'web-win-vue.umd.js'
          }
          return `web-win-vue.${format}.js`
        },
      },
      rollupOptions: {
        external: ["vue"],
        output: {
          exports: "named",
          globals: {
            vue: "Vue",
          },
          assetFileNames: (assetInfo) => {
            if (assetInfo.name?.endsWith(".css")) {
              return "style.css";
            }
            return "assets/[name]-[hash][extname]";
          },
        },
      },
      emptyOutDir: true,
    };
  } else {
    // 开发模式或普通构建模式
    config.build = {
      outDir: "dist",
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, "index.html"),
        },
      },
    };
  }

  return config;
});