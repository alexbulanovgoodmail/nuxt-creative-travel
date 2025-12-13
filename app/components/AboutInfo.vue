<script setup lang="ts">
import type { ID } from '~~/types'

interface Props {
	info: {
		id: ID
		title: string
		text: string
	}[]
}

defineProps<Props>()
</script>

<template>
	<section class="about-info">
		<ul class="about-info__list">
			<li v-for="item in info" :key="item.id" class="about-info__item">
				<h2 class="about-info__title">{{ item.title }}</h2>
				<div class="about-info__content">
					<div v-dompurify-html="item.text" class="user-content" />
				</div>
			</li>
		</ul>
	</section>
</template>

<style lang="scss" scoped>
.about-info {
	padding: 20px 20px 80px;
	background-color: var(--color-background-4);

	&__list {
		border-top: 1px dashed var(--color-divider-2);
		border-bottom: 1px dashed var(--color-divider-2);
		display: flex;
		flex-direction: column;
		list-style: none;
	}

	&__item {
		display: grid;
		gap: 16px;
		padding: 40px 0;

		@media screen and (min-width: $md) {
			grid-template-columns: repeat(5, 1fr);
			gap: 0;
		}
	}

	&__title {
		@include typo-header-2;

		color: var(--color-headline-3);

		@media screen and (min-width: $md) {
			grid-column: span 2 / span 2;
		}
	}

	&__content {
		@include typo-paragraph-1;

		color: var(--color-paragraph-3);

		@media screen and (min-width: $md) {
			grid-column: span 3 / span 3;
		}
	}

	&__item:not(:last-child) {
		border-bottom: 1px dashed var(--color-divider-2);
	}

	&__content a {
		color: inherit;
		transition: $transition-duration $transition-function;

		&:hover,
		&:focus-visible {
			opacity: 0.5;
		}
	}
}
</style>
