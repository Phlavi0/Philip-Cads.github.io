<template>
  <div class="card center" style="background-color: rgba(255, 255, 255, 0.06);
    -webkit-backdrop-filter: blur(20px);
            backdrop-filter: blur(20px);">
    <img class="center" src="public/todo.png" style="width: 25%;">
    
  <br>
  <form
      class="add-item-form"
      @submit.prevent="saveTodo"
  >
    <input
        v-model.trim="newTodo"
        type="text"
        placeholder="Add an item"
        maxlength="50" size="20"
        required
    >
    <input type="submit" value="Submit">
  </form>
  <br>

  <table class="table stripe">
      <tr>
        <th>Done</th>
        <th>ID</th>
        <th>Label</th>
        <th>Action</th>
      </tr>
      <VueDraggableNext style="display: table-row-group">
      <tr v-for="(todo, index) in todos" :key="index" >
          <table-content :todo="todo"></table-content>
      </tr>
      </VueDraggableNext>
  </table>
  </div>
</template>

<script setup lang="ts">
import {VueDraggableNext} from "vue-draggable-next";
import { useTodo } from "@/composables/use-todo"
import TableContent from "@/components/table-content.vue";
const {newTodo} = useTodo()
const {saveTodo} = useTodo()
const {todos} = useTodo()
</script>

<style>
.notdone {
  visibility: hidden;
  text-decoration: line-through;
}
.card{
  margin-top: 20px;
  padding: 20px;
  width: 50%;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

table {
  width: 100%;
}

tr:nth-child(even) {
  background-color: darkslategrey;
}

tr{
  color:white;
}
input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type=submit] {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

</style>