<template>
  <UButton
    :color="color"
    :class="[
      size === 'lg' ? 'h-[100px] w-[100px]' : 'h-16 w-16',
      onlyView && 'hover:cursor-default',
      'flex items-center rounded-full hover:bg-blue-500'
    ]"
  >
    <template #trailing>
      <UIcon :name="icon" class="mx-auto" :class="size === 'lg' ? 'h-16 w-16' : 'h-10 w-10'" />
    </template>
  </UButton>
</template>

<script setup lang="ts">
import type { CommonRoundedIconProps } from '~/types/common'

defineProps<CommonRoundedIconProps>()
</script>
