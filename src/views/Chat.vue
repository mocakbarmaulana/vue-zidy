<script>
import { Icon } from "@iconify/vue"
import { mapActions, mapGetters, mapState } from "vuex"
import chatAvatar from "../assets/icons/chatAvatar.png?url"
import avatarSmall from "../assets/icons/avatarSmall.png?url"
import avatarBig from "../assets/icons/avatarBig.png?url"
import avatarMedium from "../assets/icons/avatar72.png?url"
import edit from "../assets/icons/edit.svg?url"
import CanvasChat from "../components/Chat/CanvasChat.vue"
import DetailUserChat from "../components/Chat/DetailUserChat.vue"

export default {
	name: "ChatView",
	components: {
		Icon,
		CanvasChat,
		DetailUserChat,
	},
	data() {
		return {
			icons: {
				chatAvatar,
				avatarSmall,
				avatarBig,
				avatarMedium,
				edit,
			},
			myMessages: [],
			isOpenChat: false,
			newOpenChat: "",
			searchChat: "",
			isDetail: false,
		}
	},
	computed: {
		...mapState(["auth"]),
		...mapGetters([
			"chats/myMessages",
			"chats/openMessage",
			"chats/message",
			"chats/messageUserDetail",
			"chats/searchMessages",
			"users/userById",
		]),
	},
	watch: {
		"chats/message"(val) {
			if (val) {
				this.isOpenChat = true
			}
			this["chats/updateMessageUserDetail"](
				this["users/userById"](this.filterUser(val.users).id),
			)
		},
		searchChat(val) {
			this.myMessages = this.searchMessages(val)
		},
	},
	mounted() {
		this.myMessages = this.searchMessages()
	},
	methods: {
		...mapActions([
			"chats/updateOpenMessage",
			"chats/updateMessageUserDetail",
			"chats/addOpenMessage",
		]),
		handleDetail() {
			this.isDetail = !this.isDetail
		},
		filterUser(users) {
			return users.find((user) => user.id !== this.auth.auth.user_id)
		},
		sendOpenChat() {
			this["chats/addOpenMessage"](this.newOpenChat)
			this.newOpenChat = ""
		},
		searchMessages(search) {
			return this["chats/searchMessages"](search)
		},
		getMessage() {
			return this["chats/message"]
		},
		getDetailUser() {
			return this["chats/messageUserDetail"]
		},
		openChat(chat) {
			this["chats/updateOpenMessage"](chat)
		},
	},
}
</script>

<template>



