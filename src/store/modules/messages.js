import allMessages from "../../data/messages.json"

export default {
	namespaced: true,
	state: {
		messages: allMessages,
		message: {},
	},
	getters: {
		messages: (state) => state.messages,
		message: (state) => state.message,
	},
	mutations: {
		ADD_MESSAGE(state, message) {
			state.messages.push(message)
		},
		DELETE_MESSAGE(state, id) {
			state.messages = state.messages.filter(
				(message) => message.id !== id,
			)
		},
		UPDATE_MESSAGE(state, message) {
			state.messages = state.messages.map((m) =>
				m.id === message.id ? message : m,
			)
		},
		SET_MESSAGE(state, message) {
			state.message = message
		},
	},
	actions: {
		addMessage({ commit }, message) {
			commit("ADD_MESSAGE", message)
		},
		deleteMessage({ commit }, id) {
			commit("DELETE_MESSAGE", id)
		},
		updateMessage({ commit }, message) {
			commit("UPDATE_MESSAGE", message)
		},
		setMessage({ commit }, message) {
			commit("SET_MESSAGE", message)
		},
		saveMessage({ commit }, message) {
			if (message.id) {
				commit("UPDATE_MESSAGE", message)
			} else {
				commit("ADD_MESSAGE", message)
			}
		},
	},
}
