<template>
	<section class="md:p-2 px-0">
		<div class="heading-cards visible md:hidden px-8 pt-6">
			<h3 class="font-medium text-[28px]">Analytics</h3>
		</div>
		<div class="cards flex justify-between flex-col sm:flex-row flex-wrap">
			<div
				class="
					cards__card
					p-5
					m-2
					flex
					items-center
					bg-[#FDB53C1A]
					grow
					rounded-lg
				"
			>
				<div
					class="
						card__icon
						bg-white
						rounded-lg
						w-16
						h-16
						flex
						justify-center
						items-center
					"
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
				class="
					cards__card
					p-5
					m-2
					flex
					items-center
					bg-[#DCF3F0]
					grow
					rounded-lg
				"
			>
				<div
					class="
						card__icon
						bg-white
						rounded-lg
						w-16
						h-16
						flex
						justify-center
						items-center
					"
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
				class="
					cards__card
					p-5
					m-2
					flex
					items-center
					bg-[#DCEFFA]
					grow
					rounded-lg
				"
			>
				<div
					class="
						card__icon
						bg-white
						rounded-lg
						w-16
						h-16
						flex
						justify-center
						items-center
					"
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
				class="
					cards__card
					p-5
					m-2
					flex
					items-center
					bg-[#F8F6F2]
					grow
					rounded-lg
				"
			>
				<div
					class="
						card__icon
						bg-white
						p-4
						rounded-lg
						w-16
						h-16
						flex
						justify-center
						items-center
					"
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

	<section class="md:p2 px-0">
		<div class="flex w-full flex-col xl:flex-row min-h-[300px]">
			<div class="w-full xl:w-[50%] h-full p-10">
				<chart-component />
			</div>
			<div class="w-full xl:w-[50%] h-full p-10">
				<chart-component chart-wrapper="wrapper-two" />
			</div>
		</div>
	</section>
</template>

<script>
import { Icon } from "@iconify/vue"
import ChartComponent from "../components/Chart/ChartComponent.vue"

export default {
	name: "HomeView",
	components: {
		Icon,
		ChartComponent,
	},
}
</script>

<style scoped></style>
