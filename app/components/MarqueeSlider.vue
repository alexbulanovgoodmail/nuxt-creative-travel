<script setup lang="ts">
import debounce from 'lodash.debounce'

type Speed = 'slow' | 'normal' | 'fast'
type Direction = 'rtl' | 'ltr'

interface Props {
	speed?: Speed
	direction?: Direction
	gap?: number
}

const { speed = 'normal', direction = 'rtl', gap = 16 } = defineProps<Props>()
const marqueeRef = ref<HTMLElement | null>(null)
const containerRef = ref<HTMLElement | null>(null)

const originalNodes: HTMLElement[] = []

function update() {
	if (!marqueeRef.value || !containerRef.value) return

	if (!originalNodes.length) {
		originalNodes.push(
			...(Array.from(containerRef.value.children) as HTMLElement[])
		)
	}

	containerRef.value.innerHTML = ''

	originalNodes.forEach(node => {
		containerRef.value!.appendChild(node.cloneNode(true))
	})

	while (containerRef.value.scrollWidth < marqueeRef.value.offsetWidth * 1.5) {
		originalNodes.forEach(node => {
			containerRef.value!.appendChild(node.cloneNode(true))
		})
	}
}

const debounced = debounce(update, 100)

onMounted(() => {
	update()

	window.addEventListener('resize', debounced)
})

onUnmounted(() => {
	window.removeEventListener('resize', debounced)
})
</script>

<template>
	<div ref="marqueeRef" class="marquee-slider">
		<div
			ref="containerRef"
			class="marquee-slider__container"
			:class="[`marquee-${direction}`, `marquee-${speed}`]"
			:style="{ '--marquee-gap': gap + 'px' }"
		>
			<slot />
		</div>
	</div>
</template>

<style lang="scss" scoped>
.marquee-slider {
	@include typo-header-4;

	position: relative;
	display: flex;
	overflow: hidden;
	align-items: center;
	white-space: nowrap;
	color: var(--color-headline-2);

	&::after,
	&::before {
		content: '';
		position: absolute;
		z-index: 1;
		width: 56px;
		height: 100%;
	}

	&::after {
		top: 0;
		right: 0;
		background-image: linear-gradient(to left, #c6dcff, #c6dcff00);
	}

	&::before {
		top: 0;
		left: 0;
		background-image: linear-gradient(to right, #c6dcff, #c6dcff00);
	}

	&__container {
		& > * + * {
			margin-left: var(--marquee-gap, 16px);
		}

		&.marquee-rtl {
			animation-name: marquee-rtl;
			animation-timing-function: linear;
			animation-iteration-count: infinite;
		}

		&.marquee-ltr {
			animation-name: marquee-ltr;
			animation-timing-function: linear;
			animation-iteration-count: infinite;
		}

		&.marquee-slow {
			animation-duration: 30s;
		}

		&.marquee-normal {
			animation-duration: 18s;
		}

		&.marquee-fast {
			animation-duration: 10s;
		}
	}

	@keyframes marquee-ltr {
		from {
			transform: translateX(-50%);
		}

		to {
			transform: translateX(0);
		}
	}

	@keyframes marquee-rtl {
		from {
			transform: translateX(0);
		}

		to {
			transform: translateX(-50%);
		}
	}
}
</style>
