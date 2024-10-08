export const projectos = defineStore('projectosStore', {
    state: () => ({
        projectosFuturos: [],
        projectosRealizados: [],
        projecto: {},
        loading: false,
    }),
    actions: {
        async getFuturosProjectos() {
            this.loading = true;
            const { $contentfulClient } = useNuxtApp();
            const data = await $contentfulClient.getEntries({
                content_type: 'proyectosFuturos'
            });
            this.projectosFuturos = data;
            console.log(data);
            this.loading = false;
        },
        async getRealizadosProjectos() {
            this.loading = true;
            const { $contentfulClient } = useNuxtApp();
            const data = await $contentfulClient.getEntries({
                content_type: 'proyectosRealizados'
            })
            this.projectosRealizados = data;
            this.loading = false;
        },
        async getProjectoByID(id) {
            this.projecto = {};
            this.loading = true;
            const { $contentfulClient } = useNuxtApp();
            const data = await $contentfulClient.getEntry(id);
            console.log(data);
            this.projecto = data;
            this.loading = false;
            return data;
        }
    },
  });