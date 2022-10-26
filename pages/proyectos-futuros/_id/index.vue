<template>
  <div class="general">
    <Header
      :color-white="false"
      :headline="title"
      :go-back-link="goBackLink"
    />
    <div class="flex flex-col">
      <div>

      </div>
      <div class="w-full flex flex-col justify-center px-6 sm:px-10">
        <img class="w-full object-fill h-full" :src="'http://15.188.27.140:1337' + feature" alt="Paseo Mallorca 15" />
        <ul class="mt-5 grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 gap-4 px-0">
          <li @click="changeImg(item.attributes.formats.large.url)" class="cursor-pointer sm:opacity-75 hover:opacity-100" v-for="(item, i) in images" :key="i">
            <img class="w-full object-fill h-full" :src="'http://15.188.27.140:1337' + item.attributes.formats.small.url" />
          </li>
        </ul>
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
      goBackLink: {
        name: 'Proyectos futuros',
        url: '/proyectos-futuros'
      }
    }
  },
  mounted () {
    axios
      .get('http://15.188.27.140:1337/api/posts/' + this.$route.params.id + '?populate=*')
      .then(response => (
          this.title = response.data.data.attributes.title,
          this.feature = response.data.data.attributes.destacado.data.attributes.formats.large.url,
          this.images = response.data.data.attributes.img.data
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
