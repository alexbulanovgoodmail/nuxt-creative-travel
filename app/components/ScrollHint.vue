<script setup lang="ts"></script>

<template>
	<div class="scroll-hint">
		<p class="scroll-hint__text">Scroll for more</p>
		<Icon class="scroll-hint__icon" name="icons:arrow-down" :size="28" />
	</div>
</template>

<style lang="scss" scoped>
.scroll-hint {
	@include typo-nav-link;

	text-align: center;
	color: var(--color-paragraph-1);

	& > * + * {
		margin-top: 4px;
	}

	&__icon {
		animation: move 1.5s linear infinite;
	}

	@keyframes move {
		0% {
			transform: translateY(-2px);
		}

		50% {
			transform: translateY(2px);
		}

		100% {
			transform: translateY(-2px);
		}
	}
}
</style>
