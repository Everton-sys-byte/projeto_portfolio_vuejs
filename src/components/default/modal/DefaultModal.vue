<template>
    <div class="modal" 
    :class="{
            'block' : props.modal_Status,
            'animate-modal' : props.modal_Status,
            'hidden' : !props.modal_Status,
            }">
        <div class="modal-header">
            <div class="modal-title">{{ props.modal_Title }}</div>
            <CloseIcon @click="$emit('closeModal')" :size="25" class="icon"/>
        </div>
        <div class="modal-content">
            <div class="modal-body">
                <div v-if="props.modal_Data_Type == 'linguagens'" class="wrapper">
                    <div class="linguagens">
                        <p v-for="linguagem in props.modal_Linguagens " :key="linguagem.index" class="linguagens">
                            {{ linguagem }}
                        </p>
                    </div>
                    <div class="frameworks">
                        <p v-for="framework in props.modal_Frameworks" :key="framework.index">
                            {{ framework }}
                        </p>
                    </div>
                </div>  
                <div class="plain-text">
                    
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
        animation: iconAnimation 1s infinite alternate ease-in-out;
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
        @apply absolute w-full h-4/5 bg-slate-200 rounded py-2 px-8 shadow-md shadow-slate-500 border-2 border-yellow-700
    }

    .modal-header {
        @apply flex flex-row justify-between align-middle  border-b border-gray-400 py-3
    }
    .modal-title {
        @apply font-bold text-2xl
    }

    .modal-body {
        @apply mt-3
    }

    .animate-modal {
        animation: modalAnimate 1s ease;
    }

    @keyframes modalAnimate {
        from {
            transform: translateY(-20px);
            opacity: 0;
            display: none;
        }
        to {
            transform: translateY(0px);
            opacity: 1;
        }
    }
</style>