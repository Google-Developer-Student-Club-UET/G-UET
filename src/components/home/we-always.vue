<template>
  <div class="flex flex-col items-center gap-12">
    <h2>At GDSC-UET, we always</h2>
    <div class="flex w-full">
      <div class="mx-[100px] flex grow flex-wrap justify-between">
        <HomeValue
          v-for="(value, index) in values"
          :src="value.src"
          :description="value.description"
          :key="value.description"
          :is-active="index === currentIndex"
          @click="setIndex(index)"
        />
      </div>
    </div>
    <span>{{ details[currentIndex] }}</span>
    <UButton size="xl" class="px-20" :ui="{ rounded: 'rounded-full' }">Join us now</UButton>
  </div>
</template>

<script setup lang="ts">
import type { HomeWeAlwaysProps } from '~/types/home'

defineProps<HomeWeAlwaysProps>()

const currentIndex = ref(0)

const setIndex = (index: number) => {
  currentIndex.value = index
}
</script>
