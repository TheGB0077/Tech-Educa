---
layout: home
title: Página Inicial
head:
  - ['meta', {property: 'og:title', content: 'Tech Educa'}]
---

<script setup lang="ts">
import Home from '@theme/components/Home.vue';
import topicos from "./routes_topicos";
import caminhos from "./routes_caminhos";
</script>

<Home
:linksTopicos="topicos"
:linksCaminhos="caminhos"
/>
