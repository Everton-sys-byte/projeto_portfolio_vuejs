<template>
  <h1 class="title">Teste</h1>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>

  /*diretivas do tailwindCSS*/
  @tailwind base;
  @tailwind components;
  @tailwind utilities;


  .title{
    /*classes*/
    @apply text-xs italic text-center bg-slate-500
  }
</style>
