<script setup lang="ts">
import {computed} from "vue";

const props = defineProps<{
  src: string;
  por: string;
  em?: string;
}>();

const texto = computed(() => {
  if (props.por === 'Freepik') {
    return `Imagem por ${props.por}`;
  }
  return `Imagem por ${props.por} em ` + (props.em ? `${props.em}` : 'Freepik');
});

</script>

<template>
  <p style="font-size:10px"><a style="text-decoration: none; color: var(--vp-c-brand); font-weight: bold" :href="`${props.src}`" target="_blank"><i>{{ texto }}</i></a></p>
</template>
