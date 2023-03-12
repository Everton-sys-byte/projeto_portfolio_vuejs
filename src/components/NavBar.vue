<template>
  <div class="nav-bar" id="nav-bar">
    <ul>
      <li
        v-for="(listItem , index) in listItems"
        :key="listItem.index"
        @click="addIsActive(index)"
        :class="{ active: listItem.isActive}"
      >
        <a :href="`#${listItem.name}`">{{ listItem.name }}</a>
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
})

const addActiveNavBar = () => {
  const navBar = document.getElementById('nav-bar')
  /* pegando onde ta o scroll na página */
  let scrollY = window.scrollY

  /* operador ternário */
  scrollY > 60 ? navBar.classList.add('active')  : navBar.classList.remove('active')
}

const addIsActive = (index) => {
  /* filtrando no array de listItems o objeto que isActive é igual a true (pega o index) */
  let itemFoundIndex = listItems.value.findIndex((listItem => listItem.isActive == true))
  
  /* voltando no vetor de listItems colocando o index que vem da filtragem e setando isActive para false */
  listItems.value[itemFoundIndex].isActive = false

  /* deixando o novo item da lista com o padrão isActive igual a true */
  listItems.value[index].isActive = true

  /* se o usuário clicar em inicio, move o scroll para as coordenadas X:0 e Y:0 */
  if(index == 0)
    window.scrollTo(0,0)
}
</script>
<style scoped>
.nav-bar {
  @apply w-full absolute bg-white;
  z-index: 10;
}

.nav-bar ul {
  @apply flex flex-row justify-center items-center gap-2 uppercase font-medium;
  height: 60px;
}

/* animações no after dos li's */
.nav-bar ul li::after {
  @apply relative bg-cyan-500;
  content: "";
  display: block;
  width: 0%;
  height: 2.5px;
  transition: width 0.5s ease;
}

.nav-bar ul li:hover {
  @apply text-cyan-500;
}

.nav-bar ul li:hover::after {
  width: 100%;
}

/* active classes */

/* nav-bar */
.nav-bar.active {
  @apply sticky; 
  animation: addNavBar .5s ease forwards;
}

@keyframes addNavBar {
  from {top:-60px}
  to {top: 0px}
}

/* ul */
.nav-bar ul li.active {
  @apply text-cyan-700;
}

.nav-bar ul li.active::after {
  width: 100%;
}
</style>