<template>
  <div class="flex space-x-4 pt-6">
    <UButton
      v-for="(button, index) in buttons"
      :key="index"
      as="a"
      :href="button.href"
      :icon="button.icon"
      color="gray"
      size="md"
      class="border border-gray-300 rounded-full text-gray-600 hover:bg-gray-200 hover:text-black transition-colors cursor-pointer"
    />
  </div>
</template>

<script setup lang="ts">
const buttons = ref([
  { icon: 'i-ant-design-facebook-filled', href: 'https://facebook.com' },
  { icon: 'i-ant-design-linkedin-filled', href: 'https://linkedin.com' },
  { icon: 'i-ant-design-github-filled', href: 'https://github.com' },
  { icon: 'i-ant-design-mail-filled', href: 'mailto:example@example.com' },
  { icon: 'i-ant-design-instagram-filled', href: 'https://instagram.com' }
])
</script>
