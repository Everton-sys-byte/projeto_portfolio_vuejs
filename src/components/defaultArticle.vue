<template>
  <transition :name="props.transitionName" appear>
    <article>
      <h1 class="title">{{ props.title }}</h1>
      <h2 class="subtitle" v-if="props.subTitle">{{ props.subTitle }}</h2>
      <p class="content">{{ props.content }}</p>
      <slot name="button"></slot>
    </article>
  </transition>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subTitle: {
    type: String,
  },
  content: {
    type: String,
    required: true,
  },
  transitionName: {
    type: String,
  }
});
</script>

<style scoped>
article {
  @apply flex flex-col justify-center gap-3;
/*   font-family: "Montserrat", sans-serif; */
  width: 500px;
}

article .title {
  @apply text-4xl font-bold;
}

article .subtitle {
  @apply text-xl font-medium;
}

article .subtitle, .content {
  @apply text-gray-700;
}

/* ANIMAÇÕES */
.fade-enter-from {
    opacity: 0;
    transform: translateY(-50px);
}

.fade-enter-active{
    transition: .5s ease;
}
</style>