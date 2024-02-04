<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Ref } from 'vue'
import { useDarkStore } from '@/stores/dark'

const isDarkMode: Ref<boolean> = ref(true)
const store = useDarkStore()

function toggleDarkMode() {
  isDarkMode.value = !isDarkMode.value
  store.$patch(state => {
    state.darkMode = isDarkMode.value
  })
  document.documentElement.classList.toggle('dark', isDarkMode.value)
}

onMounted(() => {
  document.documentElement.classList.toggle('dark', isDarkMode.value)
})
</script>

<template>
  <label
    for="check"
    :class="`${
      isDarkMode ? 'bg-night' : 'bg-day'
    } relative mb-5 block h-12 w-28 cursor-pointer rounded-full bg-cover bg-no-repeat`"
  >
    <input
      id="check"
      class="peer sr-only"
      type="checkbox"
      @click="toggleDarkMode"
    />
    <span
      class="absolute left-2 top-2 h-4/6 w-2/6 rounded-full bg-moon bg-cover bg-no-repeat transition-all duration-500 peer-checked:left-16 peer-checked:bg-sun"
    ></span>
  </label>
</template>
