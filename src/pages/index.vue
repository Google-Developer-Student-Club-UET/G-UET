<template>
  <UContainer class="flex flex-col text-black md:flex-row">
    <div class="mt-20 w-full">
      <CommonSearch @search="handleSearch" placeholder="Find opportunities" />
      <About />
      <HomeWeAlways />
    </div>
  </UContainer>
</template>

<script setup lang="ts"></script>
