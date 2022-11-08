<template>
	<aside
		class="
			fixed
			w-[70%]
			md:w-[90px]
			h-[calc(100vh-89px)]
			bg-[#4EC1B60F]
			md:h-screen
			top-[90px]
			md:top-0
			transition-all
			duration-500
			ease-in-out
		"
	>
		<nav
			class="sidebar flex h-full md:flex flex-col justify-between w-full"
		>
			<div class="sidebar__menu">
				<div
					class="
						sidebar__menu__brand
						hidden
						h-[89px]
						md:flex
						justify-center
						items-center
					"
				>
					<img src="./img/logobrand.svg" alt="" />
				</div>
				<div class="sidebar__menu__wrapper flex justify-center">
					<a
						class="
							sidebar__menu__wrapper__item--1
							flex
							items-start
							justify-center
							p-3
							rounded-[8px]
							bg-transparent
							hover:bg-[#4EC1B6]
							cursor-pointer
							transition
							hover:text-white
							mb-2
						"
					>
						<Icon icon="akar-icons:people-group" class="text-xl" />
					</a>
				</div>
				<div class="sidebar__menu__wrapper flex justify-center">
					<a
						class="
							sidebar__menu__wrapper__item--2
							flex
							items-start
							justify-center
							p-3
							rounded-[8px]
							bg-transparent
							hover:bg-[#4EC1B6]
							cursor-pointer
							transition
							hover:text-white
							mb-2
						"
					>
						<Icon icon="bi:chat-dots" class="text-xl" />
					</a>
				</div>
				<div class="sidebar__menu__wrapper flex justify-center">
					<a
						class="
							sidebar__menu__wrapper__item--3
							flex
							items-start
							justify-center
							p-3
							rounded-[8px]
							bg-transparent
							hover:bg-[#4EC1B6]
							cursor-pointer
							transition
							hover:text-white
							mb-2
						"
					>
						<Icon icon="bx:bar-chart-square" class="text-xl" />
					</a>
				</div>
				<div class="sidebar__menu__wrapper flex justify-center">
					<a
						class="
							sidebar__menu__wrapper__item--4
							flex
							items-start
							justify-center
							p-3
							rounded-[8px]
							bg-transparent
							hover:bg-[#4EC1B6]
							cursor-pointer
							transition
							hover:text-white
							mb-2
						"
					>
						<Icon icon="ant-design:star-outlined" class="text-xl" />
					</a>
				</div>
			</div>
			<div class="sidebar__setting">
				<div
					class="
						sidebar__setting__wrapper
						flex flex-col
						justify-center
						items-center
					"
				>
					<a
						class="
							sidebar__setting__wrapper__item--1
							flex
							items-start
							justify-center
							p-3
							rounded-[8px]
							bg-transparent
							hover:bg-[#4EC1B6]
							cursor-pointer
							transition
							hover:text-white
						"
					>
						<Icon icon="akar-icons:circle-plus" class="text-xl" />
					</a>
					<a
						class="
							sidebar__setting__wrapper__item--2
							flex
							items-start
							justify-center
							p-3
							rounded-[8px]
							bg-transparent
							hover:bg-[#4EC1B6]
							cursor-pointer
							transition
							hover:text-white
						"
					>
						<Icon icon="fe:logout" class="text-xl" />
					</a>
				</div>
			</div>
		</nav>
	</aside>
</template>

<script>
import { Icon } from "@iconify/vue"
export default {
	components: {
		Icon,
	},
}
</script>

<style scoped>
</style>