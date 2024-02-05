<script setup lang="ts">
import TheRequest from '@/components/request/TheRequest.vue'
import EndpointSection from '@/components/request/EndpointSection.vue'
import DarkModeToggle from '@/components/common/DarkModeToggle.vue'
import Divider from 'primevue/divider'
import { useDarkStore } from '@/stores/dark'

const store = useDarkStore()
</script>

<template>
  <div
    :class="`h-screen ${
      store.getDarkMode ? 'bg-dark-primary' : 'bg-white'
    } p-10 text-white`"
  >
    <DarkModeToggle />
    <EndpointSection />
    <div class="flex h-5/6 w-full justify-between">
      <TheRequest />
      <Divider layout="vertical" />
      <div class="w-full">response</div>
    </div>
  </div>
</template>
