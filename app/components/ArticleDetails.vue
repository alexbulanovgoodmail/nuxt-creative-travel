<script setup lang="ts">
import type { Article } from '~~/types'

interface Props {
	article: Article
}

defineProps<Props>()
</script>

<template>
	<section class="article-details">
		<article>
			<div class="article-details__content">
				<div class="article-details__header">
					<h1 class="article-details__title">
						{{ article.title }}
					</h1>

					<div class="article-details__info">
						<div class="article-details__date">
							<Icon name="icons:calendar" :size="24" />

							<span>{{ article.subtitle }}</span>
						</div>
						<div class="article-details__location">
							<Icon name="icons:location" :size="24" />

							<span>{{ article.location }}</span>
						</div>
					</div>
				</div>
				<div class="article-details__body">
					<div v-dompurify-html="article.content" class="user-content" />
				</div>
				<div class="article-details__footer">
					<div class="article-details__image-container">
						<img
							class="article-details__image"
							src="~/assets/images/plane-illustration.svg"
							width="130"
							height="110"
							alt=""
						/>
					</div>
				</div>
			</div>
		</article>
	</section>
</template>

<style lang="scss" scoped>
.article-details {
	&__content {
		padding: 80px 20px;
	}

	&__header {
		margin-bottom: 80px;
	}

	&__title {
		@include typo-header-2;

		margin-bottom: 24px;
		text-align: center;
	}

	&__info {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		& > * + * {
			margin-top: 12px;
		}

		@media screen and (min-width: $md) {
			flex-direction: row;

			& > * + * {
				margin-top: 0;
				margin-left: 40px;
			}
		}
	}

	&__date,
	&__location {
		display: flex;
		align-items: center;

		& > * + * {
			margin-left: 2px;
		}
	}

	&__body {
		border-top: 1px dashed var(--color-divider-1);
		border-bottom: 1px dashed var(--color-divider-1);
		margin-bottom: 80px;
		padding: 80px 0;

		@media screen and (min-width: $md) {
			padding: 80px 40px;
		}
	}

	&__footer {
		margin-top: 80px;
	}

	&__image-container {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	&__image {
		display: flex;
		width: 130px;
		height: 110px;
	}
}
</style>
