<template>
  <div
    class="flex w-[250px] cursor-pointer flex-col items-center gap-4"
    :class="!isActive && 'opacity-50'"
  >
    <NuxtImg :src="src" class="rounded-lg" />
    <span class="text-xl font-medium">{{ description }}</span>
  </div>
</template>

<script setup lang="ts">
import type { HomeValueProps } from '~/types/home'

defineProps<HomeValueProps>()
</script>
