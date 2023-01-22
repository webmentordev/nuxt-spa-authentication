// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    app: {
        head: {
            title: "Nuxt SPA Auth",
            meta: [
                { name: "description", content: "Learn How to create SPA Authentication using Laravel Sanctum in NuxtJs" }
            ]
        }
    },
    runtimeConfig: {
        public: {
            urlSecret: 'http://localhost:8000',
            apiSecret: 'http://localhost:8000/api'
        }
    }
})
