<template>
	<section class="p-1 md:p-2 px-0">
		<div class="heading-cards visible md:hidden px-8 pt-6">
			<h3 class="font-medium text-[28px]">Analytics</h3>
		</div>
		<div class="cards px-8 mb-10 flex justify-between flex-col md:flex-row">
			<div
				class="
					cards__card
					flex flex-row
					justify-start
					bg-[#FDB53C1A]
					rounded-[12px]
					p-4
					md:w-[24%]
					w-full
					md:mb-0
					mb-4
				"
			>
				<div class="cards__card__icon bg-white p-5 rounded-[12px] mr-4">
					<img src="#" alt="" />
				</div>
				<div
					class="
						cards__card__info
						flex flex-col
						items-start
						justify-center
					"
				>
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
					flex flex-row
					justify-start
					bg-main-green-200
					rounded-[12px]
					p-4
					md:w-[24%]
					w-full
					md:mb-0
					mb-4
				"
			>
				<div class="cards__card__icon bg-white p-5 rounded-[12px] mr-4">
					<img src="#" alt="" />
				</div>
				<div
					class="
						cards__card__info
						flex flex-col
						items-start
						justify-center
					"
				>
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
					flex flex-row
					justify-start
					bg-[#DCEFFA]
					rounded-[12px]
					p-4
					md:w-[24%]
					w-full
					md:mb-0
					mb-4
				"
			>
				<div class="cards__card__icon bg-white p-5 rounded-[12px] mr-4">
					<img src="#" alt="" />
				</div>
				<div
					class="
						cards__card__info
						flex flex-col
						items-start
						justify-center
					"
				>
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
					flex flex-row
					justify-start
					bg-[#F8F6F2]
					rounded-[12px]
					p-4
					md:w-[24%]
					w-full
					md:mb-0
					mb-4
				"
			>
				<div class="cards__card__icon bg-white p-5 rounded-[12px] mr-4">
					<img src="#" alt="" />
				</div>
				<div
					class="
						cards__card__info
						flex flex-col
						items-start
						justify-center
					"
				>
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
</template>

<script>
export default {
	name: "HomeView",
}
</script>

<style scoped>
</style>
