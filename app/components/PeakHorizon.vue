<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

let tl: gsap.core.Timeline | null = null
let scrollTrigger: ScrollTrigger | null = null

onMounted(() => {
	tl = gsap.timeline({ paused: true })

	tl.to('.peak-horizon path', {
		attr: {
			d: 'M34.5716 62.5412H0V126H800V93.3642C784.23 88.227 749.841 77.9528 738.438 77.9528C724.185 77.9528 690.22 33.834 676.573 33.834C662.926 33.834 575.284 14.4942 566.793 9.65926C558.302 4.82432 507.961 62.5412 494.314 62.5412C480.667 62.5412 464.594 71.3047 457.923 67.3764C451.251 63.448 400.91 77.0462 368.158 77.9528C335.406 78.8593 339.348 51.0584 309.325 48.3388C279.302 45.6191 235.936 3.9175 215.921 0.291295C195.906 -3.33491 127.976 28.0922 118.575 28.0922C109.174 28.0922 82.79 28.9988 73.9954 28.0922C65.2009 27.1857 39.4238 62.5412 34.5716 62.5412Z'
		},
		duration: 1,
		ease: 'expo.inOut'
	})

	scrollTrigger = ScrollTrigger.create({
		trigger: '.peak-horizon',
		start: 'top 90%',
		onEnter: () => tl?.play(),
		onLeaveBack: () => tl?.reverse()
	})
})

onBeforeUnmount(() => {
	scrollTrigger?.kill()
	tl?.kill()
})
</script>

<template>
	<div class="peak-horizon">
		<svg
			width="800"
			height="126"
			viewBox="0 0 800 126"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M 35 126 L 0 126 L 800 126 L 800 126 C 784.23 120.863 749.403 126 738 126 C 723.747 126 690.647 126 677 126 C 663.353 126 575.491 130.835 567 126 C 558.509 121.165 507.647 126 494 126 C 480.353 126 464.671 129.929 458 126 C 451.328 122.072 400.752 125.093 368 126 C 335.248 126.906 339.023 128.719 309 126 C 278.977 123.28 236.015 129.627 216 126 C 195.985 122.374 128.401 126 119 126 C 109.599 126 82.795 126.907 74 126 C 65.206 125.094 39.852 126 35 126 Z"
				fill="#F9F1E2"
			/>
		</svg>
	</div>
</template>

<style lang="scss" scoped>
.peak-horizon {
	margin-bottom: -1px;
	display: flex;
	align-items: flex-end;
	width: 100%;
	background-color: var(--horizon-background);

	svg {
		width: 100%;
		height: auto;
	}
}
</style>
