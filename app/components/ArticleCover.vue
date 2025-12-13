<script setup lang="ts">
import type { Media } from '~~/types'

interface Props {
	cover: Media
}

defineProps<Props>()
</script>

<template>
	<div class="article-cover">
		<div class="article-cover__image-container">
			<img
				class="article-cover__image"
				:src="cover.url"
				width="375"
				height="320"
				:alt="cover.alt"
			/>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.article-cover {
	&__image-container {
		position: relative;
		border-radius: 0;
		overflow: hidden;
		background-color: var(--color-background-1);

		&::after {
			content: '';
			display: block;
			padding-top: calc(100% / (375px / 320px));

			@media screen and (min-width: $md) {
				padding-top: calc(100% / (800px / 580px));
			}
		}
	}

	&__image {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
}
</style>
