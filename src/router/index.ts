import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/Pages/Home.vue";
import Todo from "@/Pages/todo.vue";
import Charmander from "@/Pages/charmander.vue";
import RandomUsers from "@/Pages/Random-users.vue";
import User from "@/components/user-view.vue";

const HOME_ROUTE = "home";
const TODO_ROUTE = "todo";
const CHARMANDER_ROUTE = "charmander";
const USERS_ROUTE = "users";
const USER_ROUTE = "user";


const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: "/", name: HOME_ROUTE, component: Home },
        { path: "/todo", name: TODO_ROUTE, component: Todo },
        { path: "/charmander", name: CHARMANDER_ROUTE, component: Charmander },
        { path: "/random-users", name: USERS_ROUTE, component: RandomUsers },
        { path: "/:userid", name: USER_ROUTE, component: User, props: true },
    ],
});

export default router