<template>
  <nuxt-link to="/">
    <NuxtImg src="/logo.png" :height="height" :class="'h-' + height / 4" />
  </nuxt-link>
</template>

<script setup lang="ts">
import type { CommonLogoProps } from '~/types/common'

defineProps<CommonLogoProps>()
</script>
