import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import WindiCSS from 'vite-plugin-windicss'
import MiniProgramTailwind from '@dcasia/mini-program-tailwind-webpack-plugin/rollup'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    // 开发阶段启用源码映射：https://uniapp.dcloud.net.cn/tutorial/migration-to-vue3.html#需主动开启-sourcemap
    sourcemap: process.env.NODE_ENV === 'development'
  },
  plugins: [
    uni(),
    WindiCSS({
      scan: {
        dirs: ['.'], // 当前目录下所有文件
        fileExtensions: ['vue', 'js', 'ts'] // 同时启用扫描vue/js/ts
      }
    }),
    MiniProgramTailwind()
  ]
})
