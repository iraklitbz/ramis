<template>
  <div class="general pb-24">
    <Header
      :color-white="false"
      :headline="title"
      :go-back-link="goBackLink"
    />
    <div v-if="!loader" class="flex flex-col">
      <div class="w-full flex flex-col justify-center px-6 sm:px-10">
        <img class="w-full object-fill h-full" :src="feature" alt="Paseo Mallorca 15" />
        <ul class="mt-5 grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 gap-4 px-0">
          <li @click="changeImg(item.attributes.url)" class="cursor-pointer sm:opacity-75 hover:opacity-100" v-for="(item, i) in images" :key="i">
            <img class="w-full object-fill h-full" :src="item.attributes.formats.small.url" />
          </li>
        </ul>
      </div>
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
  name: 'ProyectoPage',
  props: {
    id: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      title: '',
      feature: '',
      post: {},
      images: [],
      error: null,
      loader: false,
      goBackLink: {
        name: 'Proyectos futuros',
        url: '/proyectos-futuros'
      }
    }
  },
  async fetch () {
      this.loader = true
      await axios
      .get('https://ramis.onrender.com/api/posts/' + this.$route.params.id + '?populate=*')
      .then(response => (
          this.title = response.data.data.attributes.title,
          this.feature = response.data.data.attributes.destacado.data.attributes.url,
          this.images = response.data.data.attributes.img.data,
          this.loader = false
        ))
      .catch(error => (this.error = error))
  },
  methods: {
    changeImg (url) {
      this.feature = url
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
</style>
