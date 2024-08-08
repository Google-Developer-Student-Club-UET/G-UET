<template>
  <UBadge :color="color" :label="team" size="lg" class="mt-2" />
</template>

<script setup lang="ts">
import type { CommonBadgeProps } from '~/types/common'

const props = defineProps<CommonBadgeProps>()

const badgeColors = [
  { team: 'Technical', color: 'red' },
  { team: 'Marketing', color: 'yellow' },
  { team: 'Human Resources', color: 'blue' },
  { team: 'Technical', color: 'red' },
  { team: 'Board of Leader', color: 'white' },
  { team: 'Alumni', color: 'white' }
]

const color = computed(() => {
  const index = badgeColors.findIndex((badgeColor) => badgeColor.team === props.team)
  return badgeColors[index].color
})
</script>
