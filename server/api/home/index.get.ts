import { getHome } from '~~/providers/home/index.get'

export default defineEventHandler(async () => {
	try {
		return await getHome()
	} catch (errors: any) {
		throw createError({
			statusCode: 500,
			statusMessage: errors[0]?.message || 'Internal Server Error',
			fatal: true
		})
	}
})
