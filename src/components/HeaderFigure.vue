<template>
    <div class="figure">
        <img :src="figure_source" :alt="type"/>
    </div>
</template>

<script setup>
    const figure_source = 'https://www.nicepng.com/png/full/7-78595_asian-businessman-png-professional-man-images-png.png'
    const type = "Homem"
</script>

<style scoped>
    .figure {
        @apply w-2/4 flex items-end justify-end overflow-hidden;
        animation: showImage 1s;
    }

    @keyframes showImage {
        0%{ 
            opacity: 0;
            transform: translateX(-10px)
        }
        100% {
            opacity: 1;
            transform: translateX(0px)
        }
    }
</style>