<template>
    <div class="flex flex-col items-center bg-brown min-h-screen pt-14 fixed left-0 top-0 w-full z-40">
        <div class="mt-14 max-w-xl w-full">
            <div class="flex justify-center">
                <nuxt-link class="cursor-pointer">
                    <ramisLogo class="mainLogo text-white opacity-60" />
                </nuxt-link>
            </div>
            <ul class="main-menu w-full mt-14">
                <li class="cursor-pointer border-y-2 border-solid border-gray-100 text-center py-3 px-2 border-opacity-60 text-gray-100 uppercase text-2xl">
                    <nuxt-link class="opacity-60 hover:text-white hover:opacity-100" to="/paseo-mallorca-15">Paseo Mallorca 15</nuxt-link>
                </li>
                <li class="cursor-pointer border-b-2 border-solid border-gray-100 text-center py-3 px-2 border-opacity-60 text-gray-100 uppercase text-2xl">
                    <nuxt-link class="opacity-60 hover:text-white hover:opacity-100" to="/proyectos-realizados">Diferentes Proyectos realizados</nuxt-link>
                </li>
                <li class="cursor-pointer border-b-2 border-solid border-gray-100 text-center py-3 px-2 border-opacity-60 text-gray-100 uppercase text-2xl">
                    <nuxt-link class="opacity-60 hover:text-white hover:opacity-100" to="/proyectos-futuros">Futuros Proyectos</nuxt-link>
                </li>
                <li class="cursor-pointer border-b-2 border-solid border-gray-100 text-center border-opacity-60 py-3 px-2 text-gray-100 uppercase text-2xl">
                    <nuxt-link class="opacity-60 hover:text-white hover:opacity-100" to="/contacto">Contacto</nuxt-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.mainLogo {
    width: 180px;
  }
</style>
