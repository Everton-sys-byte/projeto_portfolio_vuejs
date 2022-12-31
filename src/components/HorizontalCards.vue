<template>
                            <!-- Dando bind em um classe dependendo de um valor -->
    <div class="horizontal-cards" :class="{'border-bottom' : card_last === false}">
        <div class="card-image">
            <img :src="card_image" :alt="card_title">
        </div>
        <div class="card-content">
            <div class="card-title">{{ props.card_title }}</div>
            <div class="card-information">{{ props.card_information }}</div>
        </div>
    </div>
</template>

<script setup>
    import { defineProps} from 'vue';

    const props = defineProps({
        card_image: String,
        card_title: String,
        card_information: String,
        card_last: {
            type: Boolean,
            default: false
        }
    })
</script>

<style scoped>

    .horizontal-cards {
        @apply flex flex-row w-full items-center gap-2 p-2 text-black
    }

    .border-bottom {
        @apply border-b border-black
    }

    .card-image, img {
        @apply w-20 h-20 rounded;
    }

    .card-title {
        @apply text-base 
    }

    .card-content {
        @apply flex flex-col text-sm 
    }
 
</style>