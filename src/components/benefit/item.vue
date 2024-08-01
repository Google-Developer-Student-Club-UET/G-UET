<template>
    <div class="flex gap-8">
        <NuxtImg :src="imgSrc" />
        <div class="flex flex-col justify-center gap-3">
            <h2 :class="titleClasses">{{ title }}</h2>
            <span>{{ description }}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        imgSrc: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        titleClasses: {
            type: Object,
            required: true
        }
    }
}
</script>