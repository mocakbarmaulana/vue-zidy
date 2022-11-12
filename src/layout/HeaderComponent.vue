<template>
	<header
		class="top-0 md:w-[calc(100vw-90px)] w-full lg:bg-white lg:bg-none h-[90px] transition-all duration-500 ease-in-out border-b bg-[#DCF3F0]"
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
					class="text-white w-10 h-10 relative focus:outline-none"
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
				<div class="header__menu__icon mr-4">
					<a href="#" class="header__menu__icon__wrapper">
						<img :src="icons.google" alt="logo" />
					</a>
				</div>
				<div class="header__menu__icon mr-0 md:mr-6">
					<a href="#" class="header__menu__icon__wrapper">
						<img :src="icons.bell" alt="logo" />
					</a>
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
		...mapState(["isSideBarOpen"]),
	},
	watch: {
		isSideBarOpen() {
			console.log("isSideBarOpen", this.isSideBarOpen)
		},
	},
	methods: {
		...mapActions(["toggleSideBar"]),
		toggleMenu() {
			this.$emit("isOpen", !this.open)
		},
	},
}
</script>

<style scoped></style>
