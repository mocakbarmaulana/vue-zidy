import { createStore } from "vuex"

export default createStore({
	state: {
		isSideBarOpen: false,
	},
	mutations: {
		toggleSideBar(state) {
			state.isSideBarOpen = !state.isSideBarOpen
		},
	},
	actions: {
		toggleSideBar({ commit }) {
			commit("toggleSideBar")
		},
	},
	modules: {},
})
