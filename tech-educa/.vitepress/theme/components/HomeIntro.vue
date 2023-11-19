<script setup lang="ts">
  import TELogo from "./TELogo.vue";
</script>

<template>
  <header>
    <TELogo class="icon" />
    <h1>Bem Vindo!</h1>
    <p>O Tech Educa é o portal de educação tecnológica aberto para todos.</p>
    <p>Explore o conteúdo que temos disponível para você.</p>
  </header>
</template>

<style scoped lang="scss">
  @import "@theme/styles/vars.scss";

  header {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 640px;
    margin: 0 auto;
    padding: 40px 20px 60px;
    text-align: center;

    @media (min-width: 960px) {
      padding-top: 20px;
      padding-bottom: 100px;
    }
  }

  $icon-mask: linear-gradient(to bottom, #fff9 5%, #fffa 10%, #fff0 25%);

  header .icon {
    width: 400px;
    height: 320px;
    color: var(--sb-foreground-highlight);
    /*
  -webkit-mask-image: $icon-mask;
  mask-image: $icon-mask;
  */

    @media (prefers-contrast: more) {
      display: none;
    }

    @media (min-width: $bp-medium) {
      width: 540px;
      height: 420px;
    }
  }

  header h1 {
    margin-top: -15px;
    margin-bottom: 0;
    font-family: Gilroy, var(--vp-font-family-base);
    font-size: 32px;
    line-height: 1.2;
    font-weight: 800;

    @media (min-width: 960px) {
      margin-top: -25px;
      font-size: 48px;
      line-height: 1;
    }
  }

  header p {
    margin: 0.75em 0 0;
    font-size: 16px;
    line-height: 1.4;

    @media (min-width: 960px) {
      font-size: 18px;
    }
  }
</style>
