<template>
  <navBar />
  <main>
    <section id="#" class="inicio">
      <socialNetworks />
      <defaultArticle
        transitionName="fade"
        title="Olá, sou Everton Soares"
        subTitle="Full Stack Developer"
        content="Aprendendo na prática sobre: UX, Docker, Kubernets, OWASP. Sou
          aficionado por novas tecnologias, adoro conhecer novos lugares e ter
          novas experiências. Possuo habilidades com PHP, Java, Javascript, Vue,
          Laravel dentre outras tecnologias que uso para desenvolvimento web."
      >
        <template v-slot:button>
          <defaultButton value="Entrar em contato" class="primary" />
        </template>
      </defaultArticle>
      <imageBubble />
    </section>
    <section id="sobre" class="sobre">
      <img class="illustration" v-motion-slide-visible-once-left src="@/assets/illustrations/more_information.svg"/>
      <defaultArticle
        v-motion-slide-visible-once-right
        title="Sobre"
        content="Me chamo Everton Soares, tenho 23 anos e atualmente 
        eu estudo na FATEC Antonio Russo que fica em São Caetano do Sul, 
        antes disse estudei na ETEC de Mauá. Possuo grande
        capacidade de adaptação, amo aprender novas tecnologias e conhecer novos ambientes."
      />
    </section>
    <section id="habilidades" class="habilidades">
      <informationCards
        v-motion-pop-visible-once
        v-for="card in cards"
        :key="card.index"
        :title="card.title"
        :skills="card.skills"
      />
    </section>
    <section id="contato" class="contato"></section>
  </main>
</template>

<script setup>
import navBar from "@/components/navBar.vue";
import socialNetworks from "@/components/socialNetworks.vue";
import defaultArticle from "@/components/defaultArticle.vue";
import imageBubble from "@/components/imageBubble.vue";
import informationCards from "@/components/informationCards.vue";
import defaultButton from "@/components/defaultButton.vue";

/* CARD INFORMATIONS */
const cards = [
  {
    title: "Soft Skills",
    skills: [
      { item: "Observador", icon_source: "fa-solid fa-eye" },
      { item: "Proativo", icon_source: "fa-solid fa-book-open-reader" },
      { item: "Diplomático", icon_source: "fa-solid fa-users" },
      { item: "Prestativo", icon_source: "fa-solid fa-handshake-angle" },
    ],
  },
  {
    title: "Hard Skills",
    skills: [
      { item: "Tailwindcss", icon_source: "", progress: 70 },
      { item: "Vuejs", icon_source: "fa-brands fa-vuejs", progress: 75 },
      { item: "Laravel", icon_source: "fa-brands fa-laravel", progress: 85 },
      { item: "HTML5", icon_source: "fa-brands fa-html5", progress: 90 },
      { item: "CSS3", icon_source: "fa-brands fa-css3-alt", progress: 95 },
      {
        item: "Bootstrap 5",
        icon_source: "fa-brands fa-bootstrap",
        progress: 99,
      },
    ],
  },

  {
    title: "Aprendendo",
    skills: [
      { item: "Docker", icon_source: "fa-brands fa-docker" },
      { item: "Nodejs", icon_source: "fa-brands fa-node" },
      { item: "Kotlin", icon_source: "fa-solid fa-k" },
      { item: "Google Cloud Plataform", icon_source: "fa-solid fa-cloud" },
    ],
  },
];
</script>

<style scoped>
/* HEIGHT DAS SECTIONS */
.inicio,
.sobre,
.habilidades,
.contato {
  height: 100vh;
}

/* APRESENTATION */
.inicio {
  @apply w-full px-16 flex items-center justify-around;
}

/* SOBRE */
.sobre {
  @apply flex flex-row gap-40 p-2 items-center justify-center;
}

.sobre .illustration {
  width: 600px;
  height: 600px;
}

/* HABILIDADES */
.habilidades {
  @apply flex flex-row justify-center items-center;
}
</style>
