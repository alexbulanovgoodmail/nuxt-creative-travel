<script setup lang="ts">
import type { Seo, SchemaOrg, Link, Media, ArticlePreview } from '~~/types'

interface PageData {
	seo: Seo
	schemaOrg: SchemaOrg
	breadcrumbs: Link[]
	cover: Media
	pageInfo: {
		page: number
		limit: number
		total: number
	}
	stories: {
		title: string
		articles: ArticlePreview[]
	}
}

const headers = useRequestHeaders()
const { data, error } = await useFetch<PageData>('/api/articles/', {
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
		<ArticlesStories
			:stories="data.stories"
			:style="`--color: var(--color-paragraph-1); --background: var(--color-background-2);`"
		>
			<!-- <template #footer> Pagination </template> -->
		</ArticlesStories>
		<MainCover :cover="data.cover">
			<PeakHorizon :style="`--horizon-background: transparent`" />
		</MainCover>
	</div>
</template>
