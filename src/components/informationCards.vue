<template>
  <div class="card">
    <div class="content" :class="{'items-center' : props.isCentered}">
      <div class="title-wrapper" :class="{'text-cyan-600' : props.isHeaderColorPrimary }">
        <fa v-if="props.card_icon" :icon="props.card_icon"/>
        <p>{{ props.title }}</p>
      </div>
      <p v-if="props.text">{{ props.text }}</p>
      <ul v-if="props.skills">
        <li v-for="skill in skills" :key="skill.index">
          <div class="skill-wrapper">
            <div v-if="skill.icon_source" class="icon-wrapper">
              <fa :icon="skill.icon_source" />
            </div>
            <p>{{ skill.item }}</p>
            <div v-if="skill.progress" class="progress">
              {{ skill.progress }}%
            </div>
          </div>
          <progressBar v-if="skill.progress" :progress="skill.progress" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import progressBar from "@/components/progressBar.vue";

const props = defineProps({
  title: String,
  card_icon: String,
  text: String,
  skills: Array,
  isCentered : {
    type: Boolean,
    default: false
  },
  /*  TÍTULO E ICONE DO CARD */
  isHeaderColorPrimary : {
    type: Boolean,
    default : false
  }
});
</script>

<style scoped>
.card {
  @apply mx-auto w-3/4 xl:w-80;
  /* font-family: "Montserrat", sans-serif; */
  /* min-width: 300px; */
  /* min-height: 400px */
}

.card .content {
  @apply flex flex-col gap-3;
}
.card .content .title-wrapper {
  @apply flex flex-row items-center gap-2 text-3xl font-bold;
}

.card .content ul {
  @apply font-medium;
}

.card .content ul li {
  @apply flex flex-col py-1;
}

.card .content ul li .skill-wrapper {
  @apply flex flex-row items-center w-full;
}

.card .content ul li .skill-wrapper .icon-wrapper {
  @apply text-2xl text-cyan-700;
  width: 40px;
  height: 40px;
}

.card .content ul li .skill-wrapper p {
  @apply text-xl;
}

.card .content ul li .skill-wrapper .progress {
  @apply absolute right-0;
}
</style>