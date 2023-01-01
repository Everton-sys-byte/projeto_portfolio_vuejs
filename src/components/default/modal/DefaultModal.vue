<template>
    <div class="modal" 
    :class="props.modal_Status ? 'animate-modal' : '' "
    >
        <div class="modal-header">
            <div class="modal-title">{{ props.modal_Title }}</div>
            <CloseIcon @click="$emit('closeModal')" :size="25" class="icon"/>
        </div>
        <div class="modal-content">
            <div class="modal-body">
                <div v-if="props.modal_Data_Type == 'linguagens'" class="wrapper">
                    <div class="linguagens">
                        <h1>Linguangens</h1>
                        <p v-for="linguagem in props.modal_Linguagens " :key="linguagem.index">
                            {{ linguagem }}
                        </p>
                    </div>
                    <div class="frameworks">
                        <h1>Frameworks</h1>
                        <p v-for="framework in props.modal_Frameworks" :key="framework.index">
                            {{ framework }}
                        </p>
                    </div>
                    <div v-if="props.modal_Databases" class="databases">
                        <h1>Banco de dados</h1>
                        <p v-for="database in props.modal_Databases" :key="database.index">
                            {{ database }}
                        </p>
                    </div>
                </div>  
                <div v-else class="plain-text">
                        Teste
                </div>  
            </div>
        </div>
    </div>
</template>

<script setup>
    import {defineProps, defineEmits} from 'vue'
    import CloseIcon from 'vue-material-design-icons/WindowClose.vue'
    const props = defineProps({
        modal_Data_Type: String,
        modal_Title: String,
        modal_Linguagens: Array,
        modal_Frameworks: Array,
        modal_Databases: Array,
        modal_Status: {
            Type: Boolean,
            default: false
        }
    })

    const emit = defineEmits(['closeModal'])
    console.log(emit)
</script>

<style scoped>
    .icon {
        @apply bg-yellow-600 text-white rounded-xl;
        animation: iconAnimation 1s infinite alternate ease-in-out forwards;
        cursor:pointer
    }

    @keyframes iconAnimation {  
        from {
            transform: translateY(0px);
        }
        to{
            transform: translateY(2px);
        }
    }

    .modal {
        @apply absolute w-full h-4/5 bg-gradient-to-r from-neutral-900  to-neutral-800 text-gray-50 rounded-lg py-2 px-8 shadow-lg shadow-slate-500 border-2
    }

    .modal-header{
        @apply flex flex-row justify-between align-middle border-b border-gray-400 py-3
    }
    .modal-title {
        @apply font-bold text-2xl
    }

    .wrapper {
        @apply flex flex-row justify-around
    }

    .linguagens, .frameworks, .databases {
        @apply mt-3
    }

    h1 {
        @apply text-xl
    }

    .animate-modal {
        animation: modalAnimate 1s ease;
    }
    
    @keyframes modalAnimate {
        0% {
            display: none;
        }
        50% {
            display: block;
            transform: translateY(-30px);
            opacity: 0;
        }
        100% {
            transform: translateY(0px);
            opacity: 1;
        }
    }

</style>