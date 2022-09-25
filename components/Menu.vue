<template>
    <div class="flex flex-col items-center bg-brown min-h-screen pt-14 fixed left-0 top-0 w-full z-40">
        <div class="mt-14 max-w-xl w-full">
            <div class="flex justify-center">
                <load-svg class="mainLogo ml-4 text-white opacity-60" name="ramis"></load-svg>
            </div>
            <ul class="main-menu w-full mt-14">
                <li @click="goTo('')" class="cursor-pointer border-y-2 border-solid border-gray-100 text-center py-2 px-2 text-gray-100 uppercase text-3xl hover:text-white hover:border-white">
                    <a>Home</a>
                </li>
                <li @click="goTo('proyectos')" class="cursor-pointer border-b-2 border-solid border-gray-100 text-center py-2 px-2 text-gray-100 uppercase text-3xl hover:text-white hover:border-white">
                    <a to="/proyectos">Proyectos</a>
                </li>
                <li @click="goTo('paseo-mallorca-15')" class="cursor-pointer border-b-2 border-solid border-gray-100 text-center py-2 px-2 text-gray-100 uppercase text-3xl hover:text-white hover:border-white">
                    <a to="/paseo-mallorca-15">Paseo Mallorca 15</a>
                </li>
                <li @click="goTo('sobre-rams')" class="cursor-pointer border-b-2 border-solid border-gray-100 text-center py-2 px-2 text-gray-100 uppercase text-3xl hover:text-white hover:border-white">
                    <a to="/sobre-rams">Sobre rams</a>
                </li>
                <li @click="goTo('contacto')" class="cursor-pointer border-b-2 border-solid border-gray-100 text-center py-2 px-2 text-gray-100 uppercase text-3xl hover:text-white hover:border-white">
                    <a to="/contacto">Contacto</a>
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
        width: 200px;
    }
</style>
