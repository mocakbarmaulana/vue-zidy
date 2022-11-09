import vue from "@vitejs/plugin-vue"
import { defineConfig } from "vite"
import eslintPlugin from "vite-plugin-eslint"
import svgLoader from "vite-svg-loader"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		eslintPlugin({
			include: ["src/**/*.ts", "src/**/*.vue", "src/*.ts", "src/*.vue"],
		}),
		svgLoader(),
	],
})
