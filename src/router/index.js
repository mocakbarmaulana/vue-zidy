import { createRouter, createWebHistory } from "vue-router"

import Chat from "../views/Chat.vue"
import Home from "../views/Home.vue"

const routes = [
	{
		path: "/",
		name: "home",
		component: Home,
	},
	{
		path: "/chat",
		name: "chat",
		component: Chat,
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
