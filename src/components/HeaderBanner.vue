<template>
    <div class="main-header">
        <div class="information">
                <p>{{ title }}</p>
                <p>{{ content }}</p>
                <PrimaryButton :information="primaryButtonInformation"/>
        </div>
        <HeaderFigure/>
    </div>
</template>

<script setup>
    import HeaderFigure from '@/components/HeaderFigure.vue'
    import PrimaryButton from '@/components/PrimaryButton.vue'

    import {ref} from 'vue'

    let title = ref('Everton Soares')
    let content = ref('Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dolor ut est? Voluptatum dignissimos delectus voluptatem autem.')

    //primaryButtonInformation
    let primaryButtonInformation = 'Ver mais'

</script>

<style scoped>
    .main-header {
        /*diretiva do tailwindcss @apply*/
        @apply container min-w-full flex items-end justify-between px-14 bg-gray-600;
        min-height: 500px;
    }

    .information {
        @apply w-2/4 self-center text-white;
    }

    .information > p:nth-child(1){
        @apply font-bold text-3xl
    }

    .information > p:nth-child(1)::after{
        @apply bg-white;
        content: '';
        display: block;
        height: 2px;
        border-radius: 2px;
        animation: changeSizeRow 0.5s
    }

    @keyframes changeSizeRow {
        0%{
            width: 0%;
        }
        100%{
            width: 100%;
        }        
    }
</style>>