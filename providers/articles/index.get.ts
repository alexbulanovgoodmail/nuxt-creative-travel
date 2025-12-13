import type { H3Event } from 'h3'

export async function getArticles(event: H3Event) {
	const config = useRuntimeConfig()
	const baseUrl = config.public.baseUrl
	const query = getQuery(event)

	const response: any = await $fetch(`${baseUrl}/api/articles/`, {
		headers: event?.headers,
		query
	})

	return response
}
