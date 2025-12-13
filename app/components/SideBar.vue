<script setup lang="ts"></script>

<template>
	<div class="side-bar">
		<p class="side-bar__title">
			The Roam <br />
			Report
		</p>

		<div class="side-bar__content">
			<div class="side-bar__image-container">
				<img
					class="side-bar__image"
					src="~/assets/images/train-illustration.svg"
					width="120"
					height="110"
					alt=""
				/>
			</div>
			<div class="side-bar__text-container">
				<p class="side-bar__text">
					Stories and photos of long walks, wrong turns, and everyday
					discoveries
				</p>
			</div>
		</div>
		<div class="side-bar__marquee">
			<MarqueeSlider>
				<Icon name="icons:globe" :size="16" />
				<span>Dallol, Ethiopia</span>
				<Icon name="icons:globe" :size="16" />
				<span>14.2417° N</span>
				<Icon name="icons:globe" :size="16" />
				<span>40.3169° E</span>
				<Icon name="icons:globe" :size="16" />
				<span>Currently in</span>
			</MarqueeSlider>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.side-bar {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	min-height: 667px;
	height: 100svh;
	padding: 20px;
	background-color: var(--color-background-3);

	&__title {
		@include typo-header-1;

		margin: auto auto 40px;
		text-align: center;
		color: var(--color-headline-2);
	}

	&__content {
		margin: 0 auto auto;
		max-width: 380px;
		width: 100%;
	}

	&__image-container {
		margin-bottom: 24px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	&__text {
		@include typo-paragraph-2;

		color: var(--color-paragraph-2);
		text-align: center;
	}

	&__marquee {
		margin: 0 -20px;
	}
}
</style>
