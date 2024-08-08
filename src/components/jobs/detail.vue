<template>
  <div class="flex flex-col items-start gap-8">
    <div>
      <h2 class="text-4xl font-bold">{{ position }}</h2>
      <CommonBadge :team="team" type="solid" />
    </div>
    <JobsDetailText
      v-for="detail in detailsJob"
      :key="detail.icon"
      :icon="detail.icon"
      :prefix="detail.prefix"
      :text="detail.text"
      :color="detail.color"
      :details="detail.details"
    />
  </div>
</template>

<script setup lang="ts">
import type { JobsDetailProps } from '~/types/jobs'

const props = defineProps<JobsDetailProps>()

const detailsJob = ref([
  {
    icon: 'i-heroicons-document-text',
    prefix: 'Job',
    text: 'description',
    color: 'blue',
    details: props.jobDescription
  },
  {
    icon: 'i-heroicons-code-bracket-square',
    prefix: 'What you will',
    text: 'do',
    color: 'green',
    details: props.jobResponsibility
  },
  {
    icon: 'i-heroicons-question-mark-circle',
    prefix: 'What you will',
    text: 'need',
    color: 'red',
    details: props.jobRequirement
  }
])
</script>
