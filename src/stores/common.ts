import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getData } from '@/api'
import type IHeader from '@/interfaces/IHeader'

export const useCommonStore = defineStore('common', () => {
  const endpoint = ref<string>('')
  const response = ref()
  const progressBar = ref(false)
  const headers = ref<IHeader[]>([])
  const httpMethod = ref('GET')

  const getResponse = computed(() => response.value)
  const isShowProgressBar = computed(() => progressBar.value)

  function constructHeaders(): Headers {
    const header = new Headers()
    if (headers.value.length) {
      headers.value.forEach(h => {
        header.append(h.key, h.value)
      })
    }
    return header
  }
  function fetchTheApi(
    success: (res: void) => void,
    failed: (res: void) => void
  ): void {
    getData(endpoint.value, constructHeaders(), httpMethod.value)
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
    getResponse,
    progressBar,
    isShowProgressBar,
    headers,
    httpMethod
  }
})
