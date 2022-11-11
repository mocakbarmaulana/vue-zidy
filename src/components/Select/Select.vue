<template>
	<div class="w-full relative">
		<button
			class="flex items-center justify-between w-full bg-white p-3 rounded border h-[60px]"
			@click="toggleDropdown"
		>
			<span>{{ selected !== null ? selected.label : placeholder }}</span>
			<Icon icon="gridicons:dropdown" />
		</button>
		<!-- Option list with fly styles -->
		<div
			class="w-full absolute bg-white mt-1"
			:class="{
				hidden: !showDropdown,
				block: showDropdown,
			}"
		>
			<ul class="rounded border list-option">
				<li
					v-for="(option, index) in options"
					:key="index"
					:data-value="option.value"
					class="p-2 hover:bg-gray-100 cursor-pointer"
					:class="{
						'rounded-t': index === 0,
						'rounded-b': index === options.length - 1,
					}"
					@click="selectedOption(option)"
				>
					{{ option.label }}
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import { Icon } from "@iconify/vue"
export default {
	name: "SelectFly",
	components: {
		Icon,
	},
	props: {
		options: {
			type: Array,
			default: () => [],
		},
		placeholder: {
			type: String,
			default: "Select",
		},
	},
	data() {
		return {
			showDropdown: false,
			selected: null,
		}
	},
	mounted() {},
	methods: {
		selectedOption(option) {
			this.selected = option
			this.showDropdown = false
		},
		handleClick() {},
		toggleDropdown() {
			this.showDropdown = !this.showDropdown
		},
		closeDropdown() {
			this.showDropdown = false
		},
	},
}
</script>

<style scoped></style>
