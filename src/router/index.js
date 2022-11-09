import { createRouter, createWebHistory } from "vue-router"

import Chat from "../views/Chat.vue"
import Home from "../views/Home.vue"

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/chat",
		name: "Chat",
		component: Chat,
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
