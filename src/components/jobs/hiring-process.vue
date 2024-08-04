<template>
  <div class="flex w-full flex-col items-center gap-14">
    <CommonTitleText prefix="How we" text="hire" />
    <div class="mx-auto flex w-full max-w-[1000px] flex-wrap justify-between gap-4">
      <JobsHiringStep
        v-for="step in hiringSteps"
        :id="step.id"
        :key="step.name"
        :icon="step.icon"
        :name="step.name"
        :detail="step.detail"
        :is-detail-on="currentIndex === step.id"
        @change-step="changeIndex"
      />
    </div>
    <span class="hidden sm:block">{{ currentDetail }}</span>
    <UButton size="xl" class="px-20" :ui="{ rounded: 'rounded-full' }">Join us now</UButton>
  </div>
</template>

<script setup lang="ts">
const currentIndex = ref(0)
const hiringSteps = ref([
  {
    id: 0,
    icon: 'i-heroicons-clipboard-document-list',
    name: 'Application Form',
    detail: 'Step 1'
  },
  {
    id: 1,
    icon: 'i-heroicons-code-bracket-square',
    name: 'Coding Test',
    detail: 'Step 2'
  },
  {
    id: 2,
    icon: 'i-heroicons-microphone',
    name: 'Interviewing',
    detail: 'Step 3'
  },
  {
    id: 3,
    icon: 'i-heroicons-envelope',
    name: 'Waiting for Result',
    detail: 'Step 4'
  }
])

const currentDetail = ref(hiringSteps.value[0].detail)

const changeIndex = (id: number) => {
  currentIndex.value = id
  currentDetail.value = hiringSteps.value[id].detail
}
</script>
