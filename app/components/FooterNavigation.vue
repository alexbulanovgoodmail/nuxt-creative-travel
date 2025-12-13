<script setup lang="ts">
import { storeLayout } from '~/stores/storeLayout'

const { navigations } = storeLayout()
</script>

<template>
	<nav class="footer-navigation">
		<ul class="footer-navigation__list">
			<li
				v-for="navigation in navigations"
				:key="navigation.id"
				class="footer-navigation__item"
			>
				<NuxtLink class="footer-navigation__link" :to="navigation.link.to">
					{{ navigation.link.label }}
				</NuxtLink>
			</li>
		</ul>
	</nav>
</template>

<style lang="scss" scoped>
.footer-navigation {
	&__list {
		margin: -4px -8px;
		list-style: none;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	&__item {
		margin: 4px 8px;
		display: flex;
	}

	&__link {
		@include typo-text-link;

		color: var(--color-paragraph-1);
		transition: $transition-duration $transition-function;

		&:hover,
		&:focus-visible {
			opacity: 0.5;
		}

		&.router-link-active.router-link-exact-active {
			color: var(--color-paragraph-4);
			pointer-events: none;
		}
	}
}
</style>
