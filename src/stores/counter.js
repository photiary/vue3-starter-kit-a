import { ref } from 'vue';
import { acceptHMRUpdate, defineStore } from 'pinia';
import { api } from '@/plugins/api';

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0);

  const increaseCount = () => {
    count.value++;
  };

  const fetchCount = async () => {
    try {
      const { data } = await api.get('/api/count');
      count.value = data.count;
    } catch (e) {
      console.error(e);
      throw e;
    }
  };

  return { count, increaseCount, fetchCount };
});

// https://pinia.vuejs.org/api/pinia/functions/acceptHMRUpdate.html
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCounterStore, import.meta.hot));
}
