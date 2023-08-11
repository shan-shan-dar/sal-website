const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
			},
			colors: {
				dark: "#252422",
				light: "#FDF2B0",
				lighter: "#FEFAE0",
				accent: "#32936F",

			},
		},
	},
	plugins: [],
}
