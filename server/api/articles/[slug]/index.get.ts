import { getArticle } from '~~/providers/article/index.get'

export default defineEventHandler(async event => {
	try {
		return await getArticle(event)
	} catch (errors: any) {
		throw createError({
			statusCode: 500,
			statusMessage: errors[0]?.message || 'Internal Server Error',
			fatal: true
		})
	}
})
