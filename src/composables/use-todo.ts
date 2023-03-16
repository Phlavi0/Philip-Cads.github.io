import {ref, onMounted, watch} from "vue"
import type {ToDo} from '@/composables/types'

const todos = ref<ToDo[]>([])
const newTodo = ref("")

export function useTodo() {
    watch(todos, newVal => {
        localStorage.setItem('todos', JSON.stringify(newVal))
    }, {deep: true})

    onMounted(() => {
        todos.value = JSON.parse(localStorage.getItem('todos') || '[]')
    })

    function saveTodo() {
        todos.value.push({
            id: generateGuid(),
            label: newTodo.value,
            done: false
        })
        newTodo.value = ""
    }
    function generateGuid() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    function deleteTodo(todo:ToDo) {
        todos.value = todos.value.filter((t) => t !== todo)
    }

    return {saveTodo,
        deleteTodo,
        todos,
        newTodo
    }
}
