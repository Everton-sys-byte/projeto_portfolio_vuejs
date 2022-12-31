<template>
    <div class="knowledge">
        <div class="content">
            <div class="title-information">
                <DefaultTitle title="Meus Projetos"/>
                <div class="information-projects">
                    <p>{{ information_projects }}</p>
                    <PrimaryButton information="Visualizar repositórios"/>
                </div>
            </div>
            <ul>
                <li v-for="knowledges in listOfKnowledges " :key="knowledges.index" >
                    <HorizontalCards 
                    :card_image="knowledges.card_image" 
                    :card_title="knowledges.card_title"
                    :card_information="knowledges.card_information"
                    :card_last="knowledges.card_last"
                    />
                </li>
            </ul>
        </div>
    </div>
</template>


<script setup>
    import DefaultTitle from '@/components/DefaultTitle.vue'
    import HorizontalCards from '@/components/HorizontalCards.vue'
    import PrimaryButton from '@/components/PrimaryButton.vue'
    import {ref} from 'vue'

    let information_projects = ref('Já produzi projetos voltados para à faculdade e para aumentar o meu nível de aprendizado, tais projetos são públic e podem ser vistos no meu perfil no Github.')

    let listOfKnowledges = [
        {
            card_image: "https://kinsta.com/pt/wp-content/uploads/sites/3/2021/12/front-end-developer.png",
            card_title: "Desenvolvedor Front-end",
            card_information: "Testesafdsafadf"
        },
        {
            card_image: "https://alterrasoft.com/wp-content/uploads/2019/05/backend-for-article-2.jpg",
            card_title: "Desenvolvedor Back-end",
            card_information: "dafssdfasd"
        },
        {
            card_image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png",
            card_title: "Desenvolvedor Laravel",
            card_information: "Sou desenvolvedor Laravel"
        },
        {
            card_image: "https://vuejs.org/images/logo.png",
            card_title: "Desenvolvedor VueJS 3",
            card_information: "Sou desenvolvedor de VueJS 3",
            card_last: true
        }
    ]

    /*
    const addAnimation = (element) => {

    }
    */
</script>

<style scoped>
    .knowledge{
        @apply container min-w-full bg-white px-14 py-3 gap-1;
        min-height: 450px;
    }

    .content {
        @apply flex flex-row w-full self-center items-center justify-between gap-2;
        height: 400px;
    }

    .title-information {
        @apply w-2/5
    }

    .information-projects{
        @apply text-black;
        max-height: 300px;
    }

    .information-projects > p {
        @apply mb-3 text-sm
    }

    ul {
        @apply h-fit flex flex-col 
    }

</style>

