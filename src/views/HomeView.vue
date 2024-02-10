<script setup lang="ts">
import { useDarkStore } from '@/stores/dark'
import { useCommonStore } from '@/stores/common'
import TheRequest from '@/components/request/TheRequest.vue'
import TheResponse from '@/components/response/TheResponse.vue'
import EndpointSection from '@/components/request/EndpointSection.vue'
import DarkModeToggle from '@/components/common/DarkModeToggle.vue'
import Divider from 'primevue/divider'
import Toast from 'primevue/toast'
import ProgressBar from 'primevue/progressbar'

const darkStore = useDarkStore()
const commonStore = useCommonStore()
</script>

<template>
  <div
    :class="`h-screen ${
      darkStore.getDarkMode ? 'bg-dark-primary' : 'bg-white'
    } p-10 text-white`"
  >
    <Toast position="top-right" />
    <DarkModeToggle />
    <div class="mb-1 h-2">
      <ProgressBar
        v-if="commonStore.isShowProgressBar"
        mode="indeterminate"
        style="height: 6px"
      ></ProgressBar>
    </div>
    <EndpointSection />
    <div class="flex h-5/6 w-full justify-between">
      <TheRequest />
      <Divider layout="vertical" />
      <TheResponse />
    </div>
  </div>
</template>
