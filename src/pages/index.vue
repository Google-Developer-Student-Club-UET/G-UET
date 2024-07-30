<template>
  <UContainer class="flex flex-col text-black md:flex-row">
    <CommonSearch @search="handleSearch" placeholder="Find opportunities" />
  </UContainer>
</template>

<script setup>
const handleSearch = (searchData) => {
  console.log(searchData)
}
</script>
