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
        @apply p-2 w-1/2 rounded-3xl bg-transparent border border-white text-yellow-500 mt-2 shadow-sm shadow-black ;
    }
</style>