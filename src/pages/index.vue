<template>
  <div class=" container flex flex-col px-40 gap-10">
    <div class="flex justify-between items-center">
      <div class="flex flex-col">
        <p class="text-[60px] w-[507px] h-auto tracking-widest "> <span class="text-blue-500">Preparation</span> for
          your <span class="text-blue-600">careers</span></p>
        <SearchInput />
      </div>
      <div>
        <NuxtImg src="/avatar.png" alt="founder MR.DU" />
      </div>
      <div></div>
    </div>
    <div class="flex flex-col gap-10">
      <h1 class="text-center text-[60px]"> <span class="text-blue-500">About</span> us</h1>
      <div class="flex gap-5">
        <NuxtImg src='/about.png' class="w-1/2 h-72 pr-5" alt="" />
        <span class="flex w-1/2 p-8 items-center">
          We are students with a passion for technology, always wanting to bring valuable products to the community.
        </span>
      </div>
      <div class="flex gap-5">
        <span class="flex w-1/2 p-8 items-center">
          Not only that, we are also people who are always ready to share, support and help people in the process of
          studying and learning about technology.
        </span>
        <NuxtImg src='/about.png' class="w-1/2 h-72 pr-5" alt="" />
      </div>
    </div>
    <div class="flex flex-col gap-10 items-center">
      <h1 class="text-center text-[60px]"> <span class="text-blue-500">Benefit</span> that we offer</h1>
      <div class="w-4/5 flex flex-col gap-8">
        <div class="flex gap-8 ">
          <NuxtImg src="/benefit_1.png" />
          <div class="flex flex-col justify-center gap-3">
            <h2 class="text-3xl text-green-500">Leading the trend</h2>
            <span>You can learn, work and create products that using newest technologies</span>
          </div>
        </div>
        <div class="flex gap-8 ">
          <NuxtImg src="/benefit_2.png" />
          <div class="flex flex-col justify-center gap-3">
            <h2 class="text-3xl text-red-500">Caring attentiveness</h2>
            <span>We always be available when you need some help</span>
          </div>
        </div>
        <div class="flex gap-8 ">
          <NuxtImg src="/benefit_3.png" />
          <div class="flex flex-col justify-center gap-3">
            <h2 class="text-3xl text-yellow-500">Leading the trend</h2>
            <span>Working with young people, easy to connect and communicate with us</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>


<script setup lang="ts">
</script>
