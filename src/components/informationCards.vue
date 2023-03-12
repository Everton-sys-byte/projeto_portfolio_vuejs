<template>
  <div class="card">
    <h1 class="title">{{ props.title }}</h1>
    <ul>
      <li v-for="skill in skills" :key="skill.index">
        <div class="skill-wrapper">
          <div v-if="skill.icon_source" class="icon-wrapper">
            <fa :icon="skill.icon_source" />
          </div>
          <p>{{ skill.item }}</p>
          <div v-if="skill.progress" class="progress">{{ skill.progress }}%</div>
        </div>
        <progressBar v-if="skill.progress" :progress="skill.progress"/>
      </li>
    </ul>
  </div>
</template>

<script setup>
import progressBar from "@/components/progressBar.vue"

const props = defineProps({
  title: String,
  skills: Array,
});
</script>

<style scoped>
.card {
  @apply mx-auto flex flex-col gap-3;
  font-family: "Montserrat", sans-serif;
  min-width: 350px; 
  min-height: 400px;
}

.card .title {
  @apply text-4xl font-bold text-black;
}

.card ul {
  @apply font-medium;
}

.card ul li {
  @apply flex flex-col py-1;
}

.card ul li .skill-wrapper {
  @apply flex flex-row items-center w-full;
}

.card ul li .skill-wrapper .icon-wrapper {
  @apply text-3xl text-cyan-700;
  width: 40px;
  height: 40px;
}

.card ul li .skill-wrapper p {
  @apply text-xl;
}

.card ul li .skill-wrapper .progress {
  @apply absolute right-0
}

</style>