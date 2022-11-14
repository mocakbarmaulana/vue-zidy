import auth from "../../data/auth.json"

export default {
	state: {
		auth: auth,
	},
	getters: {
		auth: (state) => state.auth,
	},
	mutations: {
		SET_AUTH(state, auth) {
			state.auth = auth
		},
	},
	actions: {
		setAuth({ commit }, auth) {
			commit("SET_AUTH", auth)
		},
	},
}
