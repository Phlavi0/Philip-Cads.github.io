import { ref } from 'vue';
import type {RandomUser} from "@/composables/types";

export function useApiRequest<TData>(url: 'https://randomuser.me/api/') {
    const loading = ref(true);
    const error = ref<Error | null>(null);
    const data = ref<RandomUser[]>([]);

    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(json => {
            data.value = json as TData;
        })
        .catch(error => {
            console.error(error);
            error.value = error;
        })
        .finally(() => {
            loading.value = false;
        });

    return {
        loading,
        error,
        data,
    };
}