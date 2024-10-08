<template>
    <div class="general pb-24">
        <Header
            :color-white="false"
        />
        <Grid 
            :loading="projectos().loading"
            :items="reverseData"
        />
    </div>
</template>

<script setup>
    import { projectos } from '~/store/proyectos'
    await projectos().getFuturosProjectos()
    const reverseData = projectos().projectosFuturos.items.reverse()
</script>

<style scoped>
.box h2 {
  position: absolute;
  left: 50%;
  top: -50%;
  transform: translate(-50%, -50%);
  transition: top 0.2s ease-in;
  z-index: 30;
}
.box::after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.6);
  opacity: 0;
  transition: opacity 0.2s ease-in;
  z-index: 10;
}
.box:hover h2 {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.box:hover::after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 1;
}
</style>
