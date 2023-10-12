<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'

const prontoOffline = ref(false)
const precisoRecarregar = ref(false)

let updateServiceWorker: (() => Promise<void>) | undefined

const onOfflineReady = () => {
  prontoOffline.value = true
}
const onNeedRefresh = () => {
  precisoRecarregar.value = true
}
const close = async () => {
  prontoOffline.value = false
  precisoRecarregar.value = false
}

onBeforeMount(async () => {
  const { registerSW } = await import('virtual:pwa-register')
  updateServiceWorker = registerSW({
    immediate: true,
    onOfflineReady,
    onNeedRefresh,
    onRegistered() {
      console.info('Service Worker registrado.')
    },
    onRegisterError(e) {
      console.error('Ocorreu um erro registrando o Service Worker: ', e)
    },
  })
})
</script>

<template>
  <template v-if="prontoOffline || precisoRecarregar">
    <div
        class="pwa-toast"
        role="alertdialog"
        aria-labelledby="pwa-message"
    >
      <div id="pwa-message" class="mb-3">
        {{
          prontoOffline ? 'O Tech Educa está pronto para uso offline!' : 'Novo conteúdo disponível, atualize para ver as novidades.'
        }}
      </div>
      <button
          v-if="precisoRecarregar"
          type="button"
          class="pwa-refresh"
          @click="updateServiceWorker?.()"
      >
        Recarregar
      </button>
      <button
          type="button"
          class="pwa-cancel"
          @click="close"
      >
        Fechar
      </button>
    </div>
  </template>
</template>

<style>
.pwa-toast {
  position: fixed;
  right: 0;
  bottom: 0;
  margin: 16px;
  padding: 12px;
  border: 1px solid #8885;
  border-radius: 4px;
  z-index: 100;
  text-align: left;
  box-shadow: 3px 4px 5px 0 #8885;
  background-color: var(--vp-c-bg);
}
.pwa-toast #pwa-message {
  margin-bottom: 8px;
}
.pwa-toast button {
  border: 1px solid #8885;
  outline: none;
  margin-right: 5px;
  border-radius: 2px;
  padding: 3px 10px;
}
</style>