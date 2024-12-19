<script setup></script>

<template>
  <div :class="$style.container">
    <div :class="$style['icon-box']">
      <a href="https://vite.dev" target="_blank">
        <img src="/vite.svg" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="/vue.svg" :class="$style.vue" alt="Vue logo" />
      </a>
      <a href="https://eslint.org/" target="_blank">
        <img src="/eslint.svg" :class="$style.eslint" alt="ESLint logo" />
      </a>
      <a href="https://prettier.io/" target="_blank">
        <img src="/prettier.svg" :class="$style.prettier" alt="Prettier logo" />
      </a>
      <a href="https://pinia.vuejs.org/" target="_blank">
        <img src="/pinia.svg" :class="$style.pinia" alt="Pinia logo" />
      </a>
      <a href="https://router.vuejs.org/" target="_blank">
        <img src="/vue.svg" :class="$style.vue" alt="Vue Router logo" />
      </a>
      <a href="https://sass-lang.com/" target="_blank">
        <img src="/sass.svg" :class="$style.sass" alt="Sass logo" />
      </a>
      <a href="https://tailwindcss.com/" target="_blank">
        <img
          src="/tailwindcss.svg"
          :class="$style.tailwindcss"
          alt="Tailwindcss logo"
        />
      </a>
    </div>
    <router-view
      msg="Vite + Vue + ESLint + Prettier + Pinia + Vue Route + Sass + Tailwindcss"
    />
  </div>
</template>

<style module lang="scss">
$color-default: #646cffaa;
$color-vue: #42b883aa;
$color-eslint: #8080f2;
$color-prettier: #344651;
$color-pinia: #ffd859;
$color-sass: #cd6799;
$color-tailwindcss: #38bdf8;

@mixin drop-shadow($color) {
  filter: drop-shadow(0 0 2em $color);
}

.container {
  @apply flex h-screen flex-col items-center justify-center;

  .icon-box {
    @apply flex items-center justify-center;
  }

  img {
    @apply h-32 p-4 transition duration-300;
    will-change: filter;

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

    &.tailwindcss:hover {
      @include drop-shadow($color-tailwindcss);
    }
  }
}
</style>
