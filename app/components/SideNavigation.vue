<script setup lang="ts">
import { storeLayout } from '~/stores/storeLayout'

const { navigations } = storeLayout()
</script>

<template>
	<nav class="side-navigation">
		<ul class="side-navigation__list">
			<li
				v-for="navigation in navigations"
				:key="navigation.id"
				class="side-navigation__item"
			>
				<NuxtLink class="side-navigation__link" :to="navigation.link.to">
					{{ navigation.link.label }}
				</NuxtLink>
			</li>
		</ul>
	</nav>
</template>

<style lang="scss" scoped>
.side-navigation {
	border-radius: 9999px;
	padding: 16px 12px;
	background-color: var(--color-background-1);
	overflow: hidden;

	&__list {
		display: flex;
		align-items: center;
		list-style: none;
	}

	&__item {
		margin: 0 12px;
		display: flex;
		align-items: center;
	}

	&__link {
		@include typo-nav-link;

		color: var(--color-paragraph-1);
		transition: $transition-duration $transition-function;

		&:hover,
		&:focus-visible {
			color: var(--color-paragraph-2);
		}

		&.router-link-active.router-link-exact-active {
			color: var(--color-paragraph-4);
			pointer-events: none;
		}
	}
}
</style>
