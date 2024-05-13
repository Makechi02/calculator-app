/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				attribution: "hsl(228, 45%, 44%)",

				midnight_blue: "hsl(222, 26%, 31%)",
				dark_teal: "hsl(223, 31%, 20%)",
				deep_navy: "hsl(224, 36%, 15%)",
				soft_navy: "hsl(225, 21%, 49%)",
				dusky_azure: "hsl(224, 28%, 35%)",

				light_gray: "hsl(0, 0%, 90%)",
				pale_gray: "hsl(0, 5%, 81%)",
				off_white: "hsl(0, 0%, 93%)",

				very_dark_violet: "hsl(268, 75%, 9%)",
				deep_indigo: "hsl(268, 71%, 12%)",
			}
		},
	},
	plugins: [],
}

