<template>
  <div class="general">
    <Header
      :color-white="false"
    />
    <div class="block md:flex md:fixed left-0 top-0 w-full z-10 h-screen">
      <div class="w-full md:w-6/12 flex flex-col justify-center px-6 md:px-14">
        <ul>
          <li class="font-bold text-base"><a @click="hanndleMap('palma')" class="cursor-pointer">Ramis Palma</a></li>
          <li class="text-base">Paseo Mallorca 15, bajos</li>
          <li class="text-base">07011 Palma de Mallorca</li>
          <li class="text-base">T. 971 737 777</li>
          <li class="text-base">info@ramis.com</li>
        </ul>
        <ul class="mt-14">
          <li class="font-bold text-base"><a class="cursor-pointer" @click="hanndleMap('marratxi')">Ramis Marratxi</a></li>
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
      <div class="h-96 sm:h-auto w-full md:w-6/12 mb-14 md:mb-0">
          <div class="box md:h-full">
            <iframe allowfullscreen class="iframe" :src="mapUrl" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
          </div>
      </div>
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
      mapUrl: 'https://maps.google.com/maps?q=Paseo%20Mallorca%2015,%20bajos&t=&z=15&ie=UTF8&iwloc=&output=embed',
    }
  },
  methods: {
    hanndleMap (location) {
      if (location === 'palma') {
        this.mapUrl = 'https://maps.google.com/maps?q=Paseo%20Mallorca%2015,%20bajos&t=&z=15&ie=UTF8&iwloc=&output=embed'
      } else if (location === 'marratxi') {
        this.mapUrl = 'https://maps.google.com/maps?q=C/%20Miguel%20de%20los%20Santos%20Oliver,%207b%20bajos&t=&z=15&ie=UTF8&iwloc=&output=embed'
      }
    }
  }
}
</script>
<style scoped>
  .main-bg {
    background-image: url('https://picsum.photos/500/500');
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
