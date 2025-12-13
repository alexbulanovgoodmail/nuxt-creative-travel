import type { H3Event } from 'h3'

export async function getArticle(event: H3Event) {
	const config = useRuntimeConfig()
	const baseUrl = config.public.baseUrl
	const slug = getRouterParam(event, 'slug')

	const response: any = await $fetch(`${baseUrl}/api/articles/${slug}/`, {
		headers: event?.headers
	})

	return response
}
