import moment from "moment"
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
			company: "",
		},
		isCall: false,
		callUserDetail: null
	},
	getters: {
		messages: (state) => state.messages,
		searchMessages: (state) => (search) => {
			const messages = state.messages.filter((message) => {
				return message.users.find((user) => user.id === auth.user_id)
			})

			if (search) {
				return messages.filter((message) => {
					return (
						message.users.find((user) =>
							user.name
								.toLowerCase()
								.includes(search.toLowerCase()),
						) ||
						message.messages.find((message) =>
							message.message
								.toLowerCase()
								.includes(search.toLowerCase()),
						)
					)
				})
			} else {
				return messages
			}
		},
		message: (state) => state.message,
		openMessage: (state) => state.message.messages,
		messageUserDetail: (state) => state.messageUserDetail,
		isCall: (state) => state.isCall,
		callUserDetail: (state) => state.callUserDetail,
	},
	mutations: {
		SET_MESSAGE(state, message) {
			state.message = message
		},
		SET_MESSAGE_USER_DETAIL(state, messageUserDetail) {
			state.messageUserDetail = messageUserDetail
		},
		UPDATE_MESSAGE(state, message) {
			const index = state.messages.findIndex(
				(item) => item.id === message.id,
			)
			state.messages[index] = message
		},
		ADD_OPEN_MESSAGE(state, message) {
			state.message.messages.push(message)
		},
		ADD_NEW_MESSAGE(state, message) {
			state.messages.push(message)
		},
		SET_IS_CALL(state, isCall) {
			state.isCall = isCall
		},
		SET_CALL_USER_DETAIL(state, callUserDetail) {
			state.callUserDetail = callUserDetail
		}
	},
	actions: {
		updateOpenMessage({ commit }, message) {
			commit("SET_MESSAGE", message)
		},
		updateMessageUserDetail({ commit }, messageUserDetail) {
			commit("SET_MESSAGE_USER_DETAIL", messageUserDetail)
		},
		updateMessage({ commit }, message) {
			commit("UPDATE_MESSAGE", message)
		},
		addOpenMessage({ commit, state, getters }, message) {
			const newMessage = {
				id: getters.openMessage.length + 1,
				message: message,
				user_id: auth.user_id,
				created_at: moment().format("YYYY-MM-DD HH:mm:ss"),
				update_at: moment().format("YYYY-MM-DD HH:mm:ss"),
			}

			commit("ADD_OPEN_MESSAGE", newMessage)

			commit("UPDATE_MESSAGE", state.message)
		},
		addNewMessage({ commit, state }, user) {
			const newMessage = {
				id: state.messages.at(-1).id + 1,
				users: [
					{
						id: auth.user_id,
						name: auth.name,
					},
					{
						id: user.id,
						name: user.name,
					},
				],
				messages: [],
				created_at: moment().format("YYYY-MM-DD HH:mm:ss"),
				update_at: moment().format("YYYY-MM-DD HH:mm:ss"),
				isGroup: false,
				description: "Group 1 description",
			}

			commit("ADD_NEW_MESSAGE", newMessage)

			commit("SET_MESSAGE", newMessage)
		},
		setIsCall({ commit }, isCall) {
			commit("SET_IS_CALL", isCall)
		},
		setCallUserDetail({ commit }, callUserDetail) {
			commit("SET_CALL_USER_DETAIL", callUserDetail)
		}
	},
}
