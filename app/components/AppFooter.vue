<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger, SplitText)

let tl: gsap.core.Timeline | null = null
let scrollTrigger: ScrollTrigger | null = null

const route = useRoute()

watch(
	() => route.path,
	(newPath, oldPath) => {
		if (newPath !== oldPath) {
			scrollTrigger?.refresh()
		}
	},
	{ immediate: false }
)

onMounted(() => {
	document.fonts.ready.then(() => {
		tl = gsap.timeline({ paused: true })

		const splitedText = SplitText.create('.footer__title', {
			type: 'words, lines',
			mask: 'lines'
		})

		tl.from(splitedText.lines, {
			duration: 1.5,
			opacity: 0,
			stagger: 0.02,
			ease: 'expo.inOut'
		})

		scrollTrigger = ScrollTrigger.create({
			trigger: '.footer',
			start: 'top 90%',
			onEnter: () => tl?.play(),
			onLeaveBack: () => tl?.reverse()
		})
	})
})

onBeforeUnmount(() => {
	scrollTrigger?.kill()
	tl?.kill()
})
</script>

<template>
	<footer class="footer">
		<div class="footer__description">
			<p class="footer__text">End of the trail</p>
		</div>
		<p class="footer__title">
			Less rush. <br />
			More wonder.
		</p>

		<div class="footer__navigation">
			<FooterNavigation />
		</div>
		<div class="footer__socials">
			<SocialNavigation />
		</div>
		<p class="footer__copyright">
			Copyright © {{ new Date().getFullYear() }} · The Roam Report
		</p>
	</footer>
</template>

<style lang="scss" scoped>
.footer {
	padding: 80px 20px;
	background-color: var(--color-background-2);

	&__description {
		margin-bottom: 16px;
	}

	&__text {
		@include typo-paragraph-1;

		color: var(--color-paragraph-1);
		text-align: center;
	}

	&__title {
		@include typo-header-1;

		margin-bottom: 40px;
		text-align: center;
		color: var(--color-paragraph-1);
	}

	&__navigation {
		margin-bottom: 40px;
	}

	&__socials {
		margin-bottom: 40px;
	}

	&__copyright {
		@include typo-paragraph-3;

		text-align: center;
		color: var(--color-paragraph-1);
	}
}
</style>
