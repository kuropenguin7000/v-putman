<script setup lang="ts">
import TheBody from '@/components/request/TheBody.vue'
import TheHeader from '@/components/request/TheHeader.vue'
import DarkModeToggle from '@/components/common/DarkModeToggle.vue'
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
    <TheHeader />
    <div class="flex justify-between gap-3">
      <div
        class="h-[530px] w-full rounded-lg border border-gray-300 p-3 dark:border-gray-600"
      >
        <TheBody />
      </div>
      <div
        class="h-[530px] w-full rounded-lg border border-gray-300 p-3 dark:border-gray-600"
      >
        response component
      </div>
    </div>
  </div>
</template>
