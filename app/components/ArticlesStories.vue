<script setup lang="ts">
import type { ArticlePreview } from '~~/types'

interface Props {
	stories: {
		title: string
		articles: ArticlePreview[]
	}
}

defineProps<Props>()
</script>

<template>
	<section class="articles-stories">
		<h2 class="articles-stories__title">
			{{ stories.title }}
		</h2>

		<div class="articles-stories__layout">
			<ArticlePreview
				v-for="article in stories.articles"
				:key="article.id"
				:article="article"
			/>
		</div>

		<div v-if="$slots.footer" class="articles-stories__footer">
			<slot name="footer" />
		</div>
	</section>
</template>

<style lang="scss" scoped>
.articles-stories {
	position: relative;
	z-index: 10;
	padding: 80px 20px;
	color: var(--color, --color-paragraph-1);
	background-color: var(--background, --color-background-2);

	&__title {
		@include typo-header-2;

		margin-bottom: 40px;
		text-align: center;
	}

	&__layout {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		gap: 20px;

		@media screen and (min-width: $md) {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	&__layout:not(:last-child) {
		margin-bottom: 40px;
	}

	&__footer {
		display: flex;
		align-items: center;
		justify-content: center;
	}
}
</style>
