<template>
    <button>{{props.information}}</button>
</template>

<script setup>
    //tem que importar esse defineProps do vue para não dar erro de função indefinida
    import {defineProps} from 'vue'

    const props = defineProps({
        information: String
    })
</script>

<style scoped>
    button {
        @apply border border-black p-1 w-full rounded bg-gray-900 mt-2 shadow-sm;
        transition: 0.5s;
    }

    button:hover {
        @apply shadow-lg border-white;
        transform: scaleY(1.1);
    }
</style>