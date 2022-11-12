import { createStore } from "vuex"

export default createStore({
	state: {
		isSideBarOpen: false,
		darkMode: false,
	},
	mutations: {
		toggleSideBar(state) {
			state.isSideBarOpen = !state.isSideBarOpen
		},
		toggleDarkMode(state) {
			state.darkMode = !state.darkMode
		},
	},
	actions: {
		toggleSideBar({ commit }) {
			commit("toggleSideBar")
		},
		toggleDarkMode({ commit }) {
			commit("toggleDarkMode")
		},
	},
	modules: {},
})
