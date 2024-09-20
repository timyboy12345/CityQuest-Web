// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    modules: ['@nuxtjs/tailwindcss', 'nuxt-directus', '@nuxtjs/seo', '@nuxtjs/google-fonts', '@nuxtjs/leaflet'],
    runtimeConfig: {
        public: {
            directus: {url: "https://data.arendz.nl"}
        }
    },
    site: {
        url: 'https://storywalks.nl',
        name: 'StoryWalks',
        description: 'StoryWalks is dé manier om een nieuwe, of al bekende, stad te ontdekken met vrienden en familie!',
        defaultLocale: 'nl', // not needed if you have @nuxtjs/i18n installed
    },
    // ogImage: {
    //     enabled: false,
    // },
    // seoExperiments: {
    //     enabled: false,
    // },
    sitemap: {
        sources: [
            '/api/__sitemap__/urls',
        ]
    },
    googleFonts: {
        families: {
            "Material Symbols Outlined": [400]
        }
    },
})