import allUsers from "@/data/users.json"

export default {
	namespaced: true,
	state: {
		users: allUsers,
		user: {},
	},
	getters: {
		users: (state) => state.users,
		user: (state) => state.user,
		userById: (state) => (id) => state.users.find((user) => user.id === id),
	},
	mutations: {},
	actions: {},
}
