<script lang="ts">
import { defineComponent } from "vue"
import { mapGetters, mapState } from "vuex"
import moment from "moment"

export default defineComponent({
	computed: {
		...mapState(["auth"]),
		...mapGetters(["chats/openMessage"]),
	},
	methods: {
		getOpenMessage() {
			return this["chats/openMessage"]
		},
		convertDateToTime(data) {
			return moment(data).format("hh:mm A")
		},
	},
})
</script>

<template>
	<div
		v-for="openChatMessage in getOpenMessage()"
		:key="openChatMessage.id"
		class="flex flex-col mb-2"
		:class="{
			'ml-auto': openChatMessage.user_id === auth.auth.user_id,
			'mr-auto': openChatMessage.user_id !== auth.auth.user_id,
		}"
	>
		<span
			class="w-fit px-4 py-2 rounded-lg block"
			:class="{
				'bg-[#4EC1B6] text-white ml-auto':
					openChatMessage.user_id === auth.auth.user_id,
				'bg-white text-black mr-auto':
					openChatMessage.user_id !== auth.auth.user_id,
			}"
			>{{ openChatMessage.message }}
		</span>
		<span class="text-right text-xs">{{
			convertDateToTime(openChatMessage.created_at)
		}}</span>
	</div>
</template>
