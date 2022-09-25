export const state = () => ({
    isMenu: false
})

export const mutations = {
    toggleMenu(state) {
        state.isMenu = !state.isMenu
    }
}
