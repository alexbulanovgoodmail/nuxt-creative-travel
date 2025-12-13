<script setup lang="ts">
import type { ItineraryPreview } from '~~/types'

interface Props {
	itinerary: ItineraryPreview
}

defineProps<Props>()
</script>

<template>
	<div
		class="itinerary-preview"
		:class="{ 'is-event': Number($attrs['data-index']) % 2 === 0 }"
	>
		<div class="itinerary-preview__content">
			<p class="itinerary-preview__title">
				{{ itinerary.title }}
			</p>
			<p class="itinerary-preview__period">
				{{ itinerary.period }}
			</p>
			<p class="itinerary-preview__description">
				{{ itinerary.description }}
			</p>
		</div>
		<div class="itinerary-preview__image-container">
			<img
				class="itinerary-preview__image"
				:src="itinerary.image.url"
				width="200"
				height="130"
				:alt="itinerary.image.alt"
			/>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.itinerary-preview {
	display: flex;
	align-items: center;
	counter-increment: count;
	padding: 24px 0;

	@media screen and (min-width: $md) {
		padding: 12px 0;
	}

	&::before {
		@include typo-display;

		content: attr(data-count);
		margin-right: 16px;
		display: block;
		flex-basis: 80px;
		flex-shrink: 0;

		@media screen and (min-width: $md) {
			margin-right: 20px;
			flex-basis: 144px;
		}
	}

	&__content {
		flex-grow: 1;

		@media screen and (min-width: $md) {
			margin-right: 20px;
		}
	}

	&__title {
		@include typo-header-4;

		margin-bottom: 8px;

		@media screen and (min-width: $md) {
			margin-bottom: 16px;
		}
	}

	&__period {
		@include typo-paragraph-3;

		margin-bottom: 4px;
	}

	&__description {
		@include typo-paragraph-3;
	}

	&__image-container {
		display: none;

		@media screen and (min-width: $md) {
			position: relative;
			overflow: hidden;
			display: block;
			flex-basis: 200px;
			flex-shrink: 0;
			background-color: var(--color-background-1);

			&::after {
				content: '';
				display: block;
				padding-top: calc(100% / (200px / 130px));
			}
		}
	}

	&.is-event &__image-container {
		border-radius: 99999px;
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
