<template>
  <div class="social-networks">
    <transition-group 
    tag="ul" :class="props.orientation"
    @before-enter="beforeEnter" 
    @enter="enter"
     appear>
      <li v-for="(network, index) in networks" :key="network.name" :data-index="index">
        <a :href="network.url" target="__blank"><fa :icon="`fa-brands ${network.icon_source}`" :alt="network.name" /></a>
      </li>
    </transition-group>
  </div>
</template>

<script setup>
import gsap from 'gsap'

const props = defineProps( {
  orientation : {
    type : String,
    required : true,
  }
})

const networks = [
  { name: "Twitter", url: "https://twitter.com/PDev_Everton", icon_source: "fa-twitter" },
  { name: "GitHub", url: "https://github.com/Everton-sys-byte", icon_source: "fa-github" },
  { name: "Linkedin", url: "https://www.linkedin.com/in/deveverton/", icon_source: "fa-linkedin-in" },
];


/* ANIMAÇÕES */
const beforeEnter = (element) => {
    element.style.opacity = 0
    element.style.transform = 'translateX(-20px)'
}

const enter = (element, done) =>{ 
    gsap.to(element, {
        x: 0,
        opacity: 1,
        duration: 0.4,
        delay: (element.dataset.index * .3),
        onComplete: done,
    })
}
</script>

<style>
    .social-networks ul {
        @apply flex gap-2;
    }

    .social-networks ul li {
        @apply text-3xl text-cyan-600
    }

    .social-networks ul li:hover {
        @apply text-cyan-700;
    }

    .row {
      @apply flex-row
    }

    .col {
      @apply flex-col
    }
</style>