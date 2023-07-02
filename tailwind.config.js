/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			sm: "340px",
			// => @media (min-width: 640px) { ... }

			md: "1024px",
			// => @media (min-width: 1024px) { ... }

			desktop: "1280px",
			// => @media (min-width: 1280px) { ... }
		},

		extend: {
			colors: {},
			container: {
				// padding: {
				// 	DEFAULT: "1rem",
				// 	sm: "1rem",
				// 	lg: "4rem",
				// 	xl: "5rem",
				// 	"2xl": "6rem",
				// },
				center: true,
			},
		},
	},
	plugins: [],
};
