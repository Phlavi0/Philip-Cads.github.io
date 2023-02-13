<template>
  <div class="home">
  <div class="card center">
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

  <table>
      <tr>
        <th>Done</th>
        <th>ID</th>
        <th>Label</th>
        <th>Action</th>
      </tr>
    <table-content  style="display: table-row-group"/>
  </table>


  </div>
  </div>
</template>

<script setup lang="ts">
import { crud } from "@/composables/crud"
import TableContent from "@/components/table-content.vue";
const {newTodo} = crud()
const {saveTodo} = crud()
</script>

<style>
.notdone {
  visibility: hidden;
  text-decoration: line-through;
}
.card{
  padding-top: 20px;
  width: 50%;
  background-color: black;
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