<!-- Main modal -->
<div id="defaultModal" tabindex="-1" aria-hidden="true" class="flex overflow-y-auto overflow-x-hidden fixed  top-0 right-0 left-0 bottom-0 z-50 p-4 w-full md:inset-0 h-modal bg-[#00000080] backdrop-blur-sm md:h-full">
    <div class="relative w-full max-w-2xl h-full md:h-auto mx-auto my-auto">
        <!-- Modal content -->
        <div class="relative bg-white rounded-2xl shadow dark:bg-gray-700 ">
            <!-- Modal header -->
            <div class="flex justify-between items-start px-[40px] pt-[40px] pb-[32px] rounded-t border-b dark:border-gray-600">
                <h3 class="font-medium text-[32px]">
                    New Messages
                </h3>
                <button type="button" class="text-gray-400 bg-white drop-shadow-lg hover:bg-gray-200 hover:text-gray-900 rounded-full text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <!-- Modal body -->
            <div class="px-[40px] pt-[32px] pb-[32px] space-y-1">
				<input type="text" class="text-[45px] leading-relaxed text-[rgba(35, 54, 56, 0.15] dark:text-gray-400 placeholder:text-[rgba(35, 54, 56, 0.15] focus:outline-0" placeholder="Name or Phone Number">
            </div>
			<div class="modal__list py-8 border-t space-y-2">
				<a href="#" class="px-[40px] flex flex-row justify-start py-4 hover:bg-[#F8F8FA] cursor-pointer">
					<img :src="icons.avatarMedium" alt=""  class="" />
					<div class="flex flex-col justify-center pl-4 my-auto items-start">
						<span class="font-medium text-xl mb-2 p-0">Joose Lorindor</span>
						<p class="text-sm font-medium"> <span class="text-[#4EC1B6] p-0">(321)</span> 3392 0995</p>
					</div>
				</a>
				<a href="#" class="px-[40px] flex flex-row justify-start py-4 hover:bg-[#F8F8FA] cursor-pointer">
					<img :src="icons.avatarMedium" alt=""  class="" />
					<div class="flex flex-col justify-center pl-4 my-auto items-start">
						<span class="font-medium text-xl mb-2 p-0">Joose Lorindor</span>
						<p class="text-sm font-medium"> <span class="text-[#4EC1B6] p-0">(321)</span> 3392 0995</p>
					</div>
				</a>
			</div>
            <!-- Modal footer -->
            <div class="flex items-center justify-end px-8 py-[32px] space-x-4 rounded-b border-t border-gray-200 dark:border-gray-600">
                <button data-modal-toggle="defaultModal" type="button" class="text-[#000] bg-white hover:bg-[#4EC1B6] hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base border border-[#4EC1B6] px-8 py-[15px] text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Call</button>
                <button data-modal-toggle="defaultModal" type="button" class="text-[#000] bg-white hover:bg-[#4EC1B6] hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-[#4EC1B6] text-base font-medium px-8 py-[15px] focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Messages</button>
            </div>
        </div>
    </div>
</div>

	<section
		id="chat"
		class="flex w-full flex-col lg:flex-row min-h-[calc(100vh-90px)] relative"
	>
		<article
			id="chat-list"
			class="chat__parent w-full lg:w-[50%] xl:w-[40%] h-[calc(100vh-90px)] border-r pt-2 transition-all duration-300 ease-in-out"
		>
			<div class="chat__header px-6">
				<form class="">
					<div class="flex items-center bg-[#F8F8FA] rounded-lg">
						<Icon icon="bi:search" class="w-4 h-4 mx-4" />
						<input
							id="search-chat"
							v-model="searchChat"
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
						v-for="message in myMessages"
						:key="message.id"
						class="chat flex items-center hover:bg-[#F8F8FA] cursor-pointer px-6 py-4"
						:class="{
							'bg-[#F8F8FA]': message.id === getMessage().id,
						}"
						@click="openChat(message)"
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
		<article
			v-show="isOpenChat"
			class="chat__main md:flex w-full h-[calc(100vh-90px)]"
			:class="{
				'absolute top-0 lg:relative': isOpenChat,
				relative: !isOpenChat,
			}"
		>
			<article
				v-show="isOpenChat"
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
							class="chat__open__user__wrapper pl-3 flex flex-col justify-center items-start cursor-pointer"
							@click="handleDetail"
						>
							<span class="font-medium text-lg">{{
								getDetailUser().name
							}}</span>
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
				<div class="chat__open__body flex flex-col h-full p-6 w-full">
					<canvas-chat />
				</div>
				<form class="mx-4 mb-4" @submit.prevent="sendOpenChat">
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
						<input
							id="chat"
							v-model="newOpenChat"
							type="text"
							rows="1"
							class="block mx-4 p-2.5 w-full text-base text-[#000000] placeholder:text-[#676F7E] bg-white rounded-lg focus:ring-blue-500 focus:border-blue-500"
							placeholder="Write a messages"
						/>
						<button
							type="button"
							class="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer dark:text-blue-500"
							@click="sendOpenChat"
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
				class="chat__open__detail h-full bg-white border-l transition-all duration-300 ease-in-out"
				:class="{
					hidden: !isDetail,
					'block absolute top-0 w-full md:w-[30%] md:relative z-20':
						isDetail,
				}"
			>
				<detail-user-chat />
			</article>
		</article>
	</section>
</template>
