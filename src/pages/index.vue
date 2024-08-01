<template>
  <UContainer class="flex flex-col text-black md:flex-row">
    <div class="mt-20 w-full">
      <CommonSearch @search="handleSearch" placeholder="Find opportunities" />
      <HomeWeAlways />
    </div>
  </UContainer>
</template>

<script setup lang="ts">
const handleSearch = (searchData: string) => {
  console.log(searchData)
}
</script>
