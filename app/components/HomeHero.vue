<script setup lang="ts">
import type { Media, ArticlePreview } from '~~/types'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface Props {
	cover: Media
	featured: ArticlePreview
}

defineProps<Props>()

gsap.registerPlugin(ScrollTrigger)
let scrollTrigger: ScrollTrigger | null = null

const shouldDisableAnimation = () => {
	return (
		window.innerWidth <= 768 &&
		window.matchMedia('(orientation: landscape)').matches
	)
}

const createScrollTrigger = () => {
	if (scrollTrigger) scrollTrigger.kill()

	if (!shouldDisableAnimation()) {
		scrollTrigger = ScrollTrigger.create({
			trigger: '.home-hero',
			pin: '.home-hero__container',
			pinSpacing: false,
			start: 'top top',
			end: 'bottom top'
		})
	}
}

onMounted(() => {
	createScrollTrigger()
	window.addEventListener('resize', createScrollTrigger)
})

onBeforeUnmount(() => {
	window.removeEventListener('resize', createScrollTrigger)
	scrollTrigger?.kill()
})
</script>

<template>
	<div class="home-hero" :style="{ backgroundImage: 'url(' + cover.url + ')' }">
		<div class="home-hero__container">
			<div class="home-hero__featured">
				<ArticlePreview :article="featured" />
			</div>

			<div class="home-hero__hint">
				<ScrollHint />
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.home-hero {
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	min-height: 100svh;
	padding: 0 20px;
	background-color: var(--color-background-2);
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	background-attachment: fixed;

	&__container {
		position: relative;
		display: grid;
		align-items: center;
		min-height: 100svh;
		padding: 140px 0;

		@media screen and (min-width: $md) {
			grid-template-columns: repeat(8, 1fr);
			gap: 20px;

			& > div {
				grid-column: 3 / span 4;
			}
		}
	}

	&__featured {
		@media screen and (min-width: $md) {
			grid-column: span 4 / span 4;
			grid-column-start: 3;
		}
	}

	&__hint {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 20px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
}
</style>
