<script setup lang="ts">
import type { Media } from '~~/types'

interface Props {
	cover: Media
}

defineProps<Props>()
</script>

<template>
	<div class="about-hero">
		<div class="about-hero__image-container">
			<img
				class="about-hero__image"
				:src="cover.url"
				width="335"
				height="335"
				:alt="cover.alt"
			/>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.about-hero {
	padding: 20px;
	background-color: var(--color-background-4);

	&__image-container {
		position: relative;
		border-radius: 100%;
		overflow: hidden;

		&::after {
			content: '';
			display: block;
			padding-top: calc(100% / (335px / 335px));
		}
	}

	&__image {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		animation: rotate 10s linear infinite;
		transform-origin: center;
		animation-play-state: paused;

		&:hover {
			animation-play-state: running;
		}
	}

	@keyframes rotate {
		from {
			transform: rotate(0);
		}

		to {
			transform: rotate(360deg);
		}
	}
}
</style>
