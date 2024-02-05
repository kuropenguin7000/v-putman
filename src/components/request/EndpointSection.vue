<script setup lang="ts">
import { ref } from 'vue'
import { useCommonStore } from '@/stores/common'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Dropdown from 'primevue/dropdown'
import { useToast } from 'primevue/usetoast'

const toast = useToast()
const store = useCommonStore()
const selectedHttpStatus = ref({ name: 'GET', color: 'text-[#6BDD9A]' })
const httpStatusList = ref([
  { name: 'GET', color: 'text-[#6BDD9A]' },
  { name: 'POST', color: 'text-[#FFE47E]' },
  { name: 'PUT', color: 'text-[#74AEF6]' },
  { name: 'PATCH', color: 'text-[#C0A8E1]' },
  { name: 'DELETE', color: 'text-[#F79A8E]' },
  { name: 'HEAD', color: 'text-[#6BDD9A]' },
  { name: 'OPTIONS', color: 'text-[#F15EB0]' }
])
const fetchAPI = () => {
  const success = (res: void) => {
    store.response = res
    toast.add({
      severity: 'success',
      summary: 'Success fetch API',
      detail: 'Successfully get the response',
      life: 3000
    })
  }
  const failed = () => {
    toast.add({
      severity: 'error',
      summary: 'Error fetch API',
      detail: 'Please check the network tab for more detail',
      life: 3000
    })
  }
  store.fetchTheApi(success, failed)
}
</script>

<template>
  <div class="mb-5 flex w-full items-center gap-2">
    <Dropdown
      class="md:w-44"
      v-model="selectedHttpStatus"
      :options="httpStatusList"
      optionLabel="name"
      :pt="{
        wrapper: { style: { 'max-height': '500px' } }
      }"
    >
      <template #value="slotProps">
        <div class="align-items-center flex">
          <div :class="slotProps.value.color">{{ slotProps.value.name }}</div>
        </div>
      </template>
      <template #option="slotProps">
        <div class="flex items-center">
          <div :class="slotProps.option.color">{{ slotProps.option.name }}</div>
        </div>
      </template>
    </Dropdown>
    <InputText
      v-model="store.endpoint"
      type="text"
      size="small"
      placeholder="Enter URL or paste text"
      class="w-full"
    />
    <Button size="small" label="Send" class="w-32" @click="fetchAPI" />
  </div>
</template>
