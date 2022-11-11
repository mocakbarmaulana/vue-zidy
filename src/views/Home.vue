<template>
	<section class="md:p-2 px-0">
		<div class="heading-cards visible md:hidden px-8 pt-6">
			<h3 class="font-medium text-[28px]">Analytics</h3>
		</div>
		<div class="cards flex justify-between flex-col sm:flex-row flex-wrap">
			<div
				class="cards__card p-5 m-2 flex items-center bg-[#FDB53C1A] grow rounded-lg"
			>
				<div
					class="card__icon bg-white rounded-lg w-16 h-16 flex justify-center items-center"
				>
					<Icon
						icon="bxs:user-rectangle"
						class="text-4xl text-yellow-400"
					/>
				</div>
				<div class="card__info ml-4">
					<span class="text-base font-normal leading-4">Contact</span>
					<div class="card-value mt-2 flex">
						<div class="card-value__number flex items-center">
							<span class="text-[32px] font-medium">643</span>
						</div>
						<div class="card-value__text flex items-center pl-2">
							<span class="font-normal text-normal">Total</span>
						</div>
					</div>
				</div>
			</div>
			<div
				class="cards__card p-5 m-2 flex items-center bg-[#DCF3F0] grow rounded-lg"
			>
				<div
					class="card__icon bg-white rounded-lg w-16 h-16 flex justify-center items-center"
				>
					<Icon
						icon="bxs:user-rectangle"
						class="text-4xl text-[#4ec1b6]"
					/>
				</div>
				<div class="card__info ml-4">
					<span class="text-base font-normal leading-4"
						>Review Invites</span
					>
					<div class="card-value mt-2 flex">
						<div class="card-value__number flex items-center">
							<span class="text-[32px] font-medium">643</span>
						</div>
						<div class="card-value__text flex items-center pl-2">
							<span class="font-normal text-normal">Total</span>
						</div>
					</div>
				</div>
			</div>
			<div
				class="cards__card p-5 m-2 flex items-center bg-[#DCEFFA] grow rounded-lg"
			>
				<div
					class="card__icon bg-white rounded-lg w-16 h-16 flex justify-center items-center"
				>
					<Icon
						icon="bxs:user-rectangle"
						class="text-4xl text-[#4fafe7]"
					/>
				</div>
				<div class="card__info ml-4">
					<span class="text-base font-normal leading-4"
						>Messages Sent</span
					>
					<div class="card-value mt-2 flex">
						<div class="card-value__number flex items-center">
							<span class="text-[32px] font-medium">643</span>
						</div>
						<div class="card-value__text flex items-center pl-2">
							<span class="font-normal text-normal">Total</span>
						</div>
					</div>
				</div>
			</div>
			<div
				class="cards__card p-5 m-2 flex items-center bg-[#F8F6F2] grow rounded-lg"
			>
				<div
					class="card__icon bg-white p-4 rounded-lg w-16 h-16 flex justify-center items-center"
				>
					<Icon
						icon="bi:chat-left-text-fill"
						class="text-4xl bg-[#7c725f] text-white p-1 rounded"
					/>
				</div>
				<div class="card__info ml-4">
					<span class="text-base font-normal leading-4"
						>Messages Recieved</span
					>
					<div class="card-value mt-2 flex">
						<div class="card-value__number flex items-center">
							<span class="text-[32px] font-medium">643</span>
						</div>
						<div class="card-value__text flex items-center pl-2">
							<span class="font-normal text-normal">Total</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section id="chart" class="md:p2 px-0">
		<div
			class="px-6 chart__header w-full flex justify-between items-center"
		>
			<h3 class="chart__header__text text-[24px] font-medium">
				Statistic
			</h3>
			<div class="flex items-center">
				<div class="w-[200px] mx-2 md:hidden">
					<select-fly :options="options" placeholder="Filter" />
				</div>
				<div class="w-[200px] mx-2 hidden md:block">
					<select-fly :options="options" placeholder="Contact" />
				</div>
				<div class="w-[200px] mx-2 hidden md:block">
					<select-fly :options="options" placeholder="Monthly" />
				</div>
				<div class="mx-2 hidden md:block w-32">
					<chart-direction @change-direction="changeDirection" />
				</div>
			</div>
		</div>
		<div
			class="chart__content flex w-full min-h-[500px]"
			:class="{
				'flex-col': directionChart === 'vertical',
				'flex-row': directionChart === 'horizontal',
			}"
		>
			<div
				class="w-full p-10"
				:class="{
					'w-1/2': directionChart === 'horizontal',
					'w-full': directionChart === 'vertical',
				}"
			>
				<chart-component />
			</div>
			<div
				class="w-full p-10"
				:class="{
					'w-1/2': directionChart === 'horizontal',
					'w-full': directionChart === 'vertical',
				}"
			>
				<chart-component chart-wrapper="wrapper-two" />
			</div>
		</div>
	</section>
</template>

<script>
import { Icon } from "@iconify/vue"
import ChartComponent from "../components/Chart/ChartComponent.vue"
import SelectFly from "../components/Select/Select.vue"
import ChartDirection from "../components/Chart/ChartDirection.vue"

export default {
	name: "HomeView",
	components: {
		Icon,
		ChartComponent,
		SelectFly,
		ChartDirection,
	},
	data() {
		return {
			options: [
				{ value: "jan", label: "January" },
				{ value: "feb", label: "February" },
				{ value: "mar", label: "March" },
				{ value: "apr", label: "April" },
				{ value: "may", label: "May" },
				{ value: "jun", label: "June" },
				{ value: "jul", label: "July" },
				{ value: "aug", label: "August" },
				{ value: "sep", label: "September" },
				{ value: "oct", label: "October" },
				{ value: "nov", label: "November" },
				{ value: "dec", label: "December" },
			],
			directionChart: "horizontal",
			isMobile: false,
		}
	},
	created() {
		window.addEventListener("resize", this.handeResize)
	},

	methods: {
		changeDirection(value) {
			this.directionChart = value
			console.log(value)
		},
		handeResize(value) {
			if (value.target.innerWidth < 768) {
				this.directionChart = "vertical"
			} else {
				this.directionChart = "horizontal"
			}
			console.log(value)
		},
	},
}
</script>

<style scoped></style>
