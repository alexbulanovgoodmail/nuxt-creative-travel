<script setup lang="ts">
import type { ArticlePreview } from '~~/types'

interface Props {
	article: ArticlePreview
}

defineProps<Props>()
</script>

<template>
	<div class="article-preview">
		<NuxtLink class="article-preview__link" :to="article.link.to">
			<div class="article-preview__image-container">
				<img
					class="article-preview__image"
					:src="article.image.url"
					width="315"
					height="268"
					:alt="article.image.alt"
				/>
			</div>
			<div class="article-preview__content">
				<p class="article-preview__subtitle">
					{{ article.subtitle }}
				</p>
				<p class="article-preview__title">
					{{ article.title }}
				</p>
			</div>
		</NuxtLink>
	</div>
</template>

<style lang="scss" scoped>
.article-preview {
	display: flex;
	flex-direction: column;
	width: 100%;
	background-color: var(--color-background-1);
	transition: $transition-duration $transition-function;

	&:has(a:hover),
	&:has(a:focus-visible) {
		transform: scale(1.01);
	}

	&__link {
		display: flex;
		flex-direction: column;
		text-decoration: none;
	}

	&__image-container {
		margin: 10px 10px 0;
		position: relative;
		display: flex;

		&::after {
			content: '';
			display: block;
			padding-top: calc(100% / (315px / 268px));
		}
	}

	&__image {
		position: absolute;
		inset: 0;
		border-radius: 24px;
		display: flex;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	&__content {
		padding: 40px 24px;
	}

	&__subtitle {
		@include typo-paragraph-3;

		margin-bottom: 12px;
		text-align: center;
		color: var(--color-paragraph-4);
	}

	&__title {
		@include typo-header-3;

		text-align: center;
		color: var(--color-headline-1);
	}
}
</style>
