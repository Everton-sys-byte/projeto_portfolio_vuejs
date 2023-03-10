<template>
  <div class="nav-bar">
    <ul>
      <li
        v-for="(listItem, /* index */) in listItems"
        :key="listItem.index"
        role="button"
        @click="addClass()"
      >
        {{ listItem.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import {ref} from 'vue'
let listItems = ref([
  { name: "inicio" },
  { name: "sobre" },
  { name: "habilidades" },
  { name: "contato" },
]);

const addClass = () => {

};
</script>

<style scoped>
.nav-bar {
  @apply w-full bg-white;
}

ul {
  @apply py-2 flex flex-row justify-center items-center gap-2 text-black uppercase;
  height: 60px;
}

.active {
  background: red;
}
</style>