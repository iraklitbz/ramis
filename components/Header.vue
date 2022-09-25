<template>
    <header class="pt-10 pb-5 px-10 relative z-30">
        <div class="flex items-end w-full justify-between">
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
                    <load-svg v-if="$store.state.isMenu" class="w-14 text-white" name="cross"></load-svg>
                </button>
                <load-svg
                    class="mainLogo ml-4"
                    :class="colorWhite ? 'text-white' : 'text-black'"
                    name="ramis">
                </load-svg>
            </div>
            <h5 class="font-bold text-lg text-black" v-if="headline">{{ headline }}</h5>
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
        headline: {
            type: String,
            default: ''
        }
    }
}
</script>
<style scoped>
    .mainLogo {
        width: 200px;
    }
    .main-menu-button {
        margin-top: 25px;
    }
</style>
