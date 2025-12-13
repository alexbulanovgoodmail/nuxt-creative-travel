import { getArticles } from '~~/providers/articles/index.get'

export default defineEventHandler(async event => {
	try {
		return await getArticles(event)
	} catch (errors: any) {
		throw createError({
			statusCode: 500,
			statusMessage: errors[0]?.message || 'Internal Server Error',
			fatal: true
		})
	}
})
