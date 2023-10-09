<script setup lang="ts">
import CardGrid from './CardGrid.vue';
import HomeIntro from './HomeIntro.vue';
import Footer from './Footer.vue';

defineProps<{
  linksTopicos: any[];
  linksCaminhos: any[];
}>();
</script>

<template>
  <div class="top-section">
    <HomeIntro />
    <CardGrid :links="linksTopicos" :topics=true />
  </div>
  <div class="external-links">
    <h2>Caminhos Especializados</h2>
    <CardGrid :links="linksCaminhos"/>
  </div>
  <Footer/>
</template>

<style scoped lang="scss">
@import '@theme/styles/vars.scss';

.top-section {
  padding-bottom: 60px;
}

.external-links {
  padding-bottom: 60px;

  :root.dark & {
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.16), rgba(0, 0, 0, 0) 360px);
  }

  h2 {
    margin-bottom: 40px;
    padding: 0 24px;
    text-align: center;
    font-family: Gilroy, var(--vp-font-family-base);
    font-size: 24px;
    line-height: 1.2;
    font-weight: 600;
  }

  @media (min-width: $bp-medium) {
    padding-top: 20px;
    padding-bottom: 80px;
    h2 {
      margin-bottom: 50px;
      font-size: 28px;
    }
  }
}
</style>
