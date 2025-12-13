import { readFileSync } from 'fs'
import { join } from 'path'
import YAML from 'yaml'

export default defineEventHandler(() => {
	if (process.env.NODE_ENV === 'production') {
		throw createError({
			statusCode: 404,
			statusMessage: 'Not Found'
		})
	}

	const filePath = join(process.cwd(), 'server', 'openapi.yaml')
	const file = readFileSync(filePath, 'utf8')
	const parsed = YAML.parse(file)
	return parsed
})
