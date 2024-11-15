import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Input from './Input.vue'

describe('Input', () => {
  it('renders input field', () => {
    const wrapper = mount(Input, {
      props: {
        placeholder: 'Test',
        type: 'text',
        value: 'Hello',
        name: 'test',
      },
    })
    const inputElement = wrapper.find('input')
    expect(inputElement.exists()).toBe(true)
    expect(inputElement.element.value).toBe('Hello')
    expect(inputElement.attributes('placeholder')).toBe('Test')
    expect(inputElement.attributes('type')).toBe('text')
  })
})
