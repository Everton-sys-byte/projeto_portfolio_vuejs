<template>
  <div class="progress-container">
    <div class="progress-bar" :style="{ width: `${props.progress}%` }"></div>
  </div>
</template>

<script setup>
    const props = defineProps({
        progress: {
            type: Int16Array,
            required: true
        }
    })
</script>

<style setup>
.progress-container {
  @apply relative bg-gray-300 shadow-lg;
  border-radius: 4px;
  overflow: hidden;
  height: 8px;
}

.progress-container .progress-bar {
  @apply bg-cyan-600 absolute top-0 left-0;
  border-radius: 4px;
  height: 7px;
}
</style>