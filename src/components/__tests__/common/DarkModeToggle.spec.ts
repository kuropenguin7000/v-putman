import { expect } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { useDarkStore } from '@/stores/dark'
import DarkModeToggle from '@/components/common/DarkModeToggle.vue'

describe('DarkModeToggle', () => {
  let wrapper: VueWrapper
  let instance: any
  let store: any

  beforeEach((): void => {
    wrapper = mount(DarkModeToggle, {
      global: {
        plugins: [createTestingPinia()]
      }
    })
    instance = wrapper.vm as any
    store = useDarkStore()
  })

  it('should test isDarkMode value is false', async () => {
    expect(store.getDarkMode).to.be.false
    expect(instance.isDarkMode).to.be.false
    expect(wrapper.find('label').attributes('class')).to.contain('bg-day')
  })

  it('should test isDarkMode value is true', async () => {
    await wrapper.find('input').trigger('click')
    expect(store.getDarkMode).to.be.true
    expect(instance.isDarkMode).to.be.true
    expect(wrapper.find('label').attributes('class')).to.contain('bg-night')
  })
})
