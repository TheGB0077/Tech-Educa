<script setup lang="ts">
import CardLink from './CardLink.vue';

defineProps<{ links: any[], topics?: boolean }>();
</script>

<template>
  <ul class="grid">
    <li v-for="link in links" :class="{ item: true, item_large: link.large }">
      <CardLink v-bind="link" />
    </li>
    <li :class="{wontdisplay: !topics }" class="item">
      <CardLink
        title="Contribua"
        description="Ajude a melhorar o Tech Educa com novos conteúdos e correções."
        icon="/icons/plus-square.svg"
        url="/contribua/como_contribuir"
        style="outline: solid 1px var(--sb-foreground-highlight-high); &:hover { box-shadow: 0 0 0 2px var(--sb-foreground-highlight-high); }"
      />
    </li>
  </ul>
</template>

<style scoped lang="scss">
@import '@theme/styles/vars.scss';

.wontdisplay {
  display: none;
}

.grid {
  display: grid;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
  gap: 24px;
  list-style: none;


  @media (min-width: $bp-medium) {
    grid-template-columns: 1fr 1fr;

    .item > a {
      height: 100%;
    }
  }
  @media (min-width: $bp-large) {
    grid-template-columns: repeat(6, 1fr);
    .item {
      grid-column: span 2;
    }
    .item_large {
      grid-column: span 3;
    }
  }
}
</style>
