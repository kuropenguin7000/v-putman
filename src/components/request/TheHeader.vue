<script setup lang="ts">
import { ref, watch } from 'vue'
import { useCommonStore } from '@/stores/common'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import type IHeader from '@/interfaces/IHeader'

const commonStore = useCommonStore()
const headerKey = ref()
const headerValue = ref()
const headers = ref<IHeader[]>([])
const columns = [
  { field: 'key', header: 'Key' },
  { field: 'value', header: 'Value' },
  { field: 'remove', header: '' }
]

watch(
  () => headers.value.map(header => header.key),
  () => {
    commonStore.$patch({
      headers: headers.value
    })
  }
)

const removeRow = (key: string) => {
  const indexToRemove = headers.value.findIndex(obj => obj.key === key)
  if (indexToRemove !== -1) {
    headers.value.splice(indexToRemove, 1)
  }
}
const addRow = () => {
  if (headerKey.value && headerValue.value) {
    headers.value.push({
      key: headerKey.value,
      value: headerValue.value
    })
    headerKey.value = ''
    headerValue.value = ''
  }
}
</script>

<template>
  <div>
    <div class="mb-5 flex gap-5">
      <InputText
        v-model="headerKey"
        type="text"
        size="small"
        placeholder="Header key"
      />
      <InputText
        v-model="headerValue"
        type="text"
        size="small"
        placeholder="Header value"
      />
      <Button
        icon="pi pi-plus"
        size="small"
        text
        rounded
        aria-label="Add"
        @click="addRow"
      />
    </div>
    <DataTable
      v-if="headers.length"
      :value="headers"
      size="small"
      scrollable
      scrollHeight="370px"
      tableStyle="min-width: 20rem"
    >
      <Column
        v-for="col of columns"
        :key="col.field"
        :field="col.field"
        :header="col.header"
        :style="col.field === 'remove' ? 'width: 5rem' : ''"
        ><template v-if="col.field === 'remove'" #body="slotProps">
          <Button
            icon="pi pi-times"
            severity="danger"
            size="small"
            text
            rounded
            aria-label="Remove"
            @click="removeRow(slotProps.data.key)" /></template
      ></Column>
    </DataTable>
  </div>
</template>
