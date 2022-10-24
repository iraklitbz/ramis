<template>
  <div class="general">
    <Header
      :color-white="true"
    />
    <div class="block sm:flex sm:fixed left-0 top-0 w-full z-10 h-screen">
      <div class="main-bg h-96 sm:h-auto w-full sm:w-6/12 mb-14 sm:mb-0"></div>
      <div class="w-full sm:w-6/12 flex flex-col justify-center px-6 sm:px-14">
        <ul>
          <li class="font-bold text-base">Ramis Palma</li>
          <li class="text-base">Paseo Mallorca 15, bajos</li>
          <li class="text-base">07011 Palma de Mallorca</li>
          <li class="text-base">T. 971 737 777</li>
          <li class="text-base">info@ramis.com</li>
        </ul>
        <ul class="mt-14">
          <li class="font-bold text-base">Ramis Marratxi</li>
          <li class="text-base">C/ Miguel de los Santos Oliver, 7b bajos</li>
          <li class="text-base">07011 Palma de Mallorca</li>
          <li class="text-base">T. 971 737 777</li>
          <li class="text-base">info@ramis.com</li>
        </ul>
        <ul class="mt-14">
          <li class="font-bold text-base">Ramis Bonanova</li>
          <li class="text-base">C/ Miguel de los Santos Oliver, 7b bajos</li>
          <li class="text-base">07011 Palma de Mallorca</li>
          <li class="text-base">T. 971 737 777</li>
          <li class="text-base">info@ramis.com</li>
        </ul>
        <div class="social mt-14">
          <span class="font-bold text-base">Siguenos</span>
          <ul class="mt-10 flex">
            <li class="text-base mr-14"><a href="/" class="cursor-pointer opacity-70 hover:opacity-100 inline-flex items-center" target="_blank"><load-svg name="facebook" class="w-6 mr-4"></load-svg>@ramis</a></li>
            <li class="text-base"><a href="/" class="cursor-pointer opacity-70 hover:opacity-100 inline-flex items-center" target="_blank"><load-svg name="instagram" class="w-6 mr-4"></load-svg>@ramis</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import loadSvg from '../components/loadSvg.vue'
export default {
  components: { loadSvg },
  name: 'ContactoPage'
}
</script>
<style scoped>
  .main-bg {
    background-image: url('https://picsum.photos/500/500');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }
</style>
