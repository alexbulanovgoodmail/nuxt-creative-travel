import type { H3Event } from 'h3'

export async function getHome(event?: H3Event) {
	const config = useRuntimeConfig()
	const baseUrl = config.public.baseUrl

	const response: any = await $fetch(`${baseUrl}/api/home/`, {
		headers: event?.headers
	})

	return response
}
