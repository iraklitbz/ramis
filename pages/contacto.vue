<template>
    <div class="general">
      <Header
            :color-white="false"
           
          />

       
        <div class="w-full md:w-6/12 mt-0 md:mt-20 flex flex-col justify-center px-6 md:px-14 left-box">
          <div class="mb-10">
            <h2 class="font-bold text-lg text-black mb-7">Sobre Ramis</h2>
            <p class="text-base text-justify">Ramis Promociones es una empresa de tres generaciones y más de 70 años de experiencia. La firma apuesta por la calidad, seriedad y un servicio posventa impecable ha recogido sus frutos y ha posicionado a la compañía como una de las promotoras con más prestigio en Mallorca.  A lo largo de su historia, la empresa ha ido siempre incorporando los últimos avances técnicos y constructivos, utilizando siempre los materiales de mejor calidad para crear proyectos atemporales que resisten al paso del tiempo como el primer día. Actualmente, el compromiso con la sostenibilidad y el medio ambiente también se ha convertido en una prioridad. Tras más de 2.000 viviendas, 300.000 m2 construidos y una trayectoria basada en la atención al cliente, podemos decir que Ramis Promociones es un sello de prestigio y una garantía de éxito en los proyectos inmobiliarios que emprende.</p>
          </div>
          <ul class="mt-10 md:mt-0">
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
      <div class="main-bg w-full md:w-6/12 md:fixed right-0 top-0 h-96 md:h-screen mt-10 md:mt-0"></div>
  
  </div>
</template>
<script>
export default {
  name: 'ContactoPage',
  data () {
    return {
      
    }
  }
}
</script>
<style scoped>
.left-box {
  height: calc(100% + 142px);
}
  .main-bg {
    background-image: url('assets/images/sobre.jpg');
    background-size: cover;
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