<template>
    <div class="nav-bar">
        <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Habilidades</a></li>
            <li><a href="#">Contato</a></li>
        </ul>
    </div>
</template>

<style scoped>
    .nav-bar {
        @apply w-screen bg-white;
        z-index: 10;
    }

    ul {
        @apply py-2 flex flex-row justify-center items-center gap-2 text-black uppercase;
        height: 60px;
    }
</style>