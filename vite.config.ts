import { defineConfig, loadEnv } from 'vite';
import { alias } from './build/utils';
import { createVitePlugins } from "./build/plugins";
import { Env } from "./src/global.d";
// @ts-ignore
import proxy from "./build/proxy.js";
import { resolve } from 'path';

declare let process: any;
declare let require: any;

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }: { mode: string, command: string }) => {
  const env:any = loadEnv(mode, './env') as unknown as Env;
  const isLibBuild = command === 'build' && mode === 'lib';

  return {
    base: env.VITE_PUBLIC_PATH,
    plugins: createVitePlugins(env),
    define: {
      linc: env,
    },
    server: {
      host: '0.0.0.0',
      open: true,
      proxy,
    },
    resolve: {
      alias,
    },
    build: {
      ...(isLibBuild
        ? {
            lib: {
              entry: resolve(__dirname, 'src/app/components/unis-ui/item/index.ts'),
              name: 'UnisUIItem', // 这个name定义了库的全局变量名，当库被用作UMD格式时使用
              formats: ['es']
            },
            rollupOptions: {
              output: {
                assetFileNames: (assetInfo: any) => {
                  if (assetInfo.name.endsWith('.css')) {
                    return 'desgin-system.css';
                  }
                  return assetInfo.name;
                }
              }
            },
            cssCodeSplit: true, // 启用 CSS 代码分割
            copyPublicDir: true
          }
        : {
            assetsInlineLimit: 1024 * 10,
            terserOptions: {
              compress: {
                drop_console: true,
                drop_debugger: true,
              }
            },
            rollupOptions: {
              output: {
                manualChunks: {
                  vue: ['vue', 'pinia', 'vue-router'],
                  lodash: ['lodash-es'],
                  elementIcons: ['@element-plus/icons-vue'],
                },
                chunkFileNames: 'static/js/[name]-[hash].js',
                entryFileNames: 'static/js/[name]-[hash].js',
                assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
              },
            },
          }),
    },
    test: {
      globals: true,
      environment: 'jsdom',
      coverage: {
        provider: 'v8',
        all: true,
        enabled: true,
        reporter: ['lcov', 'html'], // 生产报告的格式，本地运行单元测试，可以注释该语句
        extension: ['.vue'],
      },
      server: {
        deps: {
          inline: ['element-plus'],
        },
      },
      include: ['**/test/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
      passWithNoTests: true,
      // 测试报告生成文件
      outputFile: './coverage/junit.xml',
    },
  };
});
