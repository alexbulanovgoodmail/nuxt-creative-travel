import { join } from 'node:path'
import { readFile } from 'node:fs/promises'

export default defineEventHandler(async event => {
	const name = event.context.params!.name
	const filePath = join(process.cwd(), 'mocks', 'images', name)

	try {
		const data = await readFile(filePath)
		return new Response(data, {
			headers: { 'Content-Type': 'image/jpeg' }
		})
	} catch {
		throw createError({ status: 404, message: 'Image not found' })
	}
})
