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
                <li v-for="(knowledges, index) in listOfKnowledges " :key="knowledges.index">
                    <HorizontalCards 
                    :card_image="knowledges.card_image" 
                    :card_title="knowledges.card_title"
                    :card_information="knowledges.card_information"
                    :card_last="knowledges.card_last"
                    @showModal="showModal(index)"
                    />
                </li>
            </ul>
            <DefaultModal v-show="modal_status" @closeModal="closeModal" :modal_Data_Type="modal_data_type" 
            :modal_Title="modal_title" :modal_Linguagens="modal_linguagens" 
            :modal_Frameworks="modal_frameworks" :modal_Databases="modal_databases"
            :modal_Status="modal_status"/>
        </div>
    </div>
</template>


<script setup>
    import DefaultTitle from '@/components/default/title/DefaultTitle.vue'
    import HorizontalCards from '@/components/HorizontalCards.vue'
    import PrimaryButton from '@/components/default/button/PrimaryButton.vue'
    import DefaultModal from '@/components/default/modal/DefaultModal.vue'
    import {ref} from 'vue'

    let information_projects = ref('Já produzi projetos voltados para à faculdade e para aumentar o meu nível de aprendizado, tais projetos são públic e podem ser vistos no meu perfil no Github.')

    //modal variables
    var modal_status = ref(false)
    var modal_title = ""
    var modal_linguagens = ""
    var modal_frameworks = ""
    var modal_data_type = ""
    var modal_databases = ""

    let listOfKnowledges = [
        {
            card_image: "https://kinsta.com/pt/wp-content/uploads/sites/3/2021/12/front-end-developer.png",
            card_title: "Desenvolvedor Front-end",
            conhecimentos: {
                    title_modal: 'Conhecimentos front-end',
                    linguagens: [
                        'HTML5', 
                        'CSS3'
                    ],
                    frameworks: [
                        'Bootstrap5',
                        'TailwindCSS',
                        'VueJS 3',
                    ]
                },
            modal_data_type: 'linguagens'
            
        },
        {
            card_image: "https://alterrasoft.com/wp-content/uploads/2019/05/backend-for-article-2.jpg",
            card_title: "Desenvolvedor Back-end",
            conhecimentos: {
                    title_modal: 'Conhecimentos back-end',
                    linguagens: [
                        'PHP8',
                        'Java'
                    ],
                    frameworks: [
                        'Laravel'
                    ],
                    databases: [
                        'MySQL',
                        'SQLServer',
                        'Firebase'
                    ]
                },
            modal_data_type: 'linguagens'
            
        },
        {
            card_image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png",
            card_title: "Sistemas operacionais",
            conhecimentos: {
                title_modal: "Conhecimentos em sistemas operacionais",
                text: "Conheço sistemas operacionais como o Linux e o Windows."
            },
            modal_data_type: 'sistemas'
        },
        {
            card_image: "https://vuejs.org/images/logo.png",
            card_title: "Utilitários",
            conhecimentos: {
                title_modal: "Utilitários e padrões de projetos",
                text: "Conheço alguns padrões de projeto como clean code, MVC e POO"
            },
            modal_data_type: 'utilitarios',
            card_last: true
        }
    ]


    const showModal = (index) => {
        //não esquecer o value para a reatividade funcionar caso seja um boolear ou um interger
        modal_status.value = true
        modal_data_type = listOfKnowledges[index].modal_data_type
        modal_title = listOfKnowledges[index].conhecimentos.title_modal
        if(modal_data_type === 'linguagens')
        {
            modal_linguagens = listOfKnowledges[index].conhecimentos.linguagens
            modal_frameworks = listOfKnowledges[index].conhecimentos.frameworks
            modal_databases = listOfKnowledges[index].conhecimentos.databases
        }

        //modal_information.value = Array.from(listOfKnowledges[index].conhecimentos.linguagens)
    }

    const closeModal = () => {
        modal_status.value = false
    }
</script>

<style scoped>
    .knowledge{
        @apply container min-w-full bg-white px-14 py-3 gap-1;
        min-height: 450px;
    }

    .content {
        @apply relative flex flex-row w-full self-center items-center justify-between gap-2;
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

