import { defineConfig } from 'windicss/helpers'
import ThemeColor from './theme'

export default defineConfig({
  preflight: false,
  darkMode: 'class',
  shortcuts: {
    'color-transition': 'transition-colors duration-200 ease-in-out delay-0',
    'btn-icon':
      'dark:bg-[rgb(41,49,79)] dark:text-[rgb(124,77,255)] w-[34px] text-[16px] h-[34px] flex items-center justify-center bg-[rgb(237,231,246)] text-[rgb(94,53,177)] rounded-[8px] color-transition select-none cursor-pointer hover:(bg-[rgb(94,53,177)] text-[rgb(237,231,246)])',
    'bg-primary':
      'dark:bg-bgPrimaryColor-dark light:bg-bgPrimaryColor-light bg-bgPrimaryColor-light',
    'bg-container':
      'dark:bg-bgContainerColor-dark light:bg-bgContainerColor-light bg-bgContainerColor-light',
    'text-primary':
      'dark:text-textPrimaryColor-dark light:text-textPrimaryColor-light text-textPrimaryColor-light',
  },
  theme: {
    extend: {
      colors: {
        // base
        ...ThemeColor.base,
        fill4: '#3D404B',
        'fill4-hover': '#474A57',
        'fill4-active': '#515563',
        content2: '#B4B7C1',
        // flow
        ...ThemeColor.flow,
        bgPrimaryColor: {
          dark: 'rgb(17, 25, 54)',
          light: '#ffffff',
        },
        bgContainerColor: {
          dark: 'rgb(26, 34, 63)',
          light: 'rgb(238, 242, 246)',
        },
        textPrimaryColor: {
          dark: '#ffffff',
          light: '#121926',
        },
      },
      fontSize: {
        22: '22px',
      },
      cursor: {
        nsResize: 'ns-resize',
      },
      height: {
        inherit: 'inherit',
      },
      display: {
        none: 'none',
        black: 'black',
      },
    },
  },
})
