<template>
	<canvas :id="chartWrapper" :width="width" :height="height"></canvas>
</template>

<script>
import Chart from "chart.js/auto"
export default {
	props: {
		chartWrapper: {
			type: String,
			default: "chart-wrapper",
		},
		width: {
			type: String,
			default: "100%",
		},
		height: {
			type: String,
			default: "100%",
		},
	},
	data() {
		return {
			config: {
				type: "bar",
				data: {
					labels: ["AAA", "BBB", "CCC", "DDD", "EEE", "FFF", "GGG"],
					datasets: [
						{
							label: "Contact per day",
							backgroundColor: "#FCB53C",
							borderColor: "#FCB53C",
							data: [200, 50, 100, 150, 200, 250, 130],
						},
						{
							label: "Review Sent",
							backgroundColor: "#4EC1B6",
							borderColor: "#4EC1B6",
							data: [190, 50, 100, 150, 200, 250, 150],
						},
					],
				},
				options: {
					plugins: {
						title: {
							display: true,
							text: "Monthly",
							align: "start",
							font: { weight: "bold", size: "24px" },
						},
						legend: {
							position: "bottom",
						},
					},
				},
			},
		}
	},
	mounted() {
		this.renderChart(this.config, this.chartWrapper)
	},
	methods: {
		renderChart() {
			const ctx = document.getElementById(this.chartWrapper)
			new Chart(ctx, this.config)
		},
	},
}
</script>

<style scoped></style>
