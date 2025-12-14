<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{
	error: NuxtError
}>()

function handleError() {
	clearError({
		redirect: '/'
	})
}
</script>

<template>
	<div class="error-page">
		<div class="error-page__container">
			<div class="error-page__title">
				{{ error.statusCode }}
			</div>

			<div class="error-page__text-container">
				<p class="error-page__text">
					{{ error.statusMessage }}
				</p>
			</div>
			<NuxtLink class="typo-text-link" @click.prevent="handleError">
				Back
			</NuxtLink>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.error-page {
	height: 100svh;
	background-color: var(--color-background-3);

	&__container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	&__title {
		@include typo-header-1;

		margin: 0 auto 40px;
		text-align: center;
		color: var(--color-headline-2);
	}

	&__text-container {
		margin-bottom: 24px;
	}

	&__text {
		@include typo-paragraph-2;

		color: var(--color-paragraph-2);
		text-align: center;
	}
}
</style>
