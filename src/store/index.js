import { createStore } from "vuex"
import chats from "./modules/chats"
import auth from "./modules/auth"
import users from "./modules/users"

export default createStore({
	state: {
		isSideBarOpen: false,
		darkMode: false,
	},
	mutations: {
		toggleSideBar(state) {
			state.isSideBarOpen = !state.isSideBarOpen
		},
		SET_DARK_MODE(state, darkmode) {
			state.darkMode = darkmode
		},
	},
	actions: {
		toggleSideBar({ commit }) {
			commit("toggleSideBar")
		},
		toggleDarkMode({ commit, state }) {
			commit("SET_DARK_MODE", !state.darkMode)
			if (state.darkMode) {
				document.documentElement.classList.add("dark")
				localStorage.setItem("darkMode", "true")
			} else {
				document.documentElement.classList.remove("dark")
				localStorage.setItem("darkMode", "false")
			}
		},
	},
	modules: {
		auth,
		users,
		chats,
	},
})
