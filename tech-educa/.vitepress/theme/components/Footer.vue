<script setup lang="ts">

const year = new Date().getFullYear();
</script>

<template>
  <footer>
    <div class="sections">
      <div class="section" >
        <h4>Mapa do Site</h4>
        <ul>
          <li >
            <a :href="'/'">Página Inicial</a>
          </li>

          <li >
            <a :href="'/contribua/como_contribuir'">Como Contribuir</a>
          </li>

          <li >
            <a :href="'/'">Sobre</a>
          </li>


        </ul>
      </div>

      <div class="section" >
        <h4>Comunidade</h4>
        <ul>
          <li >
            <a :href="'https://github.com/TheGB0077/Tech-Educa/discussions'" target="_blank">Github</a>
          </li>

        </ul>
      </div>
    </div>
    <p class="copyright">© 2023 - {{ year }}
      <br>
      Mantido por
      <a :href="'https://github.com/TheGB0077'" target="_blank" style="font-style: italic; color: var(--sb-foreground-highlight)">
        Gabriel Lima
      </a>
      e Contribuidores 😁
      <br>
      Ícones por Phosphor | Imagens por FreePik
    </p>
  </footer>
</template>

<style scoped lang="scss">
@import '../styles/vars';

footer {
  color: #fff;
  background-color: #131519;
}

.sections {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 30px;
  max-width: 950px;
  margin: 0 auto;
  padding: 40px 24px;

  @media (min-width: 1240px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    padding: 90px 40px;
    max-width: calc(var(--vp-layout-max-width) + 16px);
  }
}

.section {
  h4 {
    margin: 0 0 12px;
    font-size: 18px;
    line-height: 1.3;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    @media (min-width: 1000px) {
      margin-bottom: 20px;
    }
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  li {
    margin: 0 -8px;
    font-size: 14px;
    line-height: 1.3;
  }
  a {
    display: block;
    padding: 6px 8px;
    font-weight: 600;
    font-family: Gilroy, system-ui;
  }
}

.copyright {
  width: 100%;
  padding: 20px;
  text-align: center;
  font-size: 13px;
  line-height: 1.35;
  color: #fffd;
  background: #0006;
}
</style>
