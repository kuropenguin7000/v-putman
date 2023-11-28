<script setup lang="ts">
import TheRequest from '@/components/request/TheRequest.vue'
import DarkModeToggle from '@/components/common/DarkModeToggle.vue'
</script>

<template>
  <div class="h-screen bg-[#282828] p-10 text-orange-100">
    <DarkModeToggle />
    <TheRequest />
  </div>
</template>
