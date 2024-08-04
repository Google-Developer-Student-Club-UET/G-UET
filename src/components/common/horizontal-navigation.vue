<template>
  <UHorizontalNavigation :links="links" class="flex hidden justify-end sm:block">
    <template #default="{ link, isActive }">
      <span :class="isActive && 'text-gray-900'" class="group-hover:text-primary">{{
        link.label
      }}</span>
    </template>
  </UHorizontalNavigation>
</template>

<script setup lang="ts">
const links = ref([
  { label: 'Home', to: '/' },
  { label: 'Job Opportunities', to: '/jobs' },
  { label: 'Members', to: '/members' },
  { label: 'Event (Coming soon)', to: '/events' }
])
</script>
