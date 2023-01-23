<template>
    <div class="general pb-24">
      <Header
        :color-white="false"
      />
      <div v-if="!loader" class="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 gap-4 px-6 sm:px-10">
        <nuxt-link
          v-for="(card, i) in posts"
          :key="i"
          class="box relative overflow-hidden"
          :id="card.id"
          :to="'/proyectos-realizados/' + card.id"
        >
          <img class="w-full object-fill h-full" :src="card.attributes.destacado.data.attributes.formats.medium.url" alt="Paseo Mallorca 15" />
          <h2 class="font-bold text-lg text-white">{{ card.attributes.title }}</h2>
        </nuxt-link>
      </div>
      <div v-else role="status">
        <div class="flex items-center justify-center w-full">
            <svg aria-hidden="true" class="inline w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
          <span class="sr-only">Loading...</span>
        </div>
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
      error: null,
      loader: false,
    }
  },
  async fetch () {
      this.loader = true
      await axios
      .get('https://ramis.onrender.com/api/posts?populate=*')
      .then(response => {
        this.posts = response.data.data.filter(post => post.attributes.category === 'realizados')
        this.loader = false
      })
      .catch(error => (this.error = error))
  },
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
