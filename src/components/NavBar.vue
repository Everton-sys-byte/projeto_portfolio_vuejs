<template>
    <div class="nav-bar">
        <ul>
            <li v-for="item in listItems" :key="item.id">{{ item.type }}</li>
        </ul>
        <NetWorking/>
    </div>
</template>

<script setup>
    import NetWorking from '@/components/NetWorking.vue'
    let listItems = [
        {
            id: 1,
            type: 'Home'
        },
        {
            id: 2,
            type: 'Porfólio'
        },
        {
            id: 3,
            type: 'Sobre'
        },
        {
            id: 4,
            type: 'Contato'
        }
    ]
</script>

<style setup>
    .nav-bar {
        @apply container min-w-full py-3 px-14 absolute flex flex-row justify-between items-center z-10
    }

    ul {
        @apply container w-3/6 text-white flex justify-between
    }

</style>