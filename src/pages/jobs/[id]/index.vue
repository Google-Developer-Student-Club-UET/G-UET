<template>
  <UContainer class="mt-4">
    <div class="flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-8">
      <UButton variant="link" icon="i-heroicons-arrow-uturn-left">Back to jobs</UButton>
      <div class="mx-auto flex flex-col items-center gap-8 sm:mx-0 sm:flex-row">
        <CommonSearch @search="handleSearch" />
        <USelect
          v-model="teamSelect"
          :options="teams"
          class="relative text-black"
          size="lg"
          :ui="{ icon: { traling: { pointer: '', wrapper: 'absolute' } } }"
        >
        </USelect>
      </div>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
const teams = ref([
  'All Teams',
  'Technical',
  'Event',
  'Human Resources',
  'Marketing',
  'Alumni',
  'Board of Leader'
])

const teamSelect = ref(teams.value[0])

const handleSearch = (searchData: string) => {
  console.log(searchData, teamSelect.value)
}
</script>
