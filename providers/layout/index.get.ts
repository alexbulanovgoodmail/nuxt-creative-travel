import type { H3Event } from 'h3'

export async function getLayout(event?: H3Event) {
	const config = useRuntimeConfig()
	const baseUrl = config.public.baseUrl

	const response: any = await $fetch(`${baseUrl}/api/layout/`, {
		headers: event?.headers
	})

	return response
}
