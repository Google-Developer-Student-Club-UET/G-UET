<template>
  <div class="w-[332px] sm:w-[420px]">
    <UInput
      size="lg"
      color="black"
      variant="outline"
      icon="i-heroicons-magnifying-glass"
      :placeholder="placeholder"
      v-model="searchData"
      @keyup.enter="handleSearch"
      :ui="{
        rounded: 'rounded-full',
        color: { black: { outline: 'border border-gray-300' } },
        icon: { trailing: { pointer: '' } }
      }"
    >
      <template #trailing>
        <div class="hidden sm:block">
          <UButton
            color="primary"
            label="Search"
            class="z-10 text-white"
            size="xs"
            :ui="{ base: 'text-white', rounded: 'rounded-full' }"
            @click="handleSearch"
            :loading="loading"
            :disabled="!searchData"
            :class="!searchData && 'cursor-not-allowed'"
          />
        </div>
      </template>
    </UInput>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<CommonSearchProps>(), {
  placeholder: 'Search',
  loading: false
})

import type { CommonSearchProps } from '~/types/common'

const searchData = ref('')

const emit = defineEmits<{
  (e: 'search', searchData: string, filtersOption?: string[]): void
}>()

const handleSearch = () => {
  if (searchData.value) emit('search', searchData.value)
}
</script>
