import { flushPromises, mount } from '@vue/test-utils';
import { it, describe, expect } from 'vitest';

import App from './App.vue';

const todo = {
    id: 0,
    text: 'This is a very basic test message',
    done: true,
}
describe('App', () => {
    it('rendered text contains the todo', async () => {
        const wrapper = mount(App, { shallow: true });
        wrapper.vm.todoList = [todo];

        await flushPromises();

        expect(wrapper.text()).toMatch(todo.text);
    });
});
