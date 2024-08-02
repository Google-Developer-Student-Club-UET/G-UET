<template>
  <div class="flex space-x-6 pt-6">
    <nuxt-link v-for="button in buttons" :key="button.path" :to="button.href">
      <UButton
        color="gray"
        size="xl"
        class="border border-gray-300 rounded-full h-[50px] text-gray-600 hover:bg-gray-200 hover:text-black transition-colors cursor-pointer"
      >
        <NuxtImg :src="button.path" alt="" class="w-[20px] h-[20px]" />
      </UButton>
    </nuxt-link>
  </div>
</template>

<script setup lang="ts">
const buttons = ref([
  { path: '/facebook.png', href: 'https://facebook.com' },
  { path: '/linkedin.png', href: 'https://linkedin.com' },
  { path: '/github.png', href: 'https://github.com' },
  { path: '/email.png', href: 'mailto:example@example.com' },
  { path: '/instagram.png', href: 'https://instagram.com' }
]);
</script>
