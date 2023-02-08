import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/Users/davidward/Documents/Tutorials/uo/uo/UOrigin/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}