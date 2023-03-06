<template>
  <navBar />
  <main>
    <section class="apresentation-wrapper">
      <div class="social-networks">
        <ul>
          <li v-for="network in networks" :key="network.name">
            <img
              src="@/assets/icons/svgs/linkedin.svg"
              :alt="network.name"
            />
          </li>
        </ul>
      </div>
      <div class="content">
        <p class="introduction">Olá, sou Everton Soares</p>
        <p class="skill">Full Stack Developer</p>
        <div class="little-about">
          Aprendendo na prática sobre: UX, Docker, Kubernets, OWASP. Sou
          aficionado por novas tecnologias, adoro conhecer novos lugares e ter
          novas experiências. Possuo habilidades com PHP, Java, Javascript, Vue,
          Laravel dentre outras tecnologias que uso para desenvolvimento web.
        </div>
        <button class="btn">Entrar em contato</button>
      </div>
      <div class="image-wrapper">
        <img
          src="@/assets/images/Happy-Person-Free-Download-PNG.png"
          width="500px"
          height="500px"
          alt="eu"
        />
      </div>
    </section>
    <section class="about"></section>
  </main>
</template>

<script setup>
import navBar from "@/components/navBar.vue";

let networks = [
  { name: "Linkedin", url: "#", image_source: "linkedin.svg" },
  { name: "GitHub", url: "#", image_source: "linkedin.svg" },
];
</script>


<style scoped>
/* APRESENTATION */
.apresentation-wrapper {
  @apply w-full px-16 flex items-center justify-around;
  height: calc(100vh - 60px);
}

.apresentation-wrapper .social-networks ul {
  @apply flex flex-col gap-4
}

.apresentation-wrapper .content {
  @apply flex flex-col justify-center gap-3;
  width: 500px;
}

.apresentation-wrapper .content .introduction {
  @apply text-4xl font-bold;
}

.apresentation-wrapper .content .skill {
  @apply text-xl font-medium text-gray-500;
}

.apresentation-wrapper .content .little-about {
  @apply text-gray-500;
}

.btn {
  @apply rounded py-2 px-10 text-white bg-blue-700;
  width: fit-content
}

.apresentation-wrapper .image-wrapper {
  @apply relative bg-blue-700 overflow-hidden;
  width: 350px;
  height: 350px;
  border-radius: 32% 68% 58% 42% / 38% 32% 68% 62%;
}

.apresentation-wrapper .image-wrapper img {
  @apply absolute bottom-0;
}

/* ABOUT */
.about {
  /* @apply bg-blue-700; */
  height: 500px;
}
</style>
