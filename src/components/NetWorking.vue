<template>
    <div class="networking">
        <ul>
            <li v-for="socialMedia in netWorks" :key="socialMedia.id">
                <a :href="socialMedia.url">
                   <img :src="socialMedia.icon" :alt="socialMedia.type">
                </a>
            </li>
        </ul>
    </div>
</template>

<script setup>

    let netWorks = [
        {
            id:1,
            type: 'Linkedin',
            url: 'url',
            icon: '../../icons/linkedin.svg'
        },
        {
            id:2,
            type: 'Github',
            url: 'https://github.com/Everton-sys-byte',
            icon: '../../icons/github.svg'
        }
    ]

</script>

<style scoped>

    .networking {
        min-width: 80px;
    }

    .networking > ul {
        @apply flex justify-end w-full gap-2
    }

</style>