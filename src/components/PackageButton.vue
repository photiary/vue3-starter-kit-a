<template>
  <a
    :class="$style.container"
    :href="href"
    target="_blank"
    :style="{ '--dynamic-color': color }"
  >
    <img :src="`/${icon}`" :alt="`${name} logo`" />
    <span :class="$style.name">{{ name }} </span>
    <span :class="$style.version" v-if="version"> v{{ version }} </span>
  </a>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  href: {
    type: String,
    required: true,
  },
  version: {
    type: String,
  },
  icon: {
    type: String,
    default: 'vue.svg',
  },
  color: {
    type: String,
    default: '#42b883',
  },
});
</script>

<style module lang="scss">
.container {
  @apply flex flex-col items-center gap-2 p-4 transition duration-300;
  will-change: filter;

  &:hover {
    filter: drop-shadow(0 0 2em var(--dynamic-color));
  }

  img {
    @apply h-16;
  }

  span {
    color: var(--dynamic-color);

    &.name {
      @apply text-xl font-semibold;
    }

    &.version {
      @apply text-base font-normal;
    }
  }
}
</style>
