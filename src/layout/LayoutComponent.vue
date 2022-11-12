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
import getUser from "../utils/random-users.js"

export default {
	components: {
		SidebarComponent,
		HeaderComponent,
	},
	data() {
		return {
			avatar: "",
		}
	},
	async mounted() {
		const result = await getUser()
		this.avatar = result[0].picture.thumbnail
	},
	methods: {},
}
</script>

<style scoped></style>
