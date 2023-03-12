<template>
    <button class="btn">{{ props.value }}</button>
</template>

<script setup>
    const props = defineProps({
        value:{
            type : String,
            required: true
        }
    })
</script>

<style scoped>
.btn {
  @apply rounded-full py-2 px-10;
  width: fit-content;
}

.primary {
    @apply bg-cyan-600 text-white;
}
</style>