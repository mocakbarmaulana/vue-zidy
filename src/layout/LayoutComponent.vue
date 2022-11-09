<template>
	<sidebar-component />

	<main class="main md:ml-[90px]">
		<header-component />

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
}
</script>

<style scoped>
</style>