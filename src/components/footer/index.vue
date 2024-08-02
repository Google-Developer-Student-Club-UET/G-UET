<template>
  <div :class="['fixed bottom-0 w-full bg-gray-200 py-6 border-t border-gray-300', { 'footer-toggle': isToggle }]">
    <div class="relative flex flex-col px-10 items-start space-y-4">
      <CommonLogo :height="logoHeight" />
      <CommonCopyRight />
      <CommonIconButton />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()
const logoHeight = computed(() => (width.value ? 24 : 32))

// handle toggle footer when scroll to bottom
const isToggle = ref(false)

const handleScroll = () => {
  const scrollTop = window.scrollY
  const documentHeight = document.documentElement.scrollHeight
  const windowHeight = window.innerHeight

  isToggle.value = scrollTop + windowHeight >= documentHeight
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
