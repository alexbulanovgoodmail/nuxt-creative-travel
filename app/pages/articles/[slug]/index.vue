<script setup lang="ts">
import type {
	Seo,
	SchemaOrg,
	Link,
	Media,
	Article,
	ArticlePreview
} from '~~/types'

interface PageData {
	seo: Seo
	schemaOrg: SchemaOrg
	breadcrumbs: Link[]
	cover: Media
	article: Article
	stories: {
		title: string
		articles: ArticlePreview[]
	}
}

definePageMeta({
	layout: 'article'
})

const route = useRoute()
const slug = route.params.slug
const headers = useRequestHeaders()
const { data, error } = await useFetch<PageData>(`/api/articles/${slug}/`, {
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
		<ArticleCover :cover="data.cover" />
		<ArticleDetails :article="data.article" />
		<ArticlesStories
			:stories="data.stories"
			:style="`--color: var(--color-headline-3); background: var(--color-background-4)`"
		>
			<template #footer>
				<NuxtLink class="typo-text-link" to="/articles/">
					View all articles
				</NuxtLink>
			</template>
		</ArticlesStories>
		<PeakHorizon :style="`--horizon-background: var(--color-background-4)`" />
	</div>
</template>
