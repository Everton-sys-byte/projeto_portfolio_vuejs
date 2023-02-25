<template>
  <navBar />
  <main>
    <section class="apresentation-wrapper">
      <span class="apresentation">
        <p class="introduction">Olá, eu sou Everton Soares</p>
        <div class="skills">Sou desenvolver web fullstack</div>
        <button class="btn">Sobre</button>
      </span>
    </section>
  </main>
</template>

<script setup>
import navBar from "@/components/navBar.vue";
</script>


<style scoped>
main {
  @apply relative w-screen;
}

.apresentation-wrapper {
  @apply px-16 flex items-center;
  height: 600px
}
.apresentation-wrapper .apresentation .introduction {
  @apply uppercase text-3xl font-bold;
}

main .apresentation .skills {
  @apply uppercase text-lg;
}

.btn {
  @apply rounded p-2 text-white;
  background: blue;
  width: 200px;
}
</style>
