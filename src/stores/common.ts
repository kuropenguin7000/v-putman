import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getData } from '@/api'

export const useCommonStore = defineStore('common', () => {
  const endpoint = ref<string>('')
  const response = ref()

  const getResponse = computed(() => response.value)

  function fetchTheApi(
    success: (res: void) => void,
    failed: (res: void) => void
  ): void {
    getData(endpoint.value)
      .then(res => success?.(res))
      .catch(error => {
        failed?.(error)
        console.error(error)
      })
  }

  return {
    endpoint,
    fetchTheApi,
    response,
    getResponse
  }
})
