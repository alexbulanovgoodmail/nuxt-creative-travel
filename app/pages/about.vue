<script setup lang="ts">
import type { Seo, SchemaOrg, Link, Media } from '~~/types'

interface PageData {
	seo: Seo
	schemaOrg: SchemaOrg
	breadcrumbs: Link[]
	cover: Media
	info: []
}

const headers = useRequestHeaders()
const { data, error } = await useFetch<PageData>('/api/about/', {
	headers
})

if (error.value) {
	showError({
		statusCode: error.value.statusCode,
		statusMessage: error.value.message || 'Internal Server Error'
	})
}
if (data.value) {
	useSeoMeta(data.value.seo.meta)
}
</script>

<template>
	<div v-if="data">
		<AboutHero :cover="data.cover" />
		<AboutInfo :info="data.info" />
		<PeakHorizon :style="`--horizon-background: var(--color-background-4)`" />
	</div>
</template>
