<template>
    <h1>{{ props.title }}</h1>
</template>

<script setup>
    import {defineProps} from 'vue'

    const props = defineProps({
        title: String
    })
</script>

<style scoped>
    h1{
        @apply text-black font-bold text-3xl mb-4;
    }
</style>