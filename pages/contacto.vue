<template>
    <div class="general">
      <Header
        :color-white="false"
      />
      <div class="flex flex-col sm:flex-row absolute sm:fixed left-0 top-0 w-full z-10 sm:h-screen mb-10 sm:mb-10">
       
        <div class="w-full sm:w-6/12 flex flex-col justify-center px-6 sm:px-14">
          <ul class="mt-10 sm:mt-0">
            <li class="font-bold text-base"><a class="cursor-pointer">Ramis</a></li>
            <li class="text-base">C/ Miguel de los santos oliver 7b, bajos.</li>
            <li class="text-base">C/ Paseo mallorca 15, bajos.</li>
            <li class="text-base">07011 Palma de Mallorca</li>
            <li class="text-base">T. 971 22 28 28</li>
            <li class="text-base">info@ramispromociones.com</li>
          </ul>
          <div class="social mt-14">
            <span class="font-bold text-base">Siguenos</span>
            <ul class="mt-10 flex">
              <li class="text-base"><a href="https://www.instagram.com/ramispromociones/?igshid=YmMyMTA2M2Y%3D" target="_blank" class="cursor-pointer opacity-70 hover:opacity-100 inline-flex items-center"><load-svg name="instagram" class="w-6 mr-4"></load-svg>@ramispromociones</a></li>
            </ul>
        </div>
      </div>
      <div class="main-bg w-full sm:w-6/12 h-96 sm:h-auto"></div>
    </div>
  </div>
</template>
<script>
import loadSvg from '../components/loadSvg.vue'
export default {
  components: { loadSvg },
  name: 'ContactoPage',
  data () {
    return {
      
    }
  }
}
</script>
<style scoped>
  .main-bg {
    background-image: url('assets/images/contacto.jpg');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }
  .box {
    position:relative;
    padding-top:56.25%;
  }
  .iframe {
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
  }
</style>