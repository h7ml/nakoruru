import { join } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';
import WindiCSS from 'vite-plugin-windicss';
import ThemeColor from './src/theme';

export default defineConfig(({ mode }) => {
  return {
    mode: process.env.NODE_ENV,
    root: __dirname,
    plugins: [
      react(),
      WindiCSS(),
      createHtmlPlugin({
        inject: {
          data: { MODE: mode, HASH: Date.now() },
        },
      }),
    ],
    resolve: {
      alias: {
        '@': join(__dirname, './src'),
      },
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          modifyVars: {
            //
            'primary-color': ThemeColor.base.primary,

            //
            'text-color': ThemeColor.base.textColorBase,
            'text-color-secondary': ThemeColor.base.textColorSecondary,
            'heading-color': ThemeColor.base.textColorBase,

            //
            'border-color-base': ThemeColor.base.borderColorBase,

            //
            'component-background': ThemeColor.base.bgColorMain,
            'component-background-secondary': ThemeColor.base.bgColorSecondary,
            'background-color-base': ThemeColor.base.bgColorBase,
            //
            'input-bg': ThemeColor.base.bgColorMain,
            //
            'checkbox-check-bg': ThemeColor.base.bgColorMain,
            'menu-bg': ThemeColor.base.bgColorMain,
            'menu-inline-submenu-bg': ThemeColor.base.bgColorMain,
            //
            'tooltip-bg': ThemeColor.base.bgColorBase,
            'tooltip-max-width': '680px',
            'tooltip-arrow-color': ThemeColor.base.bgColorTransparent,
            'tooltip-arrow-width': '0px * sqrt(2)',
            //
            'select-background': ThemeColor.base.bgColorMain,
            'select-selection-item-bg': ThemeColor.base.bgColorMain,
            'select-dropdown-bg': ThemeColor.base.bgColorMain,
            //
            'modal-header-bg': ThemeColor.base.bgColorMain,
            'modal-content-bg': ThemeColor.base.bgColorMain,
            //
            'drawer-bg': ThemeColor.base.bgColorMain,

            //
            'font-size-base': '12px',

            //
            'height-base': '32px',
            'height-lg': '40px',
            'height-sm': '28px',
          },
        },
      },
    },
    server: {
      host: '127.0.0.1',
      port: 8888,
      proxy: {
        '/api': {
          target: 'http://cloud.twelvet.cn/',
          changeOrigin: true,
        }
      },
      open: true,
    },
    esbuild: {
      drop: mode === 'production' ? ['console', 'debugger'] : [],
    },
  };
});
