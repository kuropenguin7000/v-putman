import { expect } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import DarkModeToggle from '@/components/common/DarkModeToggle.vue'

describe('DarkModeToggle', () => {
  let wrapper: VueWrapper

  beforeEach((): void => {
    wrapper = mount(DarkModeToggle, {
      global: {
        plugins: [createTestingPinia()]
      }
    })
  })

  it('renders correctly', () => {
    wrapper = mount(DarkModeToggle)
    expect(wrapper.exists()).to.be.true
  })

  it('toggles dark mode when clicked', async () => {
    wrapper = mount(DarkModeToggle)
    expect(document.documentElement.classList.contains('dark')).to.be.true
    await wrapper.find('input[type="checkbox"]').trigger('click')
    expect(document.documentElement.classList.contains('dark')).to.be.false
  })
})
