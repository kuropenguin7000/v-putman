<script setup>
import { ref, shallowRef, watch } from 'vue'
import { useCommonStore } from '@/stores/common'

const MONACO_EDITOR_OPTIONS = {
  automaticLayout: true,
  formatOnType: true,
  formatOnPaste: true
}
const code = ref()
const editorRef = shallowRef()
const handleMount = editor => (editorRef.value = editor)
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
      @mount="handleMount"
    />
  </div>
</template>
