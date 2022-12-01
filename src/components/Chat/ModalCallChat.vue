<script>
import { defineComponent } from "vue"
import {mapActions, mapGetters} from "vuex"
import { Icon } from "@iconify/vue"
import { VueFinalModal } from "vue-final-modal"
import avatarMedium from "../../assets/icons/avatar72.png?url"

export default defineComponent({
	name: "ModalCallChat",
	components: {
		Icon,
		VueFinalModal,
	},
	data() {
		return {
			icons: {
				avatarMedium,
			},
      isCall: false,
		}
	},
  computed: {
    ...mapGetters(["chats/isCall", "chats/callUserDetail"]),
  },
  watch: {
    "chats/isCall" (val) {
      this.isCall = val
    }
  },
  methods: {
    ...mapActions(["chats/setIsCall", "chats/setCallUserDetail"]),
    getCallUserDetail() {
      return this["chats/callUserDetail"]
    },
    updateIsCall() {
      this["chats/setIsCall"](false)
      this["chats/setCallUserDetail"](null)
    },
  }
})
</script>

<template>
	<VueFinalModal v-model="isCall" :drag="true" :hide-overlay="true" :z-index-auto="true" :prevent-click="true" content-class="content-modal-call">
      		<div
      			class="relative w-[350px] max-w-[350px] h-full md:h-auto mx-auto my-auto"
      		>
      			<!-- Modal content -->
      			<div class="flex flex-col bg-[#233638] rounded-[16px] p-6">
      				<div class="flex">
      					<img :src="icons.avatarMedium" alt="" class="" />
      					<div class="flex flex-col justify-center pl-3">
      						<span class="text-white font-medium text-lg"
      							>{{ getCallUserDetail()?.name }}</span
      						>
      						<span class="text-base text-white">0:44</span>
      					</div>
      				</div>
      				<div class="flex flex-row justify-between pt-6">
      					<div
      						class="flex justify-center items-center w-[48px] h-[48px] rounded-full bg-[#34494B] cursor-pointer"
      					>
      						<Icon
      							icon="ant-design:setting-outlined"
      							class="text-2xl text-white"
      						/>
      					</div>
      					<div
      						class="flex justify-center items-center w-[48px] h-[48px] rounded-full bg-[#34494B] cursor-pointer"
      					>
      						<Icon
      							icon="material-symbols:fiber-manual-record"
      							class="text-2xl text-red-500"
      						/>
      					</div>
      					<div
      						class="flex justify-center items-center w-[48px] h-[48px] rounded-full bg-[#34494B] cursor-pointer"
      					>
      						<Icon
      							icon="mdi:dots-grid"
      							class="text-2xl text-white"
      						/>
      					</div>
      					<div
      						class="flex justify-center items-center w-[48px] h-[48px] rounded-full bg-[#34494B] cursor-pointer"
      					>
      						<Icon
      							icon="ion:mic-outline"
      							class="text-2xl text-white"
      						/>
      					</div>
      					<div
      						class="flex justify-center items-center w-[48px] h-[48px] rounded-full bg-red-500 cursor-pointer"
                  @click="updateIsCall"
                >
      						<Icon
      							icon="ph:phone-call"
      							class="text-2xl text-white"
      						/>
      					</div>
      				</div>
      			</div>
      		</div>
  </VueFinalModal>
</template>

<style>
.content-modal-call {
  width: fit-content;
}
</style>
