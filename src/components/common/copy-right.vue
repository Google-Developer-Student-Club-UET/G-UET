<template>
  <span :class="`text-[${fontSize}] text-gray-600 sm:pt-10 pt-4`">
    © Copyright 2024, All Rights Reserved by Google Deveploper Student Clubs - UET
  </span>
</template>

<script setup lang="ts">
import type { CommonCopyRightProps } from '~/types/common'

defineProps<CommonCopyRightProps>()
</script>
