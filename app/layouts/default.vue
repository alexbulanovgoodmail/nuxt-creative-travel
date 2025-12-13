<script setup lang="ts"></script>

<template>
	<div class="default-layout">
		<aside class="aside">
			<div class="aside__navigation">
				<SideNavigation />
			</div>
			<div class="aside__sidebar">
				<SideBar />
			</div>
		</aside>
		<div class="main">
			<main>
				<slot />
			</main>
			<AppFooter />
		</div>
	</div>
</template>

<style lang="scss" scoped>
.default-layout {
	display: flex;
	flex-direction: column;
	height: 100%;

	@media screen and (min-width: $lg) {
		display: grid;
		grid-template-columns: repeat(8, 1fr);
	}

	.aside {
		@media screen and (min-width: $lg) {
			position: relative;
			grid-column: span 3 / span 3;
			background-color: var(--color-background-3);
		}

		&__navigation {
			position: fixed;
			top: 20px;
			left: 0;
			z-index: 50;
			display: flex;
			justify-content: center;
			width: 100%;

			@media screen and (min-width: $lg) {
				position: sticky;
				top: 20px;
				margin-bottom: -100%;
			}
		}

		&__sidebar {
			@media screen and (min-width: $lg) {
				position: sticky;
				top: 0;
				left: 0;
			}
		}
	}

	.main {
		@media screen and (min-width: $lg) {
			grid-column: span 5 / span 5;
		}
	}
}
</style>
