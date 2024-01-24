<script setup lang="ts">
import { useCommonStore } from '@/stores/common'
import { ref } from 'vue'
import type { Ref } from 'vue'

const store = useCommonStore()
const inputKey: Ref<string> = ref('')
const inputValue: Ref<string> = ref('')

function onInputKey() {
  // store.$patch({ endPoint: inputKey.value })
}
const updateQueryParams = () => {
  // if (inputKey.value && inputValue.value) {
  //   store.addQueryParam({ key: inputKey.value, value: inputValue.value })
  // }
}
</script>

<template>
  <label>Query params</label>
  <table class="w-full border-collapse border border-slate-500">
    <thead>
      <tr>
        <th class="border border-slate-600 py-1 pl-2 text-left">Key</th>
        <th class="border border-slate-600 py-1 pl-2 text-left">Value</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="w-1/2 border border-slate-700">
          <input
            v-model="inputKey"
            type="text"
            placeholder="Key"
            class="w-full bg-transparent py-1 pl-2"
            @input="onInputKey"
          />
        </td>
        <td class="border border-slate-700">
          <input
            v-model="inputValue"
            type="text"
            placeholder="Value"
            class="w-full bg-transparent py-1 pl-2"
          />
        </td>
      </tr>
    </tbody>
  </table>
  <p>Complete Endpoint: {{ store }}</p>
  <button @click="updateQueryParams">Add Query Param</button>
</template>
