<script setup></script>

<template>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <a href="https://eslint.org/" target="_blank">
      <img src="/eslint.svg" class="logo eslint" alt="ESLint logo" />
    </a>
    <a href="https://prettier.io/" target="_blank">
      <img src="/prettier.svg" class="logo prettier" alt="Prettier logo" />
    </a>
    <a href="https://pinia.vuejs.org/" target="_blank">
      <img src="/pinia.svg" class="logo pinia" alt="Pinia logo" />
    </a>
    <a href="https://router.vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue Router logo" />
    </a>
    <a href="https://sass-lang.com/" target="_blank">
      <img src="/sass.svg" class="logo sass" alt="Sass logo" />
    </a>
  </div>
  <router-view
    msg="Vite + Vue + ESLint + Prettier + Pinia + Vue Route + Sass"
  />
</template>

<style scoped lang="scss">
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.logo.eslint:hover {
  filter: drop-shadow(0 0 2em #8080f2);
}
.logo.prettier:hover {
  filter: drop-shadow(0 0 2em #344651);
}
.logo.pinia:hover {
  filter: drop-shadow(0 0 2em #ffd859);
}
.logo.sass:hover {
  filter: drop-shadow(0 0 2em #cd6799);
}
</style>
