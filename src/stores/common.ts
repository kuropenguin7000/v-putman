import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Ref } from 'vue'

export const useCommonStore = defineStore('common', () => {
  const endpoint: Ref<string> = ref('')

  return {
    endpoint
  }
})
