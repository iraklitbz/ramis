export const menu = defineStore('menuStore', {
  state: () => ({
    isMenu: false,
  }),
  actions: {
    toggleMenu() {
      this.isMenu = !this.isMenu;
    },
    closeMenu() {
      this.isMenu = false;
    }
  },
});