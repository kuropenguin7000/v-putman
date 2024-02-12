<script setup lang="ts">
import { ref } from 'vue'
import TheHeader from '@/components/request/TheHeader.vue'
import TheBody from '@/components/request/TheBody.vue'
import TabView from 'primevue/tabview'
import TabPanel from 'primevue/tabpanel'

const tabs = ref([
  { title: 'Headers', content: 'Tab 1 Content' },
  { title: 'Body', content: 'Tab 2 Content' }
])
</script>

<template>
  <div class="min-w-[700px]">
    <TabView>
      <TabPanel v-for="tab in tabs" :key="tab.title" :header="tab.title">
        <div v-if="tab.title === 'Headers'">
          <TheHeader />
        </div>
        <div v-else>
          <TheBody />
        </div>
      </TabPanel>
    </TabView>
  </div>
</template>
