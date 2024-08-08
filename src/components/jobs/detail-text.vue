<template>
  <div class="flex flex-col items-start">
    <div class="flex items-center gap-1.5">
      <UIcon :name="icon" class="h-8 w-8" />
      <span class="text-2xl font-medium"
        >{{ prefix }} <span :class="color">{{ text }}</span></span
      >
    </div>
    <ul class="ml-6 mt-3 list-disc">
      <li v-for="detail in details" :key="detail">{{ detail }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { JobsDetailTextProps } from '~/types/jobs'

const props = defineProps<JobsDetailTextProps>()

const color = computed(() => {
  return `text-${props.color}-500`
})
</script>
