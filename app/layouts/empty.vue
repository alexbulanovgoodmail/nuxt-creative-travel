<script setup lang="ts"></script>

<template>
	<div class="empty-layout">
		<main>
			<slot />
		</main>
	</div>
</template>

<style lang="scss" scoped>
.empty-layout {
	display: flex;
	flex-direction: column;
	height: 100%;

	.main {
		flex: 1 1 auto;
	}
}
</style>
