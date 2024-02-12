import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getData, postData } from '@/api'
import type IHeader from '@/interfaces/IHeader'

export const useCommonStore = defineStore('common', () => {
  const endpoint = ref<string>('')
  const response = ref()
  const progressBar = ref(false)
  const headers = ref<IHeader[]>([])
  const httpMethod = ref('GET')
  const bodyRequest = ref('')

  const getResponse = computed(() => response.value)
  const isShowProgressBar = computed(() => progressBar.value)

  function constructHeaders(header: Headers): Headers {
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
    switch (httpMethod.value) {
      case 'GET':
        getData(endpoint.value, constructHeaders(new Headers()))
          .then(res => success?.(res))
          .catch(error => {
            failed?.(error)
            console.error(error)
          })
        break
      case 'POST': {
        const header = new Headers()
        header.append('Content-Type', 'application/json')
        postData(endpoint.value, constructHeaders(header), bodyRequest.value)
          .then(res => success?.(res))
          .catch(error => {
            failed?.(error)
            console.error(error)
          })
        break
      }
      default:
        progressBar.value = false
    }
  }

  return {
    endpoint,
    fetchTheApi,
    response,
    getResponse,
    progressBar,
    isShowProgressBar,
    headers,
    httpMethod,
    bodyRequest
  }
})
