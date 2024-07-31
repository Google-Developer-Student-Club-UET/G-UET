<template>
  <UContainer class="flex flex-col text-black md:flex-row">
    <div class="mt-20 w-full">
      <CommonSearch @search="handleSearch" placeholder="Find opportunities" />
      <HomeWeAlways :values="values" transition-time="5000" :details="details" />
    </div>
  </UContainer>
</template>

<script setup>
const handleSearch = (searchData) => {
  console.log(searchData)
}

const values = ref([
  {
    src: './value.png',
    description: 'Stay Humble'
  },
  {
    src: './value.png',
    description: 'Show Care'
  },
  {
    src: './value.png',
    description: 'Be Enthusiastic'
  }
])

const details = ref(['Lorem 1', 'Lorem 2', 'Lorem 3'])
</script>
