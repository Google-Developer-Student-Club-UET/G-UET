<template>
  <UVerticalNavigation
    :links="links"
    :class="!isNavigationOpen && 'hidden'"
    class="absolute left-0 top-full w-full border bg-white pl-4 text-gray-500 sm:hidden"
  />
</template>

<script setup lang="ts">
import type { VerticalNavigationProps } from '~/types/common'

defineProps<VerticalNavigationProps>()

const emit = defineEmits(['toggleNavigation'])

const links = ref([
  { label: 'Home', to: '/', click: () => emit('toggleNavigation') },
  { label: 'Job Opportunities', to: '/jobs', click: () => emit('toggleNavigation') },
  { label: 'Members', to: '/members', click: () => emit('toggleNavigation') },
  { label: 'Event (Coming soon)', to: '/events', click: () => emit('toggleNavigation') }
])
</script>
