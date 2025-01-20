import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "#1D2B53",
				foreground: "#7E2553",
				primary: "#FF004D",
				secondary: "#FAEF5D",
				accent: "#F3F8FF",
			},
			fontFamily: {
				title:  ['var(--font-title)'],
				body:['var(--font-body)'],
			},
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
};

export default config;