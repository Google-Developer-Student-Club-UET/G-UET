<template>
  <UContainer class="flex flex-col text-black md:flex-row">
    <div class="mt-20">
      <CommonSearch @search="handleSearch" placeholder="Find opportunities" />
    </div>
  </UContainer>
</template>

<script setup>
const handleSearch = (searchData) => {
  console.log(searchData)
}
</script>
