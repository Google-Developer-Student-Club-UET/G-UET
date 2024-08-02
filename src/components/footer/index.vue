<template>
  <div class="fixed bottom-0 w-full bg-gray-200 py-8 border-t border-gray-300">
    <UContainer class="relative flex flex-col">
      <CommonLogo :height="logoHeight" />
      <div class="flex flex-col sm:flex-row sm:justify-between w-full space-y-6 sm:space-y-0">
        <CommonCopyRight :fontSize="fontSize" />
        <CommonSocialNavigation />
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()

const logoHeight = computed(() => (width.value < 640 ? 18 : 36))
const fontSize = computed(() => (width.value < 640 ? '14px' : '16px'))
</script>
