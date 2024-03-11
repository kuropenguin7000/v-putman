import './assets/css/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { clickOutside } from './directives/click-outside'
import PrimeVue from 'primevue/config'
// @ts-expect-error prime vue preset
import Lara from './presets/lara'
import 'primeicons/primeicons.css'
import ToastService from 'primevue/toastservice'
import { install as VueMonacoEditorPlugin } from '@guolao/vue-monaco-editor'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  unstyled: true,
  pt: Lara
})
app.use(ToastService)
app.use(VueMonacoEditorPlugin, {
  paths: {
    vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs'
  }
})

app.directive('click-outside', clickOutside)

app.mount('#app')
