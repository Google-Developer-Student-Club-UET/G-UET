<template>
  <div class="flex flex-col items-center gap-6 sm:gap-12">
    <h2>At GDSC-UET, we always</h2>
    <div class="flex w-full">
      <div class="mx-auto flex grow flex-wrap justify-between gap-6">
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
const values = ref([
  {
    src: './value.png',
    description: 'Stay Humble'
  },
  {
    src: './value.png',
    description: 'Show Care'
  },
  {
    src: './value.png',
    description: 'Be Enthusiastic'
  }
])

const details = ref(['Lorem 1', 'Lorem 2', 'Lorem 3'])

const currentIndex = ref(0)

const setIndex = (index: number) => {
  currentIndex.value = index
}
</script>
