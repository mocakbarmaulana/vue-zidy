<template>
	<aside
		class="fixed w-full md:w-[90px] h-screen md:left-0 md:bg-[#4EC1B60F] bg-[#DCF3F0] md:h-screen top-0 transition-all duration-500 ease-in-out z-50"
		:class="{
			'left-0': isSideBarOpen,
			'-left-full': !isSideBarOpen,
		}"
	>
		<nav
			class="sidebar flex h-full md:flex flex-col justify-start md:justify-between w-full"
		>
			<div class="sidebar__menu">
				<div
					class="sidebar__menu__brand hidden h-[89px] md:flex justify-center items-center"
				>
					<img :src="icons.logobrand" alt="" />
				</div>
				<div
					class="sidebar__menu__wrapper flex justify-start md:justify-center px-5 md:px-0 my-5 md:my-0 md:hidden"
				>
					<div
						class="sidebar__menu__wrapper__item w-full md:w-fit flex items-center justify-between p-3 rounded-[8px] cursor-pointer transition hover:text-white mb-2"
						@click="toggleSideBar"
					>
						<figure class="flex items-center">
							<img
								:src="icons.logobrandText"
								alt="logo"
								class="mr-2"
							/>
						</figure>
						<Icon
							icon="ci:close-small"
							class="text-3xl bg-white text-[#4EC1B6] rounded-full shadow-lg hover:bg-[#4EC1B6] hover:text-white"
						/>
					</div>
				</div>
				<div
					class="sidebar__menu__wrapper flex justify-start md:justify-center px-5 md:px-0"
				>
					<router-link
						to="/"
						class="sidebar__menu__wrapper__item w-full md:w-fit flex items-start justify-start md:justify-center p-3 rounded-[8px] hover:bg-[#4EC1B6] cursor-pointer transition hover:text-white mb-2"
						:class="{
							'bg-[#4EC1B6]': $route.path === '/',
							'text-white': $route.path === '/',
						}"
						@click="clickNav"
					>
						<Icon icon="akar-icons:people-group" class="text-xl" />
						<span class="sidebar__menu__item--text md:hidden ml-2"
							>All Contact</span
						>
					</router-link>
				</div>
				<div
					class="sidebar__menu__wrapper flex justify-start md:justify-center px-5 md:px-0"
				>
					<router-link
						to="/chat"
						class="sidebar__menu__wrapper__item w-full md:w-fit flex items-start justify-start md:justify-center p-3 rounded-[8px] hover:bg-[#4EC1B6] cursor-pointer transition hover:text-white mb-2"
						:class="{
							'bg-[#4EC1B6]': $route.path === '/chat',
							'text-white': $route.path === '/chat',
						}"
						@click="clickNav"
					>
						<Icon icon="bi:chat-dots" class="text-xl" />
						<span class="sidebar__menu__item--text md:hidden ml-2"
							>Start Conversation</span
						>
					</router-link>
				</div>
				<div
					class="sidebar__menu__wrapper flex justify-start md:justify-center px-5 md:px-0"
				>
					<a
						class="sidebar__menu__wrapper__item w-full md:w-fit flex items-start justify-start md:justify-center p-3 rounded-[8px] bg-transparent hover:bg-[#4EC1B6] cursor-pointer transition hover:text-white mb-2"
					>
						<Icon icon="bx:bar-chart-square" class="text-xl" />
						<span class="sidebar__menu__item--text md:hidden ml-2"
							>Measure Progress</span
						>
					</a>
				</div>
				<div
					class="sidebar__menu__wrapper flex justify-start md:justify-center px-5 md:px-0"
				>
					<a
						class="sidebar__menu__wrapper__item w-full md:w-fit flex items-start justify-start md:justify-center p-3 rounded-[8px] bg-transparent hover:bg-[#4EC1B6] cursor-pointer transition hover:text-white mb-2"
					>
						<Icon icon="ant-design:star-outlined" class="text-xl" />
						<span class="sidebar__menu__item--text md:hidden ml-2"
							>Your Google Reviews</span
						>
					</a>
				</div>
			</div>
			<div class="sidebar__setting">
				<div
					class="sidebar__setting__wrapper flex flex-col md:items-center px-5 md:px-0"
				>
					<a
						class="sidebar__setting__wrapper__item w-full md:w-fit flex items-start justify-start md:justify-center p-3 rounded-[8px] bg-transparent hover:bg-[#4EC1B6] cursor-pointer transition hover:text-white mb-2"
					>
						<Icon icon="akar-icons:circle-plus" class="text-xl" />
						<span class="sidebar__menu__item--text md:hidden ml-2"
							>Sedang Review Invite</span
						>
					</a>
					<a
						class="sidebar__setting__wrapper__item w-full md:w-fit flex items-start justify-start md:justify-center p-3 rounded-[8px] bg-transparent hover:bg-[#4EC1B6] cursor-pointer transition hover:text-white mb-2"
					>
						<Icon icon="fe:logout" class="text-xl" />
						<span class="sidebar__menu__item--text md:hidden ml-2"
							>Log out</span
						>
					</a>
				</div>
			</div>
			<div class="sidebar__profile md:hidden px-5 mt-auto flex">
				<div class="header__menu__profile__avatar mr-4">
					<img :src="icons.avatar" alt="logo" class="rounded-lg" />
				</div>
				<div class="header__menu__profile__text flex mb-4">
					<div class="name-wrapper flex flex-col">
						<span class="text-[#676F7E] font-[16px]">Welcome</span>
						<span class="font-medium text-[16px]"
							>Danis Markonez</span
						>
					</div>
				</div>
				<div class="icon-wrapper flex items-center ml-auto">
					<Icon icon="fe:drop-down" class="text-2xl" />
				</div>
			</div>
		</nav>
	</aside>
</template>

<script>
import { Icon } from "@iconify/vue"
import { useRoute } from "vue-router"
import logobrand from "../assets/icons/logobrand.svg?url"
import logobrandText from "../assets/icons/logobrand-text.svg?url"
import avatar from "../assets/icons/avatar.svg?url"
import { mapState, mapActions } from "vuex"

export default {
	components: {
		Icon,
	},
	emits: ["clicked-nav"],
	data() {
		return {
			icons: {
				logobrand,
				avatar,
				logobrandText,
			},
			pathname: "",
		}
	},
	computed: {
		...mapState(["isSideBarOpen"]),
	},
	watch: {
		$route() {
			this.pathname = this.$route.path
		},
	},
	mounted() {
		this.pathname = useRoute().path
	},
	methods: {
		...mapActions(["toggleSideBar"]),
		clickNav() {
			this.toggleSideBar()
		},
	},
}
</script>

<style scoped></style>
