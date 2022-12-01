<script>
import { mapGetters } from "vuex"
import avatarBig from "@/assets/icons/avatarBig.png?url"

export default {
	data() {
		return {
			icons: {
				avatarBig,
			},
		}
	},
	computed: {
		...mapGetters(["chats/messageUserDetail"]),
	},
	methods: {
		getDetailUser() {
			return this["chats/messageUserDetail"]
		},
	},
}
</script>

<template>
	<div
		class="chat__detail__header flex flex-col justify-center items-center pb-6 pt-8"
	>
		<img :src="icons.avatarBig" alt="" class="w-[96px] h-[96px]" />
		<span class="font-medium text-xl mt-4">{{ getDetailUser().name }}</span>
	</div>
	<div class="chat__detail__main max-w-[80%] mx-auto">
		<div
			class="chat__detail__data__wrapper flex flex-row justify-between items-center mb-4"
		>
			<div
				class="chat__data__title flex flex-row justify-center items-center"
			>
				<Icon
					icon="pixelarticons:buildings"
					class="text-2xl text-[#000000E5] hover:text-[#4EC1B6]"
				/>
				<span class="ml-2 font-medium text-sm">Company</span>
			</div>
			<div class="chat__data">
				<span class="text-sm">{{ getDetailUser().company }}</span>
			</div>
		</div>
		<div
			class="chat__detail__data__wrapper flex flex-row justify-between items-center mb-4"
		>
			<div
				class="chat__data__title flex flex-row justify-center items-center"
			>
				<Icon
					icon="bx:user"
					class="text-2xl text-[#000000E5] hover:text-[#4EC1B6]"
				/>
				<span class="ml-2 font-medium text-sm">Role</span>
			</div>
			<div class="chat__data">
				<span class="text-sm">{{ getDetailUser().role }}</span>
			</div>
		</div>
		<div
			class="chat__detail__data__wrapper flex flex-row justify-between items-center mb-4"
		>
			<div
				class="chat__data__title flex flex-row justify-center items-center"
			>
				<Icon
					icon="akar-icons:home-alt1"
					class="text-2xl text-[#000000E5] hover:text-[#4EC1B6]"
				/>
				<span class="ml-2 font-medium text-sm">Home</span>
			</div>
			<div class="chat__data">
				<span class="text-sm">{{ getDetailUser().home }}</span>
			</div>
		</div>
		<div
			class="chat__detail__data__wrapper flex flex-row justify-between items-center mb-4"
		>
			<div
				class="chat__data__title flex flex-row justify-center items-center"
			>
				<Icon
					icon="eva:email-outline"
					class="text-2xl text-[#000000E5] hover:text-[#4EC1B6]"
				/>
				<span class="ml-2 font-medium text-sm">Email</span>
			</div>
			<div class="chat__data">
				<span class="text-sm">{{ getDetailUser().email }}</span>
			</div>
		</div>
		<div
			class="chat__detail__data__wrapper flex flex-row justify-between items-center mb-4"
		>
			<div
				class="chat__data__title flex flex-row justify-center items-center"
			>
				<Icon
					icon="akar-icons:calendar"
					class="text-2xl text-[#000000E5] hover:text-[#4EC1B6]"
				/>
				<span class="ml-2 font-medium text-sm">Follow-up</span>
			</div>
			<div class="chat__data">
				<span class="text-sm">{{ getDetailUser().follow_up }}</span>
			</div>
		</div>
		<div
			class="chat__detail__data__wrapper flex flex-row justify-between items-center mb-4"
		>
			<div
				class="chat__data__title flex flex-row justify-center items-center"
			>
				<Icon
					icon="uil:notes"
					class="text-2xl text-[#000000E5] hover:text-[#4EC1B6]"
				/>
				<span class="ml-2 font-medium text-sm">Notes</span>
			</div>
			<div class="chat__data">
				<span class="text-sm">{{ getDetailUser().notes }}</span>
			</div>
		</div>
		<div
			class="chat__detail__data__wrapper flex flex-row justify-between items-center mb-4"
		>
			<div
				class="chat__data__title flex flex-row justify-center items-center"
			>
				<Icon
					icon="bx:message-square-check"
					class="text-2xl text-[#000000E5] hover:text-[#4EC1B6]"
				/>
				<span class="ml-2 font-medium text-sm">User</span>
			</div>
			<div class="chat__data">
				<input
					type="checkbox"
					class="checked:bg-[#4EC1B6]"
					:checked="getDetailUser().user"
				/>
			</div>
		</div>
		<div
			class="chat__detail__data__wrapper flex flex-row justify-between items-center mb-4"
		>
			<a
				href="#"
				class="chat__data__title flex flex-row justify-center items-center cursor-pointer"
			>
				<Icon
					icon="akar-icons:plus"
					class="text-2xl text-[#4EC1B6] hover:text-[#4EC1B6]"
				/>
				<span class="ml-2 font-medium text-sm text-[#4EC1B6] underline"
					>Add a property</span
				>
			</a>
			<div class="chat__data"></div>
		</div>
	</div>
</template>
