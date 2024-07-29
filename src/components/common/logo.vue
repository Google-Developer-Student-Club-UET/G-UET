<template>
  <nuxt-link to="/">
    <NuxtImg src="/logo.png" :height="height" />
  </nuxt-link>
</template>

<script setup lang="ts">
import type { CommonLogoProps } from '~/types/common'

defineProps<CommonLogoProps>()
</script>
