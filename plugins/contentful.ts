import { createClient } from 'contentful';

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const client = createClient({
    space: config.public.CONTENTFUL_SPACE_ID as string,
    accessToken: config.public.CONTENTFUL_ACCESS_TOKEN as string,
  });

  nuxtApp.provide('contentfulClient', client);
});