<script setup lang="ts">
import type {
	Seo,
	SchemaOrg,
	Link,
	Media,
	ArticlePreview,
	ItineraryPreview
} from '~~/types'

interface PageData {
	seo: Seo
	schemaOrg: SchemaOrg
	breadcrumbs: Link[]
	cover: Media
	featured: ArticlePreview
	stories: {
		title: string
		articles: ArticlePreview[]
	}
	upcoming: {
		title: string
		itineraries: ItineraryPreview[]
	}
}

const headers = useRequestHeaders()
const { data, error } = await useFetch<PageData>('/api/home/', {
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
		<HomeHero :cover="data.cover" :featured="data.featured" />
		<ArticlesStories
			:stories="data.stories"
			:style="`--color: var(--color-paragraph-1); --background: var(--color-background-2);`"
		>
			<template #footer>
				<NuxtLink class="typo-text-link" to="/articles">
					View all articles
				</NuxtLink>
			</template>
		</ArticlesStories>
		<ItinerarySpotlight :upcoming="data.upcoming" />
		<PeakHorizon :style="`--horizon-background: var(--color-background-4)`" />
	</div>
</template>
