export default defineEventHandler(async event => {
	const config = useRuntimeConfig()
	const baseUrl = config.public.baseUrl

	const response: any = await $fetch(`${baseUrl}/api/layout/`, {
		headers: event.headers
	})

	return response
})
