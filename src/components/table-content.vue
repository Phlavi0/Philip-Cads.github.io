<template>
      <td ><input type="checkbox" v-model="todo.done"></td>
      <td>
        {{todo.id}}
      </td>
      <td v-if="!editable">
        {{todo.label}}
        <span :class="{ notdone: !todo.done }">✅</span>
      </td>
      <td v-else>
        <input v-model="todo.label">
      </td>
      <td>
        <button @click="editable = !editable" class="btn btn-primary btn-sm" >Edit</button>
        <button @click="deleteTodo(todo)" class="btn btn-danger btn-sm">Delete</button>
      </td>
</template>
<script setup>
import { useTodo } from "@/composables/use-todo"
import {ref} from "vue";
const {todos} = useTodo()
const {deleteTodo} = useTodo()
const editable = ref(false)
defineProps({
  todo: {
    type: String
  }
})
</script>
<style>
.btn{
  margin-left: 5px;
}
</style>