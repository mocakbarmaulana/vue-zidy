<script>
import {mapGetters, mapActions} from "vuex"
import avatarMedium from "../../assets/icons/avatar72.png?url"

export default {
	name: "ModalAddChat",
	props: {
		id: {
			type: String,
			required: true,
			default: "modal",
		},
	},
	data() {
		return {
			icons: {
				avatarMedium,
			},
			isOpen: false,
			search: "",
			users: [],
			selectedAddUser: null,
		}
	},
	computed: {
		...mapGetters(["users/searchByPhone", "chats/isCall"]),
	},
	watch: {
		search(val) {
			this.users = this.searchUserByPhone(val)
			this.selectedAddUser = null
		},
	},
	mounted() {
		document.addEventListener("click", (e) => {
			if (
				e.target.closest(`[data-modal="${this.id}"]`) ||
				e.target.dataset.modal === this.id
			) {
				this.isOpen = !this.isOpen
			}
		})
	},
	methods: {
		...mapActions(["chats/addNewMessage", "chats/setIsCall", "chats/setCallUserDetail"]),
		searchUserByPhone(phone) {
			return this["users/searchByPhone"](phone)
		},
		selectAddUser(user) {
			this.selectedAddUser = user
		},
		createNewChat() {
			this["chats/addNewMessage"](this.selectedAddUser)
			this.selectedAddUser = null
			this.isOpen = false
		},
    getIsCall() {
      return this["chats/isCall"]
    },
    updateIsCall() {
      this["chats/setIsCall"](! this.getIsCall())
      this["chats/setCallUserDetail"](this.selectedAddUser)
      this.isOpen = false
      this.selectedAddUser = null
    }
	},
}
</script>

<template>
	<div
		id="defaultModal"
		tabindex="-1"
		aria-hidden="true"
		class="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 bottom-0 z-50 p-4 w-full md:inset-0 h-modal bg-[#00000080] backdrop-blur-sm md:h-full transition-all duration-300 ease-in-out"
		:class="{
			hidden: !isOpen,
			flex: isOpen,
		}"
	>
		<div class="relative w-full max-w-2xl h-full md:h-auto mx-auto my-auto">
			<!-- Modal content -->
			<div class="relative bg-white rounded-2xl shadow dark:bg-gray-700">
				<!-- Modal header -->
				<div
					class="flex justify-between items-start px-[40px] pt-[40px] pb-[32px] rounded-t border-b dark:border-gray-600"
				>
					<h3 class="font-medium text-[32px]">New Messages</h3>
					<button
						type="button"
						class="text-gray-400 bg-white drop-shadow-lg hover:bg-gray-200 hover:text-gray-900 rounded-full text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
						:data-modal="id"
					>
						<svg
							aria-hidden="true"
							class="w-5 h-5"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
								clip-rule="evenodd"
							></path>
						</svg>
						<span class="sr-only">Close modal</span>
					</button>
				</div>
				<!-- Modal body -->
				<div class="px-[40px] pt-[32px] pb-[32px] space-y-1">
					<input
						v-model="search"
						type="text"
						class="w-full text-[45px] leading-relaxed text-[rgba(35, 54, 56, 0.15] dark:text-gray-400 placeholder:text-[rgba(35, 54, 56, 0.15] focus:outline-0"
						placeholder="Name or Phone Number"
					/>
				</div>
				<div
					v-if="users.length"
					class="modal__list py-8 border-t space-y-2"
				>
					<div
						v-for="user in users"
						:key="user.id"
						class="px-[40px] flex flex-row justify-start py-4 hover:bg-[#F8F8FA] cursor-pointer"
						:class="{
							'bg-[#F8F8FA]': selectedAddUser === user,
						}"
						@click="selectAddUser(user)"
					>
						<img :src="icons.avatarMedium" alt="" class="" />
						<div
							class="flex flex-col justify-center pl-4 my-auto items-start"
						>
							<span class="font-medium text-xl mb-2 p-0">{{
								user.name
							}}</span>
							<p class="text-sm font-medium">
								<span class="text-[#4EC1B6] p-0">(321)</span>
								{{ user.phone }}
							</p>
						</div>
					</div>
				</div>
				<!-- Modal footer -->
				<div
					v-if="selectedAddUser !== null"
					class="flex items-center justify-end px-8 py-[32px] space-x-4 rounded-b border-t border-gray-200 dark:border-gray-600"
				>
					<button
						data-modal-toggle="defaultModal"
						type="button"
						class="text-[#000] bg-white hover:bg-[#4EC1B6] hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base border border-[#4EC1B6] px-8 py-[15px] text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					  @click="updateIsCall"
          >
						Call
					</button>
					<button
						type="button"
						class="text-[#000] bg-white hover:bg-[#4EC1B6] hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-[#4EC1B6] text-base font-medium px-8 py-[15px] focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
						@click="createNewChat"
					>
						Messages
					</button>
				</div>
			</div>
		</div>
	</div>
</template>
