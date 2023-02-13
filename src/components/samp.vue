<template>
  <div>
    <button @click="generateGuid">Generate GUID</button>
    <p>{{ guid }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      guid: ''
    };
  },
  methods: {
    generateGuid() {
      function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
      }
      this.guid = s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }
  }
};


//
// import {ref, onMounted, watch} from "vue"
// import { crud } from "@/composables/crud.ts"
//
// const todos = ref([])
// const newTodo = ref("")
//
// watch(todos, newVal => {
//   localStorage.setItem('todos', JSON.stringify(newVal))
// }, {deep: true})
//
// onMounted(()=> {
//   todos.value = JSON.parse(localStorage.getItem('todos')) || []
// })
//
//
// const saveTodo = ()=>{
//   todos.value.push({
//     id: generateGuid(),
//     label: newTodo.value,
//     editable: false,
//     done: false
//   })
//   newTodo.value = ""
// }
// function editTodo(index, event){
//   todos[index].text = event.target.value;
// }
//
//
// function generateGuid() {
//   return Math.floor((1 + Math.random()) * 0x10000)
//       .toString(16)
//       .substring(1);
// }
// function deleteTodo(todo){
//   this.todos = this.todos.filter((t) => t !== todo)
// }
</script>
