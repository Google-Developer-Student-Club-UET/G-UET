<template>
  <span class="text-xs text-gray-600">
    © Copyright {{ currentYear }}, All Rights Reserved by Google Deveploper Student Clubs - UET
  </span>
</template>

<script setup lang="ts">
import type { CommonCopyRightProps } from '~/types/common'

defineProps<CommonCopyRightProps>()

const currentYear = computed(() => new Date().getFullYear())
</script>
