<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  bgImgLight?: string;
  bgImgDark?: string;
  description: string;
  icon?: string;
  large?: boolean;
  title: string;
  url: string;
}>();

const hasBackgroundImage = computed(() => Boolean(props.bgImgDark && props.bgImgLight));

const imageStyle = computed(() => ({
  '--icon': props.icon ? `url(${props.icon})` : undefined,
  '--bg-dark': props.bgImgDark ? `url(${props.bgImgDark})` : undefined,
  '--bg-light': props.bgImgLight ? `url(${props.bgImgLight})` : undefined,
}));
</script>

<template>
  <a
    :class="{ link: true, link_large: large, link_bg: hasBackgroundImage }"
    :style="hasBackgroundImage || icon ? imageStyle : undefined"
    :href="url"
  >
    <div class="fill">
      <strong class="title">
        <span v-if="icon" :src="icon" class="icon"></span>
        {{ title }}
      </strong>
      <span class="description">
      {{ description }}
    </span>
    </div>
  </a>
</template>

<style scoped lang="scss">
@import '@theme/styles/vars.scss';



.link {
  --icon-color: var(--sb-foreground-highlight);

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 144px;
  border-radius: 8px;
  border: solid 2px hsl(200 30% 40% / 0.15);
  // Bit of a specificity battle going on with theme styles
  color: var(--vp-c-text-2);
  text-decoration: none;
  background-color: var(--vp-c-bg-elv);
  transition: box-shadow 0.1s ease, transform 0.1s ease;
  transform: translateZ(0); // corrige a oscilação de opacidade quando outros elementos são destacados

  .fill {
    --card-padding-base: 20px 24px 24px;
    --card-padding-large: 20px 24px 24px;
    min-width: 100%;
    min-height: 100%;
    border-radius: 8px;
    padding: var(--card-padding-base);

    :root:not(.dark) & {
      // Fundo transparente para melhoria da legibilidade do texto
      background-color: rgba(255, 255, 255, 0.45);
    }

    @media (min-width: $bp-medium) {
      --card-padding-base: 28px 36px 32px;
      --card-padding-large: 28px 36px 32px;
    }
    @media (min-width: $bp-large) {
      --card-padding-large: 44px 60px;
    }
    @media (min-width: $bp-xlarge) {
      --card-padding-base: 32px 48px 36px;
      --card-padding-large: 60px 72px;
      border-radius: 12px;
    }
  }

  @media (min-width: $bp-xlarge) {
    border-radius: 12px;
  }

  &:hover {
    --icon-color: currentColor !important;
    border-color: var(--sb-foreground-highlight-high);
    transform: translateY(-2px);
  }

  &:focus-visible {
    --icon-color: currentColor !important;
    outline: solid 2px var(--sb-foreground-highlight-high);
    outline-offset: -2px;
  }
}

.link_bg {
  background-origin: border-box;
  background-position: left center;
  background-repeat: no-repeat;
  background-size: cover;

  :root:not(.dark) & {
    background-image: var(--bg-light);
  }
  :root.dark & {
    background-image: var(--bg-dark);
  }
}

.title {
  display: flex;
  align-items: center;
  position: relative;
  width: auto;
  margin-bottom: 14px;
  line-height: 1.5;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.1px;
  color: var(--vp-c-text-1);
}

.icon {
  display: block;
  flex: none;
  width: 20px;
  height: 20px;
  margin-left: -2px;
  margin-right: 12px;
  background-color: var(--icon-color, currentColor);
  transition: background-color 0.1s ease, opacity 0.1s ease;
  -webkit-mask: var(--icon) center/contain no-repeat;
  mask: var(--icon) center/contain no-repeat;
}

.description {
  display: block;
  text-align: left;
  max-width: 20em;
  margin: 0;
  font-size: 13px;
  font-weight: 500;
  line-height: 1.52;
  color: var(--vp-c-text-2);
  transition: color 0.1s ease;

  .link:hover &,
  .link:focus & {
    color: var(--vp-c-text-1);
  }
}

// Cartão tamanho large pode ser estilizado abaixo
@media (min-width: $bp-large) {

  .fill {
    padding: var(--card-padding-large);
  }

  .link_large {

    .title {
      margin-bottom: 22px;
      padding-bottom: 5px;
      font-size: 26px;
      font-weight: 800;
      letter-spacing: 0;
    }
    .title::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: var(--sb-foreground-highlight-high);
      transition: width 0.1s ease;
    }
    &:hover .title::after,
    &:focus .title::after {
      width: 100%;
    }
    .description {
      min-height: calc(1.6 * 4em);
      font-size: 16px;
      line-height: 1.6;
    }
  }
}
</style>
