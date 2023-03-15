<template>
  <navBar />
  <main>
    <h1>{{ currentSection }}</h1>
    <section id="#" class="inicio">
      <socialNetworks orientation="col" class="hidden lg:block" />
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
          <a href="#contato"><defaultButton value="Entrar em contato" class="primary" /></a>
        </template>
      </defaultArticle>
      <imageBubble />
    </section>
    <section id="sobre" class="sobre">
      <img
        class="illustration"
        v-motion-slide-visible-once-left
        src="@/assets/illustrations/more_information.svg"
      />
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
        v-for="cardSkill in cardSkills"
        :key="cardSkill.index"
        :title="cardSkill.title"
        :skills="cardSkill.skills"
      />
    </section>
    <section id="contato" class="contato">
      <div class="container" v-motion-slide-visible-once-top>
        <informationCards isCentered isHeaderColorPrimary
          v-for="cardContato in cardContatos"
          :key="cardContato.index"
          :title="cardContato.title"
          :text="cardContato.text"
          :card_icon="cardContato.card_icon"
        />
        <socialNetworks orientation="row" />
      </div>
      <form @submit.prevent="" v-motion-slide-visible-once-bottom>
        <div class="form-title-wrapper">
          <fa icon="fa-solid fa-paper-plane" />
          <h2>Nos envie uma mensagem</h2>
        </div>
        <input type="text" name="name" id="name" placeholder="Nome completo" />
        <input type="email" name="email" id="email" placeholder="Email" />
        <textarea rows="8"
          name="mensagem"
          id="mensagem"
          placeholder="Mensagem"
        ></textarea>
        <defaultButton value="Enviar" class="primary" @click="sendForm" />
      </form>
    </section>
  </main>
</template>

<script setup>
import navBar from "@/components/navBar.vue";
import socialNetworks from "@/components/socialNetworks.vue";
import defaultArticle from "@/components/defaultArticle.vue";
import imageBubble from "@/components/imageBubble.vue";
import informationCards from "@/components/informationCards.vue";
import defaultButton from "@/components/defaultButton.vue";

/* CARD DE SKILLS */
const cardSkills = [
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

/* CARD DE CONTATOS */
const cardContatos = [
  {
    card_icon: "fa-solid fa-phone",
    title: "Celular",
    text: "(11) 960818682",
  },
  {
    card_icon: "fa-solid fa-envelope",
    title: "Email",
    text: "everton_dev@hotmail.com",
  },
];

/* onMounted(()=>{
  console.log('mounted')
  /* observer 
  const observer = new IntersectionObserver((/* entradas  entries)=>{
    entries.forEach((entry) =>{
      if(entry.intersectionRatio > 0){
        currentSection.value = entry.target.getAttribute('id')
      }
    })
  })

  document.querySelectorAll('section').forEach((section) => {
    observer.observe(section)
  })
}) 
*/
</script>

<style scoped>
/* HEIGHT DAS SECTIONS */
.inicio,
.sobre,
.habilidades,
.contato {
  @apply flex items-center justify-around;
  min-height: 100vh;
}

/* APRESENTATION */
.inicio {
  @apply w-full flex-col-reverse mt-16 lg:mt-0 lg:flex-row;
}

/* SOBRE */
.sobre {
  @apply p-10 xl:p-0 flex-col lg:flex-row;
}

.sobre .illustration {
  width: 600px;
  height: 600px;
}

/* HABILIDADES */
.habilidades {
  @apply flex-col xl:flex-row flex-wrap;
}

/* CONTATO */
.contato {
  @apply flex-col mt-20 xl:mt-0 lg:flex-row;
}

.contato .container {
  @apply flex flex-col items-center gap-10;
  max-width: calc(100vw / 3);
}
.contato form {
  @apply p-2 flex flex-col gap-10 w-full xl:w-2/4;
  min-height: 400px;
}

.contato form .form-title-wrapper {
  @apply flex flex-row gap-5 items-center text-cyan-600 text-2xl;
  font-family: "Montserrat", sans-serif;
}
.contato form input, textarea {
  @apply p-2;
  outline: none;
  transition: all 0.5s ease;
}

.contato form input:focus,
textarea:focus {
  @apply border border-cyan-600;
}
</style>
