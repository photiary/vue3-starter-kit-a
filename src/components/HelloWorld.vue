<script setup>
import { onMounted } from 'vue';
import { useCounterStore } from '@/stores/counter.js';

const counterStore = useCounterStore();

defineProps({
  msg: String,
});

onMounted(() => {
  counterStore.fetchCount();
});
</script>

<template>
  <div :class="$style.container">
    <h1>{{ msg }}</h1>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
    <p>
      Check out original
      <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
        >create-vue</a
      >, the official Vue + Vite starter
    </p>
    <p>
      Learn more about IDE Support for Vue in the
      <a
        href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
        target="_blank"
        >Vue Docs Scaling up Guide</a
      >.
    </p>
    <p :class="$style['read-the-docs']">
      Click on the package logos to learn more
    </p>
    <p>
      Check out Awesome Vite for
      <a href="https://github.com/vitejs/awesome-vite#templates" target="_blank"
        >community maintained templates</a
      >
    </p>
    <div :class="$style.card">
      <button type="button" @click="counterStore.increaseCount()">
        API count is {{ counterStore.count }}. 👆Click me.
      </button>
    </div>
  </div>
</template>

<style module lang="scss">
.container {
  @apply flex flex-col items-center justify-center gap-2 text-slate-900;

  h1 {
    @apply text-2xl;
  }

  .card {
    @apply flex flex-col items-center justify-center;

    button {
      @apply rounded-lg bg-indigo-500 px-4 py-2 font-bold text-slate-100 transition duration-300;

      &:hover {
        filter: drop-shadow(0 0 2em theme('colors.indigo.500'));
      }
    }
  }

  a {
    @apply text-green-500;
  }

  .read-the-docs {
    @apply text-indigo-500;
  }
}
</style>
