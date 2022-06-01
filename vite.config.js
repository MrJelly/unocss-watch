import { defineConfig } from 'vite'
import { createVuePlugin as Vue2 } from 'vite-plugin-vue2'
import Unocss from 'unocss/vite'
import { presetWind } from 'unocss'
import path from 'path'
export default defineConfig(() => {
  return {
    resolve: {
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    plugins: [
      Vue2(),
      Unocss({
        presets: [presetWind()],
        rules: [
          [
            /^bgimg-(.*)$/,
            ([_, d]) => {
              let index = d.lastIndexOf('_')
              let img = [d.substring(0, index), d.substring(index + 1)].join('.')
              return {
                background: `url(@/assets/images/${img}) center center no-repeat`,
                'background-size': '100% 100%'
              }
            }
          ]
        ]
      })
    ],
    hmr: true
  }
})

