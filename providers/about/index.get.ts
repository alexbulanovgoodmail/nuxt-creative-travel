import type { H3Event } from 'h3'

export async function getAbout(event?: H3Event) {
	const config = useRuntimeConfig()
	const baseUrl = config.public.baseUrl

	const response: any = await $fetch(`${baseUrl}/api/about/`, {
		headers: event?.headers
	})

	return response
}
