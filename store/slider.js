export const sliders = defineStore('sliderStore', {
    state: () => ({
      sliders: [],
      currentSlide: 0,
      loading: false,
    }),
    actions: {
        async getSliders() {
            this.loading = true;
            const { $contentfulClient } = useNuxtApp();
            const data = await $contentfulClient.getEntries({
                content_type: 'sliders'
              });
            this.sliders = data.includes.Asset;
            this.loading = false;
        },
        updateSliders() {
            setInterval(() => {
                if(this.currentSlide === this.sliders.length - 1) {
                    this.currentSlide = 0
                } else {
                    this.currentSlide++
                }
            }, 6000)
        }
    },
  });