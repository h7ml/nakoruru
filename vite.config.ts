import { join } from 'path';  // 导入 path 中的 join 方法
import { defineConfig } from 'vite';  // 导入 vite 的 defineConfig 方法
import react from "@vitejs/plugin-react-swc";  // 导入插件 @vitejs/plugin-react-swc 用于编译 react jsx 语法
import { createHtmlPlugin } from 'vite-plugin-html';  // 导入插件 vite-plugin-html 用于生成 html
import WindiCSS from 'vite-plugin-windicss';  // 导入插件 vite-plugin-windicss 用于处理 css
import ThemeColor from './theme';  // 导入 theme 文件用于处理主题色

// import legacyPlugin from '@vitejs/plugin-legacy'

// import Starter from 'unplugin-starter/vite'  // 导入插件 unplugin-starter/vite 用于生成自定义报告

import license from 'rollup-plugin-license';  // 导入插件 rollup-plugin-license 用于生成软件版权信息

import { visualizer } from 'rollup-plugin-visualizer'  // 导入插件 rollup-plugin-visualizer 用于构建可视化分析图

import viteCompression from 'vite-plugin-compression';  // 导入插件 vite-plugin-compression 用于压缩资源

export default defineConfig(({ mode }) => {
  return {
    mode: process.env.NODE_ENV,  // 设置构建模式为当前环境下的模式
    root: __dirname,  // 设置根目录为当前目录

    plugins: [
      react(),  // 加载 @vitejs/plugin-react-swc 插件
      WindiCSS(),  // 加载 vite-plugin-windicss 插件用于处理 css
      createHtmlPlugin({  // 调用 vite-plugin-html 插件创建 html
        inject: {
          data: { MODE: mode, HASH: Date.now() },  // 设置 HASH 为当前时间戳，以便浏览器可以强制刷新缓存
        },
      }),
      // legacy({
      //   targets: ['defaults', 'not IE 11'],
      // }),,

      viteCompression({  // 加载 vite-plugin-compression 插件用于压缩资源
        verbose: true, // 是否在控制台输出压缩结果
        disable: false, // 是否禁用,相当于开关在这里
        threshold: 10240, // 体积大于 threshold 才会被压缩,单位 b，1b=8B, 1B=1024KB  那我们这里相当于 9kb多吧，就会压缩
        algorithm: 'gzip', // 压缩算法，可选 [ 'gzip' , 'brotliCompress' ,'deflate' , 'deflateRaw' ]
        ext: '.gz', // 文件后缀
      }),

      visualizer({  // 加载 rollup-plugin-visualizer 插件用于构建可视化分析图
        gzipSize: true, // 开启gzip
        brotliSize: true, // 
        emitFile: false,  // 发射文件
        filename: "dist/visualizer.html",  // 分析图生成的文件名
        open:true  // 如果存在本地服务端口，将在打包后自动展示
      }),

      license({  // 加载 rollup-plugin-license 插件用于生成软件版权信息
        banner: `
            Copyright (c) 2023, h7ml
            All rights reserved.
            Released under the Apache-2.0 license.
          `,
        thirdParty: {
          output: {
            file: 'dist/licenses.txt',  //版权信息输出文件目录
          },
        }
      }),

      // Starter({  // 加载 unplugin-starter/vite 插件用于生成自定义报告
      //   filename: 'my-report.html',  // 设置报告文件名
      // }),

    ],

    build: {
      rollupOptions: {  
        output: {
          chunkFileNames: 'js/[name]-[hash].js',  // 配置 chunk 引入文件名的名称
          entryFileNames: 'js/[name]-[hash].js',  // 配置包的入口文件名称
          assetFileNames: '[ext]/[name]-[hash].[ext]'  // 配置资源文件像字体，图片等的文件名
        }
      },
      
      terserOptions: {  // 压缩选项
        compress: {
          //生产环境时移除console
          drop_console: true,
          drop_debugger: true,
        },
      },

      minify: false,  // 是否压缩
      reportCompressedSize: false,

      // 关闭生成map文件 可以达到缩小打包体积
      sourcemap: false,  // 关闭 sourceMap，生产环境下不需要生成

    },

    resolve: {
      alias: {
        '@': join(__dirname, './src'),  // 配置了根目录下的 src 目录别名
      }
    },

    css: {
      preprocessorOptions: {  // 预处理选项
        less: {
          javascriptEnabled: true,  // 开启 javascript 解析
          modifyVars: {
            // 主题色
            'primary-color': ThemeColor.base.primary,

            // 文字颜色
            'text-color': ThemeColor.base.textColorBase,
            'text-color-secondary': ThemeColor.base.textColorSecondary,
            'heading-color': ThemeColor.base.textColorBase,

            // 边框颜色
            'border-color-base': ThemeColor.base.borderColorBase,

            // 组件背景色
            'component-background': ThemeColor.base.bgColorMain,
            'component-background-secondary': ThemeColor.base.bgColorSecondary,
            'background-color-base': ThemeColor.base.bgColorBase,

            // 输入框背景色
            'input-bg': ThemeColor.base.bgColorMain,

            // 复选框背景色
            'checkbox-check-bg': ThemeColor.base.bgColorMain,
            'menu-bg': ThemeColor.base.bgColorMain,
            'menu-inline-submenu-bg': ThemeColor.base.bgColorMain,

            // 工具提示背景色
            'tooltip-bg': ThemeColor.base.bgColorBase,
            'tooltip-max-width': '680px',
            'tooltip-arrow-color': ThemeColor.base.bgColorTransparent,
            'tooltip-arrow-width': '0px * sqrt(2)',

            // 下拉框背景色
            'select-background': ThemeColor.base.bgColorMain,
            'select-selection-item-bg': ThemeColor.base.bgColorMain,
            'select-dropdown-bg': ThemeColor.base.bgColorMain,

            // 模态框背景色
            'modal-header-bg': ThemeColor.base.bgColorMain,
            'modal-content-bg': ThemeColor.base.bgColorMain,

            // 抽屉背景色
            'drawer-bg': ThemeColor.base.bgColorMain,

            // 字体大小
            'font-size-base': '12px',

            // 高度
            'height-base': '32px',
            'height-lg': '40px',
            'height-sm': '28px',
          },
        },
      },
    },

    server: {
      host: '127.0.0.1',  // 开启本地服务器，地址为 127.0.0.1
      port: 5432,  // 本地服务器端口号
      proxy: {  // 设置代理
        '/api': {
          target: 'http://cloud.twelvet.cn/',  // 代理地址
          changeOrigin: true,  //是否跨域
        }
      },
      open: true,  // 自动打开浏览器
    },

    esbuild: {  // esbuild 选项
      drop: mode === 'production' ? ['console', 'debugger'] : [],  // 移除 console 和 debugger
    },
  };
});

