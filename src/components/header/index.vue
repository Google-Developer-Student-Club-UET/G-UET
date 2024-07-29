<template>
  <div class="h-16 w-full border-b border-gray-300 sm:h-20">
    <UContainer class="relative my-auto flex h-full items-center justify-between">
      <div class="flex items-center gap-3">
        <UButton
          icon="i-heroicons-bars-3"
          color="black"
          class="sm:hidden"
          @click="toggleNavigation"
        />
        <CommonLogo :height="logoHeight" />
      </div>
      <div class="flex items-center gap-8">
        <CommonNavigation />
        <UAvatar :src="avatarUrl" :size="avatarSize" class="cursor-pointer" chip-color="primary" />
      </div>
      <CommonVerticalNavigation
        :isNavigationOpen="isNavigationOpen"
        @toggleNavigation="toggleNavigation"
      />
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()
const avatarUrl = ref('https://avatars.githubusercontent.com/u/739984?v=4')

const logoHeight = computed(() => (width.value < 640 ? 16 : 24))
const avatarSize = computed(() => (width.value < 640 ? 'sm' : 'md'))

const isNavigationOpen = ref(false)

const toggleNavigation = () => {
  isNavigationOpen.value = !isNavigationOpen.value
}
</script>
