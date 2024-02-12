<script setup lang="ts">
import { ref, watch } from 'vue'
import { useCommonStore } from '@/stores/common'

const MONACO_EDITOR_OPTIONS = {
  automaticLayout: true,
  formatOnType: true,
  formatOnPaste: true
}
const code = ref()
const commonStore = useCommonStore()

watch(code, () => {
  commonStore.$patch({
    bodyRequest: code.value
  })
})
</script>

<template>
  <div class="h-[450px]">
    <vue-monaco-editor
      v-model:value="code"
      theme="vs-dark"
      :options="MONACO_EDITOR_OPTIONS"
      language="json"
    />
  </div>
</template>
