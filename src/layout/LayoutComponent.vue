<template>
	<sidebar-component />

	<router-view />
</template>

<script>
import SidebarComponent from "./SidebarComponent.vue"
export default {
	components: {
		SidebarComponent,
	},
}
</script>

<style scoped>
</style>