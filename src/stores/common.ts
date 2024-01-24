import { ref, reactive, computed, watch } from 'vue'
import { defineStore } from 'pinia'
import type { Ref, ComputedRef } from 'vue'

export const useCommonStore = defineStore('common', () => {
  const endPoint: Ref<string> = ref('')
  const getEndPoint: ComputedRef<string> = computed(() => endPoint.value)

  const endpoint = ref('')
  const queryParams = reactive({})

  // const formattedQueryParams = computed(() => {
  //   // Convert queryParams object to a query string
  //   const queryString = Object.keys(queryParams)
  //     .map(key => `${key}=${encodeURIComponent(queryParams[key])}`)
  //     .join('&')
  //
  //   // Add "?" if there are query parameters
  //   return queryString ? `?${queryString}` : ''
  // })

  // const completeEndpoint = computed(
  //   () => endpoint.value + formattedQueryParams.value
  // )

  // const setEndpoint = newEndpoint => {
  //   endpoint.value = newEndpoint
  // }
  //
  // const addQueryParam = ({ key, value }) => {
  //   queryParams[key] = value
  // }
  //
  // const removeQueryParam = key => {
  //   delete queryParams[key]
  // }
  //
  // const clearQueryParams = () => {
  //   Object.keys(queryParams).forEach(key => delete queryParams[key])
  // }

  // watch(
  //   () => endpoint.value,
  //   newEndpoint => {
  //     // Update queryParams based on changes in endpoint
  //     // This assumes a simple structure where each query parameter is separated by "&"
  //     const params = newEndpoint.split('?')[1]
  //     if (params) {
  //       const pairs = params.split('&')
  //       pairs.forEach(pair => {
  //         const [key, value] = pair.split('=')
  //         queryParams[key] = value
  //       })
  //     }
  //   }
  // )
  //
  // watch(
  //   () => queryParams,
  //   newParams => {
  //     // Update endpoint based on changes in queryParams
  //     const queryString = Object.keys(newParams)
  //       .map(key => `${key}=${encodeURIComponent(newParams[key])}`)
  //       .join('&')
  //     setEndpoint(queryString ? `?${queryString}` : '')
  //   }
  // )

  return {
    endPoint,
    getEndPoint,
    endpoint,
    queryParams
  }
})
