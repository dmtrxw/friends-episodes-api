//https://nitro.unjs.io/config
export default defineNitroConfig({
    routeRules: {
        '/**': {
            cors: true,
            headers: {
                'access-control-allow-methods': 'GET',
                'access-control-allow-origin': '*',
            },
        },
    },
})
