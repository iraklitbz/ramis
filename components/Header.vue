<template>
    <header
      class="pt-10 pb-6 sm:pb-10 px-6 sm:px-10 relative z-30"
      :class="bgWhite ? 'bg-white' : ''"
    >
      <div class="flex flex-col sm:flex-row sm:items-end w-full justify-between">
        <div class="flex item-center justify-center">
          <button
            type="button"
            @click="menu().toggleMenu()"
            class="relative z-50 mr-5 top-1"
          >
          <nuxt-icon
            v-if="!menu().isMenu" 
            name="menu"
            class="icon text-6xl mb-0"
            :class="colorWhite ? 'text-white' : 'text-black'"
            />
            <nuxt-icon
                v-else
                name="cross"
                class="icon text-6xl text-white"
            />
          </button>
          <NuxtLink to="/">
            <ramisLogo 
                class="mainLogo"
                :class="colorWhite ? 'text-white' : 'text-black'"
            />
          </NuxtLink>
        </div>
        <div class="flex items-center justify-between sm:justify-end mt-5 sm:mt-0">
          <NuxtLink class="mr-10 opacity-60 hover:opacity-100" v-if="goBackLink" :to="goBackLink.url">
            {{ goBackLink.name }}
          </NuxtLink>
          <h5 class="font-bold text-lg text-black" v-if="headline">{{ headline }}</h5>
        </div>
      </div>
      <Menu :class="menu().isMenu ? 'block' : 'hidden'" />
    </header>
  </template>
  
  <script setup>
  import { menu } from '~/store/menuStore'
  onMounted(() => {
    menu().closeMenu()
  })
  const props = defineProps({
    colorWhite: {
      type: Boolean,
      default: true,
    },
    bgWhite: {
      type: Boolean,
      default: false,
    },
    headline: {
      type: String,
      default: '',
    },
    goBackLink: {
      type: Object,
      default: null,
    },
  });
  
  </script>
  
  <style scoped>
  .mainLogo {
    width: 150px;
  }
  </style>