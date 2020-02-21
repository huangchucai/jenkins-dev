import App from '../src/App.vue'
import { mount } from '@vue/test-utils'

describe('Component', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(App)
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
})
