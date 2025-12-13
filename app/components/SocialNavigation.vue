<script setup lang="ts">
import { storeLayout } from '~/stores/storeLayout'

const { socials } = storeLayout()
</script>

<template>
	<div class="social-navigation">
		<ul class="social-navigation__list" aria-label="Socials">
			<li
				v-for="social in socials"
				:key="social.id"
				class="social-navigation__item"
			>
				<a
					class="social-navigation__link"
					:href="social.link.to"
					:aria-label="`Our ${social.link.label}`"
				>
					<Icon
						:name="`icons:${social.link.label.toLocaleLowerCase()}`"
						:size="24"
					/>
				</a>
			</li>
		</ul>
	</div>
</template>

<style lang="scss" scoped>
.social-navigation {
	&__list {
		margin: -6px -12px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		list-style: none;
	}

	&__item {
		margin: 6px 12px;
	}

	&__link {
		color: var(--color-paragraph-1);
		transition: $transition-duration $transition-function;

		&:hover,
		&:focus-visible {
			opacity: 0.5;
		}
	}
}
</style>
