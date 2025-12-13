<script setup lang="ts">
import type { ItineraryPreview } from '~~/types'

interface Props {
	upcoming: {
		title: string
		itineraries: ItineraryPreview[]
	}
}

defineProps<Props>()
</script>

<template>
	<div class="itinerary-spotlight">
		<h2 class="itinerary-spotlight__title">{{ upcoming.title }}</h2>

		<ol class="itinerary-spotlight__list">
			<li
				v-for="(itinerary, index) in upcoming.itineraries"
				:key="itinerary.id"
				class="itinerary-spotlight__item"
			>
				<ItineraryPreview
					:itinerary="itinerary"
					:data-count="String(index + 1).padStart(2, '0')"
					:data-index="index + 1"
				/>
			</li>
		</ol>
	</div>
</template>

<style lang="scss" scoped>
.itinerary-spotlight {
	padding: 80px 20px;
	background-color: var(--color-background-4);

	&__title {
		@include typo-header-2;

		margin-bottom: 40px;
		text-align: center;
		color: var(--color-headline-3);
	}

	&__list {
		border-top: 1px dashed var(--color-divider-2);
		border-bottom: 1px dashed var(--color-divider-2);
		display: flex;
		flex-direction: column;
		list-style: none;
		color: var(--color-headline-3);
	}

	&__item:not(:last-child) {
		border-bottom: 1px dashed var(--color-divider-2);
	}
}
</style>
