<template>
	<sidebar-component :open="open" />

	<main class="main md:ml-[90px]">
		<header-component @is-open="isOpen" />

		<div class="main__content mt-[90px]">
			<router-view />
		</div>
	</main>
</template>

<script>
import SidebarComponent from "./SidebarComponent.vue"
import HeaderComponent from "./HeaderComponent.vue"

export default {
	components: {
		SidebarComponent,
		HeaderComponent,
	},
	data() {
		return {
			open: false,
		}
	},
	methods: {
		isOpen(val) {
			this.open = val
		},
	},
}
</script>

<style scoped></style>
