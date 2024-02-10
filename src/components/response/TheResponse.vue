<script setup lang="ts">
import { useCommonStore } from '@/stores/common'
import ScrollPanel from 'primevue/scrollpanel'
import VueJsonPretty from 'vue-json-pretty'
import 'vue-json-pretty/lib/styles.css'

const store = useCommonStore()
</script>

<template>
  <div class="w-full">
    <div v-if="store.isShowProgressBar" class="absolute z-20 ml-72 mt-32 w-1/2">
      <div>Sending request...</div>
    </div>
    <div
      v-if="store.isShowProgressBar"
      class="absolute z-10 h-full w-1/2 bg-black opacity-50"
    ></div>
    <ScrollPanel
      v-if="store.getResponse"
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
    <div v-else class="flex h-full w-full flex-col items-center justify-center">
      <div class="h-32 w-40 bg-astronaut bg-no-repeat"></div>
      <div class="text-gray-400">
        Enter the URL and click Send to get a response
      </div>
    </div>
  </div>
</template>

<style>
.vjs-tree-node:hover {
  background-color: transparent;
}
</style>
