import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/components/Pages/Home.vue";
import Todo from "@/components/Pages/todo.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', name:'home', component: Home },
        { path: '/todo', name:'todo', component: Todo }
    ]
})

export default router