<template>
  <nuxt-link to="/">
    <NuxtImg src="/logo.png" :class="'h-' + height / 4" />
  </nuxt-link>
</template>

<script setup lang="ts">
import type { CommonLogoProps } from '~/types/common'

defineProps<CommonLogoProps>()
</script>
