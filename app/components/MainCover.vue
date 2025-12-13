<script setup lang="ts">
import type { Media } from '~~/types'

interface Props {
	cover: Media
}

defineProps<Props>()
</script>

<template>
	<div class="main-cover">
		<div class="main-cover__image-container">
			<img
				class="main-cover__image"
				:src="cover.url"
				width="375"
				height="480"
				:alt="cover.alt"
			/>
		</div>
		<slot />
	</div>
</template>

<style lang="scss" scoped>
.main-cover {
	position: relative;

	&__image-container {
		position: relative;
		border-radius: 0;
		overflow: hidden;
		background-color: var(--color-background-3);

		&::after {
			content: '';
			display: block;
			padding-top: calc(100% / (800px / 680px));
		}
	}

	&__image {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	& > :deep(.peak-horizon) {
		position: absolute;
		bottom: 0;
		left: 0;
		z-index: 10;
		width: 100%;
	}
}
</style>
