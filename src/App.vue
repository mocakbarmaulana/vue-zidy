<template>
	<layout-component />
</template>

<script>
import LayoutComponent from "./layout/LayoutComponent.vue"
import { mapMutations } from "vuex"

export default {
	name: "App",
	components: {
		LayoutComponent,
	},
	mounted() {
		this.checkDarkMode()
	},
	methods: {
		...mapMutations(["SET_DARK_MODE"]),
		checkDarkMode() {
			if (localStorage.getItem("darkMode") === "true") {
				document.documentElement.classList.add("dark")
				this.SET_DARK_MODE(true)
			} else {
				document.documentElement.classList.remove("dark")
			}
		},
	},
}
</script>
