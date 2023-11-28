<script setup lang="ts">
import TheRequest from '@/components/request/TheRequest.vue'
import DarkModeToggle from '@/components/common/DarkModeToggle.vue'
import { useDarkStore } from '@/stores/dark'

const store = useDarkStore()
</script>

<template>
  <div
    :class="`h-screen ${
      store.getDarkMode ? 'bg-[#282828]' : 'bg-[#FFFFFF]'
    } p-10 text-orange-100`"
  >
    <DarkModeToggle />
    <TheRequest />
  </div>
</template>
