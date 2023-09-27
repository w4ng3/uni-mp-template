import { createPinia } from 'pinia'

// 创建 pinia 实例
const pinia = createPinia()
// 使用持久化存储插件

// 默认导出，给 main.ts 使用
export default pinia

// 模块统一导出
export * from './modules/member'
