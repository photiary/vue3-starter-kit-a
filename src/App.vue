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
$color-default: #646cffaa;
$color-vue: #42b883aa;
$color-eslint: #8080f2;
$color-prettier: #344651;
$color-pinia: #ffd859;
$color-sass: #cd6799;

// filter 관련 Mixin 정의
@mixin drop-shadow($color) {
  filter: drop-shadow(0 0 2em $color);
}

// 공통 스타일 분리
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;

  &:hover {
    @include drop-shadow($color-default);
  }

  &.vue:hover {
    @include drop-shadow($color-vue);
  }

  &.eslint:hover {
    @include drop-shadow($color-eslint);
  }

  &.prettier:hover {
    @include drop-shadow($color-prettier);
  }

  &.pinia:hover {
    @include drop-shadow($color-pinia);
  }

  &.sass:hover {
    @include drop-shadow($color-sass);
  }
}
</style>
