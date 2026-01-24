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
				primary: "#0c1f13",
				secondary: "#153621",
				text_primary: "#DFEC57",
				text_secondary: "#FAFAFA",
			},
			keyframes: {
				beat: {
					"0%, 100%": { transform: "scale(1)" },
					"50%": { transform: "scale(1.1)" },
				},
				pulse: {
					"0%, 100%": { opacity: "1" },
					"50%": { opacity: "0.5" },
				},
				bounce: {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-10px)" },
				},
				slideInUp: {
					from: { transform: "translateY(100%)", opacity: "0" },
					to: { transform: "translateY(0)", opacity: "1" },
				},
				slideInDown: {
					from: { transform: "translateY(-100%)", opacity: "0" },
					to: { transform: "translateY(0)", opacity: "1" },
				},
				scaleIn: {
					from: { transform: "scale(0.8)", opacity: "0" },
					to: { transform: "scale(1)", opacity: "1" },
				},
				rotateIn: {
					from: { transform: "rotate(-10deg)", opacity: "0" },
					to: { transform: "rotate(0)", opacity: "1" },
				},
				glow: {
					"0%, 100%": { boxShadow: "0 0 5px rgba(223, 236, 87, 0.5)" },
					"50%": { boxShadow: "0 0 20px rgba(223, 236, 87, 0.8)" },
				},
				shimmer: {
					"0%": { backgroundPosition: "-200% 0" },
					"100%": { backgroundPosition: "200% 0" },
				},
			},
			animation: {
				beat: "beat 0.5s ease-in-out infinite",
				pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
				bounce: "bounce 1s infinite",
				"slide-in-up": "slideInUp 0.6s ease-out",
				"slide-in-down": "slideInDown 0.6s ease-out",
				"scale-in": "scaleIn 0.5s ease-out",
				"rotate-in": "rotateIn 0.5s ease-out",
				glow: "glow 2s ease-in-out infinite alternate",
				shimmer: "shimmer 2s linear infinite",
			},
		},
	},
	plugins: [],
};
