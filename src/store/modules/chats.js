import allMessages from "../../data/messages.json"
import auth from "../../data/auth.json"

export default {
	namespaced: true,
	state: {
		messages: allMessages,
		message: {},
		messageUserDetail: {
			id: "",
			name: "",
			compoany: "",
		},
	},
	getters: {
		messages: (state) => state.messages,
		message: (state) => state.message,
		openMessage: (state) => state.message.messages,
		messageUserDetail: (state) => state.messageUserDetail,
		myMessages: (state) =>
			state.messages.filter((message) =>
				message.users.find((user) => user.id === auth.user_id),
			),
	},
	mutations: {
		SET_MESSAGE(state, message) {
			state.message = message
		},
		SET_MESSAGE_USER_DETAIL(state, messageUserDetail) {
			state.messageUserDetail = messageUserDetail
		},
	},
	actions: {
		updateOpenMessage({ commit }, message) {
			commit("SET_MESSAGE", message)
		},
		updateMessageUserDetail({ commit }, messageUserDetail) {
			commit("SET_MESSAGE_USER_DETAIL", messageUserDetail)
		},
	},
}
