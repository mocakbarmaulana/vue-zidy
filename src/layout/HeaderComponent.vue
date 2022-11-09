<template>
	<header
		class="fixed top-0 md:w-[calc(100vw-90px)] w-full lg:bg-white lg:bg-none h-[90px] transition-all duration-500 ease-in-out bg-[#DCF3F0]"
	>
		<div
			class="header flex md:flex flex-row justify-between w-full items-center h-full px-8"
		>
			<nav class="burger__menu md:hidden">
				<button
					class="text-white w-10 h-10 relative focus:outline-none"
					@click="toggleMenu"
				>
					<div
						class="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
					>
						<span
							class="block absolute h-0.5 w-5 bg-[#4EC1B6] transform transition duration-500 ease-in-out"
							:class="{
								'rotate-45': open,
								' -translate-y-1.5': !open,
							}"
						></span>
						<span
							class="block absolute h-0.5 w-5 bg-[#4EC1B6] transform transition duration-500 ease-in-out"
							:class="{ 'opacity-0': open }"
						></span>
						<span
							class="block absolute h-0.5 w-5 bg-[#4EC1B6] transform transition duration-500 ease-in-out"
							:class="{
								'-rotate-45': open,
								' translate-y-1.5': !open,
							}"
						></span>
					</div>
				</button>
			</nav>
			<figure class="header__logo self-center lg:hidden">
				<img :src="logobrand" alt="logo" />
			</figure>
			<div class="header__title hidden md:block">
				<a
					href="#"
					class="text-[28px] leading-[31px] fontColorDefault font-medium"
					>Analytics</a
				>
			</div>
			<div class="header__menu flex items-center">
				<div class="header__menu__icon mr-4">
					<a href="#" class="header__menu__icon__wrapper">
						<Icon
							icon="arcticons:google-authenticator"
							class="text-2xl text-black"
						/>
					</a>
				</div>
				<div class="header__menu__icon mr-6">
					<a href="#" class="header__menu__icon__wrapper">
						<Icon icon="carbon:notification" class="text-2xl" />
					</a>
				</div>
				<div class="header__menu__profile hidden md:flex items-center">
					<div class="header__menu__profile__avatar mr-4">
						<Icon
							icon="carbon:user-avatar-filled"
							class="text-4xl"
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
import { Icon } from "@iconify/vue"

export default {
	components: {
		Icon,
	},
	emits: ["isOpen"],
	data() {
		return {
			logobrand,
			open: false,
		}
	},
	methods: {
		toggleMenu() {
			this.open = !this.open
			this.$emit("isOpen", this.open)
		},
	},
}
</script>

<style scoped></style>
