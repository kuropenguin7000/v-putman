<script setup lang="ts">
import { useCommonStore } from '@/stores/common'
import ScrollPanel from 'primevue/scrollpanel'
import VueJsonPretty from 'vue-json-pretty'
import 'vue-json-pretty/lib/styles.css'

const store = useCommonStore()
</script>

<template>
  <div class="w-full">
    <ScrollPanel
      style="width: 100%; height: 530px"
      :pt="{
        wrapper: {
          style: { 'border-right': 'rgb(var(--primary-400)/10%)' }
        },
        bary: 'relative z-20 w-[9px] top-0 rounded-full bg-primary-300 hover:bg-primary-400'
      }"
    >
      <vue-json-pretty
        class="text-white"
        :data="store.getResponse"
        :showLineNumber="true"
      />
    </ScrollPanel>
  </div>
</template>

<style>
.vjs-tree-node:hover {
  background-color: transparent;
}
</style>
