<template>
    <div class="flex flex-col items-center bg-brown min-h-screen pt-14 fixed left-0 top-0 w-full z-40">
        <div class="mt-14 max-w-xl w-full">
            <div class="flex justify-center">
                <a class="cursor-pointer" @click="goTo('')"><load-svg class="mainLogo ml-4 text-white opacity-60" name="ramis"></load-svg></a>
            </div>
            <ul class="main-menu w-full mt-14">
                <li @click="goTo('paseo-mallorca-15')" class="cursor-pointer border-y-2 border-solid border-gray-100 text-center py-3 px-2 border-opacity-60 text-gray-100 uppercase text-2xl">
                    <a class="opacity-60 hover:text-white hover:opacity-100" to="/paseo-mallorca-15">Paseo Mallorca 15</a>
                </li>
                <li @click="goTo('proyectos-realizados')" class="cursor-pointer border-b-2 border-solid border-gray-100 text-center py-3 px-2 border-opacity-60 text-gray-100 uppercase text-2xl">
                    <a class="opacity-60 hover:text-white hover:opacity-100" to="/proyectos-realizados">Diferentes Proyectos realizados</a>
                </li>
                <li @click="goTo('proyectos-futuros')" class="cursor-pointer border-b-2 border-solid border-gray-100 text-center py-3 px-2 border-opacity-60 text-gray-100 uppercase text-2xl">
                    <a class="opacity-60 hover:text-white hover:opacity-100" to="/proyectos">Futuros Proyectos</a>
                </li>
                <li @click="goTo('contacto')" class="cursor-pointer border-b-2 border-solid border-gray-100 text-center border-opacity-60 py-3 px-2 text-gray-100 uppercase text-2xl">
                    <a class="opacity-60 hover:text-white hover:opacity-100" to="/contacto">Contacto</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Menu',
    methods: {
        goTo(page) {
            this.$store.commit('toggleMenu')
            this.$router.push('/' + page)
        }
    }
}
</script>
<style scoped>
    .mainLogo {
        width: 170px;
    }
</style>
