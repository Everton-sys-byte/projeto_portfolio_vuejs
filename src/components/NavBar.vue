<template>
  <div class="nav-bar" id="nav-bar">
    <ul>
      <li
        v-for="(listItem , index) in listItems"
        :key="listItem.index"
        @click="moveTopOfPage(index)"
        :class="[listItem.isActive ? 'active' : '']"
      >
        <a :href="listItem.name != 'inicio' ? `#${listItem.name}` : '#'">{{ listItem.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const listItems = ref([
  { name: "inicio", isActive: true },
  { name: "sobre", isActive: false },
  { name: "habilidades", isActive: false },
  { name: "contato", isActive:false },
]);

onMounted(()=>{
  window.addEventListener('scroll',addActiveNavBar)

  /* INTERSECT OBSERVER */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => { 
      if(entry.isIntersecting){
        /* deixa o isActive igual a false para o que estiver ativo */
        removeIsActive()
        const headerTitleIntersected = entry.target.getAttribute('id')
        const indexFound = listItems.value.findIndex(listItem => listItem.name == headerTitleIntersected)
        listItems.value[indexFound].isActive = true
      }
    })
  }, {
    rootMargin: "0px 0px -90% 0px"
  })

  document.querySelectorAll('section').forEach((section) => {
    observer.observe(section)
  })
})

const addActiveNavBar = () => {
  const navBar = document.getElementById('nav-bar')
  /* pegando onde ta o scroll na página */
  let scrollY = window.scrollY

  /* operador ternário */
  scrollY > 60 ? navBar.classList.add('active')  : navBar.classList.remove('active')
}

const moveTopOfPage = (index) => {
  index == 0 ? window.scrollTo(0,0) : ''
}

const removeIsActive = () => {
  const foundIndex = listItems.value.findIndex(listItem => listItem.isActive == true)
  listItems.value[foundIndex].isActive = false
}

</script>
<style scoped>

/* com o INTERSECTOBSERVER estas classes de hover não fazer sentido */
/* .nav-bar ul li:hover {
  @apply text-cyan-500;
}

.nav-bar ul li:hover::after {
  width: 100%;
}  */

/* active classes */
/* NAV-BAR */
.nav-bar {
  @apply w-full absolute top-0 bg-white;
  z-index: 10;
}
.nav-bar ul {
  @apply flex flex-row justify-center items-center gap-2 uppercase font-medium;
  height: 60px;
}
.nav-bar.active {
  @apply sticky top-0; 
  animation: addNavBar .5s ease forwards;
}

/* ANIMAÇÃO NO NAV-BAR QUANDO O USUÁRIO DA SCROLL NA TELA */
@keyframes addNavBar {
  from {top:-60px}
  to {top: 0px}
}

/* NAV-BAR UL LI */
/* ANIMAÇÕES DOS LI (QUANDO É ATIVADO) */

.nav-bar ul li::after {
  @apply relative bg-cyan-500;
  content: "";
  display: block;
  width: 0%;
  height: 2.5px;
  transition: width 0.5s ease;
}

.nav-bar ul li.active {
  @apply text-cyan-700;
}

.nav-bar ul li.active::after {
  width: 100%;
}

</style>