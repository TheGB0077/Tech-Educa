<script setup lang="ts">
  import { ref } from "vue";
  import { withBase } from "vitepress";

  const root = ref("/");
</script>

<template>
  <div class="NotFound">
    <p class="code">404</p>
    <h1 class="title">Página não encontrada</h1>
    <div class="divider" />
    <blockquote class="quote">Parece que você se perdeu...</blockquote>

    <div class="action">
      <a class="link" :href="withBase(root)" aria-label="go to home">
        Volte para o início
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .NotFound {
    padding: 64px 24px 96px;
    text-align: center;
  }

  @media (min-width: 768px) {
    .NotFound {
      padding: 96px 32px 168px;
    }
  }

  .code {
    line-height: 64px;
    font-size: 64px;
    font-weight: 600;
  }

  .title {
    padding-top: 12px;
    letter-spacing: 2px;
    line-height: 20px;
    font-size: 20px;
    font-weight: 700;
  }

  .divider {
    margin: 24px auto 18px;
    width: 64px;
    height: 1px;
    background-color: var(--vp-c-divider);
  }

  .quote {
    margin: 0 auto;
    max-width: 256px;
    font-size: 14px;
    font-weight: 500;
    color: var(--vp-c-text-2);
  }

  .action {
    padding-top: 20px;
  }

  .link {
    display: inline-block;
    border: 1px solid var(--vp-c-brand);
    border-radius: 16px;
    padding: 3px 16px;
    font-size: 14px;
    font-weight: 500;
    color: var(--vp-c-brand);
    transition: border-color 0.25s, color 0.25s;
  }

  $LinkHover: var(--vp-c-text-1);

  .link:hover {
    border-color: $LinkHover;
    color: $LinkHover;
  }
</style>
