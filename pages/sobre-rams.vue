<template>
  <div class="general">
    <Header
      :color-white="false"
    />
    <div class="flex flex-col sm:flex-row absolute sm:fixed left-0 top-0 w-full z-10 sm:h-screen mb-10 sm:mb-10">
       
      <div class="w-full sm:w-6/12 flex flex-col justify-center px-6 sm:px-14 mt-10 sm:mt-0">
        <h2 class="font-bold text-lg text-black mb-7">Sobre Ramis</h2>
        <p class="text-base text-justify">Ramis Promociones es una empresa de tres generaciones y más de 70 años de experiencia. La firma apuesta por la calidad, seriedad y un servicio posventa impecable ha recogido sus frutos y ha posicionado a la compañía como una de las promotoras con más prestigio en Mallorca.  A lo largo de su historia, la empresa ha ido siempre incorporando los últimos avances técnicos y constructivos, utilizando siempre los materiales de mejor calidad para crear proyectos atemporales que resisten al paso del tiempo como el primer día. Actualmente, el compromiso con la sostenibilidad y el medio ambiente también se ha convertido en una prioridad. Tras más de 2.000 viviendas, 300.000 m2 construidos y una trayectoria basada en la atención al cliente, podemos decir que Ramis Promociones es un sello de prestigio y una garantía de éxito en los proyectos inmobiliarios que emprende.</p>
      </div>
      <div class="main-bg w-full sm:w-6/12 h-96 sm:h-auto"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage'
}
</script>
<style scoped>
  .main-bg {
    background-image: url('assets/images/sobre.jpg');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }
</style>
