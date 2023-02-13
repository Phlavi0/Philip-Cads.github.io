<template>
  <VueDraggableNext>
    <tr v-for="(todo, index) in todos" :key="index" >
      <td ><input type="checkbox" v-model="todo.done"></td>
      <td>
        {{todo.id}} | {{index}}
      </td>
      <td v-if="!todo.editable">
        {{todo.label}}
        <span :class="{ notdone: !todo.done }">✔️</span>
      </td>
      <td v-else>
        <input v-model="todo.label">
      </td>
      <td>
        <button @click="todo.editable = !todo.editable">Edit</button>
        <button @click="deleteTodo(todo)">Delete</button>
      </td>
    </tr>
  </VueDraggableNext>
</template>
<script setup>
import { VueDraggableNext } from 'vue-draggable-next'
import { crud } from "@/composables/crud"

const {todos} = crud()
const {deleteTodo} = crud()
</script>