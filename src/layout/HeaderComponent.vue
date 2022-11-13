<template>
	<header
		class="fixed top-0 md:w-[calc(100vw-90px)] dark:bg-slate-600 dark:text-white w-full lg:bg-white lg:bg-none h-[90px] transition-all duration-500 ease-in-out bg-[#DCF3F0]"
	>
		<div
			class="header flex md:flex flex-row justify-between w-full items-center h-full px-8"
		>
			<nav
				class="burger__menu md:hidden"
				:class="{
					hidden: isSideBarOpen,
				}"
			>
				<button
					class="text-white w-10 h-10 relative focus:outline-none z-50"
					@click="toggleSideBar"
				>
					<div
						class="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
					>
						<span
							class="block absolute h-0.5 w-5 bg-[#4EC1B6] transform transition duration-500 ease-in-out"
							:class="{
								'rotate-45': isSideBarOpen,
								' -translate-y-1.5': !isSideBarOpen,
							}"
						></span>
						<span
							class="block absolute h-0.5 w-5 bg-[#4EC1B6] transform transition duration-500 ease-in-out"
							:class="{ 'opacity-0': isSideBarOpen }"
						></span>
						<span
							class="block absolute h-0.5 w-5 bg-[#4EC1B6] transform transition duration-500 ease-in-out"
							:class="{
								'-rotate-45': isSideBarOpen,
								' translate-y-1.5': !isSideBarOpen,
							}"
						></span>
					</div>
				</button>
			</nav>
			<figure class="header__logo self-center lg:hidden">
				<img :src="icons.logobrand" alt="logo" />
			</figure>
			<div class="header__title hidden md:block">
				<a
					href="#"
					class="text-[28px] leading-[31px] fontColorDefault font-medium"
					>Analytics</a
				>
			</div>
			<div
				class="header__menu flex items-center justify-between md:justify-between"
			>
				<div class="header__menu__icon mr-4 hidden md:block">
					<a href="#" class="header__menu__icon__wrapper">
						<img :src="icons.google" alt="logo" />
					</a>
				</div>
				<div class="header__menu__icon md:mr-4">
					<a href="#" class="header__menu__icon__wrapper">
						<img :src="icons.bell" alt="logo" class="" />
					</a>
				</div>
				<div
					class="header__menu__icon mr-0 md:mr-6 w-14 hidden md:block"
				>
					<div
						class="relative z-10 flex items-center justify-between bg-[#F8F8FA] py-[0.4rem] after:absolute after:bg-[#4EC1B6] after:top-[50%] after:px-1 after:translate-y-[-50%] after:w-6 after:h-6 after:rounded-full after:transition-all after:duration-500 after:ease-in-out rounded-xl"
						:class="{
							'after:left-0': !darkMode,
							'after:left-[50%] after:ml-1': darkMode,
						}"
					>
						<Icon
							icon="eva:sun-fill"
							class="w-4 h-4 relative ml-1 left-0 z-10 dark:text-slate-800 transition-all duration-500 ease-in-out"
							:class="{
								'text-white': !darkMode,
							}"
							@click="toggleDarkMode"
						/>
						<Icon
							icon="clarity:moon-solid"
							class="w-4 h-4 relative mr-1 right-0 z-10 transition-all duration-500 ease-in-out"
							:class="{
								'text-white': darkMode,
							}"
							@click="toggleDarkMode"
						/>
					</div>
				</div>
				<div class="header__menu__profile hidden md:flex items-center">
					<div class="header__menu__profile__avatar mr-4">
						<img
							:src="icons.avatar"
							alt="logo"
							class="rounded-lg"
						/>
					</div>
					<div class="header__menu__profile__text flex">
						<div class="name-wrapper flex flex-col">
							<span class="text-[#676F7E] font-[16px]"
								>Welcome</span
							>
							<span class="font-medium text-[16px]"
								>Danis Markonez</span
							>
						</div>
						<div class="icon-wrapper flex items-center ml-2">
							<Icon icon="fe:drop-down" class="text-2xl" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
import logobrand from "../assets/icons/logobrand.svg?url"
import bell from "../assets/icons/bell.svg?url"
import google from "../assets/icons/google.svg?url"
import avatar from "../assets/icons/avatar.svg?url"
import { Icon } from "@iconify/vue"
import { mapState, mapActions } from "vuex"

export default {
	components: {
		Icon,
	},
	props: {
		open: {
			type: Boolean,
			default: false,
		},
	},
	emits: ["isOpen"],
	data() {
		return {
			icons: {
				logobrand,
				bell,
				google,
				avatar,
			},
		}
	},
	computed: {
		...mapState(["isSideBarOpen", "darkMode"]),
	},
	watch: {
		isSideBarOpen() {
			console.log("isSideBarOpen", this.isSideBarOpen)
		},
	},
	methods: {
		...mapActions(["toggleSideBar", "toggleDarkMode"]),
		toggleMenu() {
			this.$emit("isOpen", !this.open)
		},
	},
}
</script>

<style scoped></style>
