<template>
  <nuxt-link to="/">
    <NuxtImg src="/logo.png" :height="height" :class="'h-' + height" />
  </nuxt-link>
</template>

<script setup lang="ts">
import type { CommonLogoProps } from '~/types/common'

defineProps<CommonLogoProps>()
</script>
