/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				primary: "#173624",
				secondary: "#506516",
				text_primary: "#DFEC57",
				text_secondary: "#FAFAFA",
			},
			// colors: {
			// 	primary: "#040530",
			// 	secondary: "#070852",
			// 	// secondary: "#6184d8",
			// 	ternary: "#872949",
			// 	text_primary: "#d0f1f5",
			// 	text_secondary: "#42516a",
			// 	text_tertiary: "#4a5568",
			// 	text_quaternary: "#ebc7d2",
			// },
		},
	},
	plugins: [],
};
