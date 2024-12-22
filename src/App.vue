<template>
  <div :class="$style.container">
    <div :class="$style['icon-box']">
      <PackageButton
        v-for="lib in libList"
        :key="lib.name"
        :name="lib.name"
        :href="lib.href"
        :version="lib.version"
        :icon="lib.icon"
        :color="lib.color"
      />
    </div>
    <router-view msg="Hello Vue 3 Starter Kit" />
  </div>
</template>

<script setup>
import PackageButton from '@/components/PackageButton.vue';

const libList = [
  {
    name: 'Vite',
    href: 'https://vite.dev',
    version: '6',
    icon: 'vite.svg',
    color: '#646cff',
  },
  {
    name: 'Vue',
    href: 'https://vuejs.org/',
    version: '3',
    icon: 'vue.svg',
    color: '#42b883',
  },
  {
    name: 'pnpm',
    href: 'https://pnpm.io',
    version: '8',
    icon: 'pnpm.svg',
    color: '#f9ad00',
  },
  {
    name: 'ESLint',
    href: 'https://eslint.org/',
    version: '9',
    icon: 'eslint.svg',
    color: '#8080f2',
  },
  {
    name: 'Prettier',
    href: 'https://prettier.io/',
    version: '3',
    icon: 'prettier.svg',
    color: '#344651',
  },
  {
    name: 'Pinia',
    href: 'https://pinia.vuejs.org/',
    version: '2',
    icon: 'pinia.svg',
    color: '#ffd859',
  },
  {
    name: 'Vue Router',
    href: 'https://router.vuejs.org/',
    version: '4',
  },
  {
    name: 'Sass',
    href: 'https://sass-lang.com/',
    version: '1',
    icon: 'sass.svg',
    color: '#cd6799',
  },
  {
    name: 'Tailwind CSS',
    href: 'https://tailwindcss.com/',
    version: '3',
    icon: 'tailwindcss.svg',
    color: '#38bdf8',
  },
  {
    name: 'Storybook',
    href: 'https://storybook.js.org/',
    version: '8',
    icon: 'storybook.svg',
    color: '#ff4785',
  },
  {
    name: 'Vitest',
    href: 'https://vitest.dev/',
    version: '2',
    icon: 'vitest.svg',
    color: '#729b1b',
  },
  {
    name: 'Axios',
    href: 'https://axios-http.com/',
    version: '1',
    icon: 'axios.svg',
    color: '#5a29e4',
  },
];
</script>

<style module lang="scss">
.container {
  @apply flex h-screen flex-col items-center justify-center;

  .icon-box {
    @apply flex flex-wrap justify-center gap-2;
  }
}
</style>
