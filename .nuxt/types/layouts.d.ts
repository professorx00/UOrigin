import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "/Users/davidward/Documents/Tutorials/uo/uo/UOrigin/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}