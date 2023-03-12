<template>
    <transition name="image-animation" appear>
        <div class="image-wrapper">
          <img
            src="@/assets/images/removed_bg_linkedin_image.png"
            alt="eu"
          />
        </div>
      </transition>
</template>

<style scoped>
.image-wrapper {
  @apply relative bg-cyan-600 overflow-hidden;
  width: 500px;
  height: 500px;
  border-radius: 32% 68% 58% 42% / 38% 32% 68% 62%;
}

.image-wrapper img {
  @apply absolute bottom-0;
  /* CENTRALIZANDO A IMAGEM DO JEITO ANTIGO */
  transform: translateX(50%);
  right: 50%
  /* -------------------------------------- */;
  width: auto;
  height: 450px;
}

/* ANIMAÇÕES */
.image-animation-enter-active {
  animation: animateImageScale .5s ease;
}

@keyframes animateImageScale {
  0% {transform: scale(0);}
  50% {transform: scale(1.1);}
  100% {transform: scale(1);}
}

</style>