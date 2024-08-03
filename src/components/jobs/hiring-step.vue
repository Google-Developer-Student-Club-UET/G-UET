<template>
  <div
    class="mx-auto flex min-w-[180px] flex-col items-center gap-2"
    @click="changeIndex"
    :class="!isDetailOn && 'opacity-60'"
  >
    <CommonRoundedIcon :icon="icon" color="primary" size="lg" />
    <span class="text-xl">{{ name }}</span>
    <span class="text-base sm:hidden" :class="!isDetailOn && 'hidden'">{{ detail }}</span>
  </div>
</template>

<script setup lang="ts">
import type { JobsHiringStepProps } from '~/types/jobs'

const props = defineProps<JobsHiringStepProps>()

const emit = defineEmits<{ (e: 'changeStep', id: number): void }>()

const changeIndex = () => {
  emit('changeStep', props.id)
}
</script>
