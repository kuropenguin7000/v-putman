<script setup lang="ts">
import { ref, reactive } from 'vue'
import type { Ref } from 'vue'
import { httpStatusList } from '@/constants/http-status'
import ChevronDown from '@/components/icons/ChevronDown.vue'

interface HttpStatus {
  name: string
  color: string
}

const url: Ref<string> = ref('')
const selectedHttpStatus: HttpStatus = reactive({
  name: 'GET',
  color: 'text-[#6BDD9A]'
})
const isDropdownVisible: Ref<boolean> = ref(false)
const httpStatusDropdown = ref<HTMLInputElement | null>(null)

function onClickHttpMethod(): void {
  isDropdownVisible.value = !isDropdownVisible.value
}
function handleDropdownClick(httpStatus): void {
  selectedHttpStatus.name = httpStatus.name
  selectedHttpStatus.color = httpStatus.color
}
function clickOutside() {
  isDropdownVisible.value = false
}
</script>

<template>
  <div>
    <form>
      <div class="flex pb-2">
        <label
          for="search-dropdown"
          class="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Your Email</label
        >
        <button
          v-click-outside="clickOutside"
          class="z-10 inline-flex w-1/12 flex-shrink-0 items-center justify-between rounded-s-lg border border-e-0 border-gray-300 bg-gray-100 px-4 py-2.5 text-center text-sm font-medium hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-600 dark:bg-dark-primary dark:hover:bg-gray-700 dark:focus:ring-blue-700"
          type="button"
          @click="onClickHttpMethod"
        >
          <label :class="selectedHttpStatus.color">
            {{ selectedHttpStatus.name }}
          </label>
          <div class="text-[#A6A6A6]">
            <ChevronDown />
          </div>
        </button>
        <div class="relative w-full">
          <input
            v-model="url"
            type="search"
            id="search-dropdown"
            class="rounded-s-gray-100 rounded-s-2 z-20 block w-full rounded-e-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-dark-primary dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500"
            placeholder="Enter URL or paste text"
            required
          />
          <button
            type="submit"
            class="absolute end-0 top-0 h-full w-1/12 rounded-e-lg border border-blue-700 bg-blue-700 p-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Send
          </button>
        </div>
      </div>
    </form>
    <div
      v-if="isDropdownVisible"
      ref="httpStatusDropdown"
      class="z-10 w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
    >
      <ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
        <li v-for="httpStatus in httpStatusList" :key="httpStatus.name">
          <a
            class="block px-4 py-2 hover:cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600"
            :class="httpStatus.color"
            @click="handleDropdownClick(httpStatus)"
          >
            {{ httpStatus.name }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
