<template>
	<section
		id="chat"
		class="flex w-full flex-col md:flex-row min-h-[calc(100vh-90px)]"
	>
		<article
			id="chat-list"
			class="chat__parent w-full md:w-[70%] lg:w-[50%] xl:w-[30%] h-full border-r pt-6 transition-all duration-300 ease-in-out"
		>
			<div class="chat__header px-6">
				<form class="">
					<div class="flex items-center bg-[#F8F8FA] rounded-lg">
						<Icon icon="bi:search" class="w-4 h-4 mx-4" />
						<input
							id="search-chat"
							type="text"
							class="block py-4 px-2 w-full text-base text-[#676F7E] rounded-lg bg-[#F8F8FA] focus:outline-none"
							placeholder="Search people or messages..."
						/>
					</div>
				</form>
				<div
					class="tabs p-2 bg-[#F8F8FA] mt-6 rounded-lg flex mx-auto text-center"
				>
					<ul
						class="flex flex-wrap text-base font-medium text-center mx-auto text-[#000000]"
					>
						<li class="mr-2">
							<a
								href="#"
								class="inline-block py-3 px-3 text-[#4EC1B6] bg-white rounded-lg active"
								aria-current="page"
								>All (23)</a
							>
						</li>
						<li class="mr-2">
							<a
								href="#"
								class="inline-block py-3 px-3 rounded-lg hover:text-[#4EC1B6] hover:bg-[#fff]"
								>Opened (12)</a
							>
						</li>
						<li class="">
							<a
								href="#"
								class="inline-block py-3 px-3 rounded-lg hover:text-[#4EC1B6] hover:bg-white"
								>Closed (14)</a
							>
						</li>
					</ul>
				</div>
				<div class="chat__online mt-4 mb-8">
					<div
						class="chat__online__header flex justify-between flex-row items-center pb-6"
					>
						<span class="text-2xl font-medium">Online</span>
						<a
							class="text-[#4EC1B6] underline text-sm font-medium cursor-pointer"
							>View All</a
						>
					</div>
					<div class="chat__online__main flex flex-wrap">
						<div
							class="chat__online__main__wrapper flex flex-col justify-center mr-4"
						>
							<div class="chat__avatar relative block">
								<img :src="icons.chatAvatar" alt="" class="" />
								<div
									class="chat__online__status w-[12px] h-[12px] bg-[#39CE25] rounded-full outline outline-2 outline-white absolute top-2 right-0"
								></div>
							</div>
							<span class="text-base mt-2">Georgere</span>
						</div>
						<div
							class="chat__online__main__wrapper flex flex-col justify-center mr-4"
						>
							<div class="chat__avatar relative block">
								<img :src="icons.chatAvatar" alt="" class="" />
								<div
									class="chat__online__status w-[12px] h-[12px] bg-[#39CE25] rounded-full outline outline-2 outline-white absolute top-2 right-0"
								></div>
							</div>
							<span class="text-base mt-2">Georgere</span>
						</div>
						<div
							class="chat__online__main__wrapper flex flex-col justify-center mr-4"
						>
							<div class="chat__avatar relative block">
								<img :src="icons.chatAvatar" alt="" class="" />
								<div
									class="chat__online__status w-[12px] h-[12px] bg-[#39CE25] rounded-full outline outline-2 outline-white absolute top-2 right-0"
								></div>
							</div>
							<span class="text-base mt-2">Georgere</span>
						</div>
					</div>
				</div>
			</div>
			<div class="chat__list">
				<div
					class="chat__list__header flex justify-between items-center mb-6 px-6"
				>
					<span class="font-medium text-2xl">Chat</span>
					<a href="#" class="chat__list__edit">
						<img :src="icons.edit" alt="" class="" />
					</a>
				</div>
				<div class="chat__list flex flex-col">
					<div
						v-for="message in myMessages()"
						:key="message.id"
						class="chat flex items-center mb-4 hover:bg-[#F8F8FA] cursor-pointer py-1 px-6"
					>
						<div class="chat__avatar relative block">
							<img :src="icons.avatarSmall" alt="" class="" />
							<div
								class="chat__online__status w-[12px] h-[12px] bg-[#39CE25] rounded-full outline outline-2 outline-white absolute top-1 right-0"
							></div>
						</div>
						<div class="chat__preview pl-3 relative w-full">
							<div
								class="chat__preview__header flex flex-row justify-between items-center"
							>
								<span class="font-medium text-lg">{{
									filterUser(message.users).name
								}}</span>
								<span class="text-[#00000099] text-sm"
									>10.43am</span
								>
							</div>
							<div
								class="chat__preview__main flex flex-row justify-between"
							>
								<div
									class="chat__preview__value flex items-center"
								>
									<Icon
										icon="akar-icons:double-check"
										class="text-1xl text-[#2070E8]"
									/>
									<span
										class="pl-2 text-[#00000099] text-base"
										>Nice Shot bro!</span
									>
								</div>
								<div
									class="chat__count bg-[#F15C43] rounded-md w-[20px] h-[20px] flex justify-center items-center"
								>
									<span
										class="text-white text-xs font-medium text-center"
										>2</span
									>
								</div>
							</div>
							<div
								class="chat__label bg-[#FC6F7224] py-[2px] px-[4px] rounded-md inline my-auto absolute right-[10%] top-1/2 transform -translate-x-1/2 -translate-y-1/2"
							>
								<span
									class="text-[#FC6F72] font-medium text-xs text-center my-auto leading-none"
									>Label Here</span
								>
							</div>
						</div>
					</div>
				</div>
			</div>
		</article>
		<article class="chat__main hidden md:flex w-full">
			<article
				id="chat-canvas"
				class="chat__open__parent w-full h-full bg-[#F8F8FA] flex flex-col justify-between"
			>
				<div
					class="chat__open__header p-6 bg-white flex flex-row justify-between items-center border-b"
				>
					<div class="chat__open__header__user flex flex-row">
						<div class="chat__avatar relative inline-block z-10">
							<img :src="icons.avatarSmall" alt="" class="" />
							<div
								class="chat__online__status w-[12px] h-[12px] bg-[#39CE25] rounded-full outline outline-2 outline-white absolute top-1 right-0"
							></div>
						</div>
						<div
							class="chat__open__user__wrapper pl-3 flex flex-col justify-center items-start"
						>
							<span class="font-medium text-lg"
								>Roymarthen Ispar</span
							>
							<span
								class="font-normal text-base text-[#00B876] text-left"
								>Online</span
							>
						</div>
					</div>
					<div class="chat__open__header__feature flex flex-row">
						<a href="#" class="mr-4">
							<Icon
								icon="eva:video-outline"
								class="text-2xl text-[#000000E5] hover:text-[#4EC1B6]"
							/>
						</a>
						<a href="#" class="mr-4">
							<Icon
								icon="akar-icons:phone"
								class="text-2xl text-[#000000E5] hover:text-[#4EC1B6]"
							/>
						</a>
						<a href="#">
							<Icon
								icon="bi:three-dots"
								class="text-2xl text-[#000000E5] hover:text-[#4EC1B6]"
							/>
						</a>
					</div>
				</div>
				<form class="mx-4 mb-4">
					<div
						class="flex items-center py-2 px-3 bg-white rounded-lg"
					>
						<button
							type="button"
							class="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900"
						>
							<Icon
								icon="grommet-icons:attachment"
								class="text-2xl text-[#00000099] hover:text-[#4EC1B6]"
							/>
							<span class="sr-only">Upload image</span>
						</button>
						<button
							type="button"
							class="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-white"
						>
							<Icon
								icon="fa6-regular:face-smile"
								class="text-2xl text-[#00000099] hover:text-[#4EC1B6]"
							/>
							<span class="sr-only">Add emoji</span>
						</button>
						<textarea
							id="chat"
							rows="1"
							class="block mx-4 p-2.5 w-full text-base text-[#000000] placeholder:text-[#676F7E] bg-white rounded-lg focus:ring-blue-500 focus:border-blue-500"
							placeholder="Write a messages"
						></textarea>
						<button
							type="submit"
							class="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer dark:text-blue-500"
						>
							<Icon
								icon="fluent:send-16-filled"
								class="text-2xl text-[#4EC1B6] hover:text-[#4EC1B6]"
							/>
							<span class="sr-only">Send message</span>
						</button>
					</div>
				</form>
			</article>
			<article
				id="chat-users-detail"
				class="chat__open__detail w-[25%] h-full bg-white border-l hidden lg:block"
			>
				<div
					class="chat__detail__header flex flex-col justify-center items-center pb-6 pt-8"
				>
					<img
						:src="icons.avatarBig"
						alt=""
						class="w-[96px] h-[96px]"
					/>
					<span class="font-medium text-xl mt-4"
						>Roymarthen Ispar</span
					>
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
							<span class="ml-2 font-medium text-sm"
								>Company</span
							>
						</div>
						<div class="chat__data">
							<span class="text-sm">Simpson Co.</span>
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
							<span class="text-sm">Design</span>
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
							<span class="text-sm">(435) 4322-443.</span>
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
							<span class="text-sm">yor@zidy.com</span>
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
							<span class="ml-2 font-medium text-sm"
								>Follow-up</span
							>
						</div>
						<div class="chat__data">
							<span class="text-sm">Aprl 21, 2022</span>
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
							<span class="text-sm">New Project.</span>
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
							<span
								class="ml-2 font-medium text-sm text-[#4EC1B6] underline"
								>Add a property</span
							>
						</a>
						<div class="chat__data"></div>
					</div>
				</div>
			</article>
		</article>
	</section>
</template>

<script>
import { Icon } from "@iconify/vue"
import { mapGetters, mapState } from "vuex"
import chatAvatar from "../assets/icons/chatAvatar.png?url"
import avatarSmall from "../assets/icons/avatarSmall.png?url"
import avatarBig from "../assets/icons/avatarBig.png?url"
import edit from "../assets/icons/edit.svg?url"

export default {
	name: "ChatView",
	components: {
		Icon,
	},
	data() {
		return {
			icons: {
				chatAvatar,
				avatarSmall,
				avatarBig,
				edit,
			},
		}
	},
	computed: {
		...mapState(["auth"]),
		...mapGetters(["messages/myMessages"]),
	},
	mounted() {},
	methods: {
		myMessages() {
			return this["messages/myMessages"]
		},
		filterUser(users) {
			return users.find((user) => user.id !== this.auth.auth.user_id)
		},
	},
}
</script>
