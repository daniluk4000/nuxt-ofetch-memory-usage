export default defineNuxtPlugin({
    async setup() {
        await useFetch('/test', {timeout: 1000 * 60})
    }
})
