<template>
        <ul 
            class="relative w-full h-full"
        >
            <div
                v-for="(item, index) in gallery"
                class="galleryBox"
            >
                <li
                    class="galleryItems absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
                    :class="{'active': index === currentSlide}"
                    :style="index === currentSlide ? 'z-index: 10' : 'z-index: 0'"
                    :id="index"
                    :key="index"
                >
                    <img class="w-full" :src="'http://13.38.83.185:1337' + item.attributes.image.data.attributes.url">
                </li>
            </div>
        </ul>
</template>


<script>
import axios from 'axios';
export default {
    name: 'Menu',
    data () {
        return {
            gallery: [],
            currentSlide: 0,
        }
    },
    mounted () {
        axios
        .get('http://13.38.83.185:1337/api/slides/?populate=*')
        .then(response => (this.gallery = response.data.data))
        .catch(error => (this.error = error))
        this.update()
    },
    methods: {
         update() {
            setInterval(() => {
                if(this.currentSlide === this.gallery.length - 1) {
                    this.currentSlide = 0
                } else {
                    this.currentSlide++
                }
            }, 6000)
        }
    }
}
</script>
<style scoped lang="scss">
.galleryBox {
    width: 100%;
    .galleryItems {
        width: 100%;
    }
}
.galleryItems {
    opacity: 0;
    transition: opacity 0.3s ease-in;
    object-fit: cover;
    height: 100%;
    img {
        object-fit: cover;
        height: 100%;
    }
}
.galleryItems.active {
    opacity: 1;
}
</style>
