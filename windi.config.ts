import { defineConfig } from 'windicss/helpers'
import ThemeColor from './theme'

export default defineConfig({
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
