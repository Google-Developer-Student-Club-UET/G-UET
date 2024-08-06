<template>
    <div class="flex flex-col gap-10 justify-center items-center">
        <h1 class="text-center text-[60px]">About us</h1>
        <AboutItem v-for="item in items" :imgSrc="item.imgSrc" :decription="item.description"
            :itemClasses="item.cssClasses" />
    </div>
</template>

<script setup lang="ts">
const items = ref([
    {
        imgSrc: '/about.png',
        description: 'We are students with a passion for technology, always wanting to bring valuable products to the community.',
        cssClasses: "flex-col items-center justify-center sm:flex-row flex"
    },
    {
        imgSrc: '/about.png',
        description: 'Not only that, we are also people who are always ready to share, support and help people in the process of studying and learning about technology.',
        cssClasses: "flex-col items-center justify-center sm:flex-row-reverse flex"
    }
])
</script>
