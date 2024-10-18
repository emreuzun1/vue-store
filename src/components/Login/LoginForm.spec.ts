import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import LoginForm from './LoginForm.vue'

describe('Login', () => {
  it('renders two input fields', () => {
    const wrapper = mount(LoginForm)
    expect(wrapper.find('input#username').exists()).toBe(true)
    expect(wrapper.find('input#password').exists()).toBe(true)
    expect(wrapper.find('button').text()).toBe('Login')
  })
})
