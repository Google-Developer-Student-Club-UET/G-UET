<template>
  <h1 class="text-5xl font-bold sm:text-6xl">
    {{ prefix }} <span class="text-primary">{{ text }}</span> {{ suffix }}
  </h1>
</template>

<script setup lang="ts">
import type { CommonTitleTextProps } from '~/types/common'

defineProps<CommonTitleTextProps>()
</script>
