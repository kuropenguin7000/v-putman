import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Ref, ComputedRef } from 'vue'

export const useDarkStore = defineStore('dark', () => {
  const darkMode: Ref<boolean> = ref(true)
  const getDarkMode: ComputedRef<boolean> = computed(() => darkMode.value)

  return { darkMode, getDarkMode }
})
