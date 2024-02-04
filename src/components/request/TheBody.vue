<script setup lang="ts">
import { reactive, ref } from 'vue'
import QueryParams from '@/components/request/QueryParams.vue'

const chips = reactive(['Headers', 'Body'])
const selectedChip = ref('Headers')

function onSelectedChip(chip: string) {
  selectedChip.value = chip
}
</script>

<template>
  <div class="flex gap-8">
    <div
      class="cursor-pointer pb-2"
      v-for="chip in chips"
      :class="selectedChip === chip ? 'border-b-2 border-amber-600' : ''"
      :key="chip"
      @click="onSelectedChip(chip)"
    >
      {{ chip }}
    </div>
  </div>
  <div class="mt-3">
    <div v-if="selectedChip === 'Params'">
      <QueryParams />
    </div>
    <div v-if="selectedChip === 'Headers'">
      <div>Add a headers:</div>
      <div></div>
    </div>
  </div>
</template>
