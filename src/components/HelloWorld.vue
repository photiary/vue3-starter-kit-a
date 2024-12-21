<script setup>
import { useCounterStore } from '@/stores/counter.js';

const counterStore = useCounterStore();
const dotEnv = import.meta.env.VITE_DUMMY;

defineProps({
  msg: String,
});
</script>

<template>
  <div :class="$style.container">
    <h1>{{ msg }}</h1>
    <h2>{{ dotEnv }}</h2>
    <div :class="$style.card">
      <button type="button" @click="counterStore.increaseCount()">
        count is {{ counterStore.count }}
      </button>
      <p>
        Edit
        <code>components/HelloWorld.vue</code> to test HMR
      </p>
    </div>
    <p>
      Check out
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
      Click on the Vite and Vue logos to learn more
    </p>
  </div>
</template>

<style module lang="scss">
.container {
  @apply flex flex-col items-center justify-center gap-2;

  h1 {
    @apply text-2xl;
  }

  .card {
    @apply flex flex-col items-center justify-center;

    button {
      @apply rounded-lg bg-rose-400 p-4 font-bold text-orange-200 transition duration-300;

      &:hover {
        filter: drop-shadow(0 0 2em theme('colors.rose.400'));
      }
    }
  }

  .read-the-docs {
    @apply text-blue-500;
  }
}
</style>
