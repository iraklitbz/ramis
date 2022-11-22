<template>
    <header
        class="pt-10 pb-6 sm:pb-10 px-6 sm:px-10 relative z-30"
        :class="bgWhite ? 'bg-white' : ''"
    >
        <div class="flex flex-col sm:flex-row sm:items-end w-full justify-between">
            <div>
                    <button
                    type="button"
                    @click="$store.commit('toggleMenu')"
                    class="relative z-50 main-menu-button"
                >
                    <load-svg
                        v-if="!$store.state.isMenu"
                        class="w-14"
                        :class="colorWhite ? 'text-white' : 'text-black'"
                        name="menu"
                    >
                    </load-svg>
                    <load-svg v-if="$store.state.isMenu" class="w-12 text-white" name="cross"></load-svg>
                </button>
                <nuxt-link to="/">
                    <load-svg
                        class="mainLogo ml-4"
                        :class="colorWhite ? 'text-white' : 'text-black'"
                        name="ramis">
                    </load-svg>
                </nuxt-link>
            </div>
            <div class="flex items-center justify-between sm:justify-end mt-5 sm:mt-0">
                <nuxt-link class="mr-10 opacity-60 hover:opacity-100" v-if="goBackLink" :to="goBackLink.url">{{ goBackLink.name }}</nuxt-link>
                <h5 class="font-bold text-lg text-black" v-if="headline">{{ headline }}</h5>
            </div>
        </div>
        <Menu
            :class="$store.state.isMenu ? 'block' : 'hidden'"
        />
    </header>
</template>

<script>
export default {
    name: 'Header',
    props: {
        colorWhite: {
            type: Boolean,
            default: true
        },
        bgWhite: {
            type: Boolean,
            default: false
        },
        headline: {
            type: String,
            default: ''
        },
        goBackLink: {
            type: Object,
            default: null
        }
    }
}
</script>
<style scoped>
    .mainLogo {
        width: 150px;
    }
    .main-menu-button {
        top: 15px;
    }
</style>
