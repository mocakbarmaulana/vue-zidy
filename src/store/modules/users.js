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
		searchByPhone: (state) => (phone) => {
			if (phone) {
				return state.users.filter((user) => user.phone.includes(phone))
			} else {
				return []
			}
		},
	},
	mutations: {},
	actions: {},
}
