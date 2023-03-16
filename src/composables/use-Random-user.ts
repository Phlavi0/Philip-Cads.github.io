import type {RandomUser} from "@/composables/types";
import { ref, onMounted } from 'vue';
const API_URL = 'https://randomuser.me/api/'
const params = new URLSearchParams({ results: '35', seed: 'foobar' })
const users = ref<RandomUser[]>([]);
export function useRandomUser(){
    onMounted(async () => {
        try {
            const response = await fetch(API_URL + '?' + params)
            const data = await response.json();
            users.value = data.results;
            console.log("seed: "+data.info.seed);
        } catch (error) {
            console.error(error)
        }
    });
    return {users, params}
}
