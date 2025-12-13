<script setup lang="js">
import { onMounted } from 'vue'
import 'swagger-ui-dist/swagger-ui.css'
import SwaggerUI from 'swagger-ui-dist/swagger-ui-bundle'

if (process.env.NODE_ENV === 'production') {
	throw createError({
		statusCode: 404,
		statusMessage: 'Not Found'
	})
}

definePageMeta({
	layout: 'empty'
})

onMounted(() => {
	SwaggerUI({
		url: '/api/openapi',
		dom_id: '#swagger',
		presets: [SwaggerUI.presets?.apis],
		layout: 'BaseLayout'
	})
})
</script>

<template>
	<div id="swagger" style="height: 100vh"></div>
</template>
