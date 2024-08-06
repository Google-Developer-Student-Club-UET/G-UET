<template>
    <div :class="itemClasses">
        <NuxtImg :src="imgSrc" class="w-1/2 h-72 pr-5" alt="" />
        <span class="flex w-1/2 p-8 items-center">
            {{ description }}
        </span>
    </div>
</template>

<script>
export default {
    props: {
        imgSrc: {
            type: string,
            required: true
        },
        description: {
            type: string,
            required: true
        },
        itemClasses: {
            type: string,
            required: true
        }
    }
}
</script>
