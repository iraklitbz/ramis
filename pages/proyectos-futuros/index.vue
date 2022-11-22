<template>
    <div class="general pb-24">
      <Header
        :color-white="false"
      />
      <div class="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 gap-4 px-6 sm:px-10">
        <nuxt-link
          v-for="(card, i) in posts"
          :key="i"
          class="box relative overflow-hidden"
          :id="card.id"
          :to="'proyectos-futuros/' + card.id"
        >
          <img class="w-full object-fill h-full" :src="'http://15.188.27.140:1337' + card.attributes.destacado.data.attributes.formats.medium.url" alt="Paseo Mallorca 15" />
          <h2 class="font-bold text-lg text-white">{{ card.attributes.title }}</h2>
        </nuxt-link>
      </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'ProyectosPage',
  data () {
    return {
      posts: [],
      error: null
    }
  },
  mounted () {
    axios
      .get('http://15.188.27.140:1337/api/posts?populate=*')
      .then(response => (this.posts = response.data.data.filter(post => post.attributes.category === 'futuras')))
      .catch(error => (this.error = error))
  }
}
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
