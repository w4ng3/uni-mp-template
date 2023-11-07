import { defineConfig } from 'windicss/helpers'

function createSpacing() {
  let ans = {}
  for (let i = 1; i < 1000; ++i) {
    ans[i] = `${i}rpx` // 也可以替换成其他的尺寸和单位
  }
  return ans
}

export default defineConfig({
  extract: {
    include: ['src/**/*.{vue,html,jsx,tsx}'],
    exclude: ['node_modules', '.git']
  },
  theme: {
    spacing: createSpacing()
  },
})
