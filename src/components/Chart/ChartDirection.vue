<template>
	<div class="h-[60px] flex items-center justify-center border rounded">
		<button
			class="h-full w-16 flex items-center justify-center text-2xl hover:bg-slate-200"
			@click="changeDirection('horizontal')"
		>
			<Icon icon="fluent-mdl2:double-column" />
		</button>
		<button
			class="h-full w-16 flex items-center justify-center text-2xl hover:bg-slate-200"
			@click="changeDirection('vertical')"
		>
			<Icon icon="fluent-mdl2:single-column" />
		</button>
	</div>
</template>

<script>
import { Icon } from "@iconify/vue"
export default {
	name: "ChartDirection",
	components: {
		Icon,
	},
	emits: ["change-direction"],
	methods: {
		changeDirection(direction) {
			this.$emit("change-direction", direction)
		},
	},
}
</script>
