<script setup lang="ts">
  const props = defineProps<{
    text: string;
    url: string;
  }>();
</script>

<template>
  <a :href="`./${props.url}`">
    {{ props.text }}
  </a>
  <br />
</template>

<style scoped lang="scss">
  a {
    color: rgb(0, 99, 228) !important;
    font-size: 1.2rem !important;
    text-decoration: none !important;
    display: inline-block;
    font-weight: bold !important;
    padding: 0.5em;
    margin-left: -0.5em;
    position: relative;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);

    &:before,
    &:after {
      position: absolute;
      content: "";
      border-bottom: 3px solid rgb(0, 99, 228);
      border-radius: 1em;
      bottom: 0.3em;
      transition: transform 0.5s cubic-bezier(0.075, 0.82, 0.165, 1) !important;
    }

    &:before {
      width: 1em;
      transform-origin: left;
    }

    &:after {
      width: 82%;
      left: 1em;
      transform: translateX(120%);
    }

    &:hover:before {
      transform: scaleX(0.3);
    }

    &:hover:after {
      transform: translateX(0);
    }
  }
</style>
