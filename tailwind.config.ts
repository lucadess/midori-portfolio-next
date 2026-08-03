import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			heading: ['"nave"', "sans-serif"],
  			body: ['"calluna"', "sans-serif"],
  		},
  		keyframes: {
  			marquee: {
  				from: { transform: "translateX(0)" },
  				to: { transform: "translateX(-50%)" },
  			},
  			float: {
  				// Composes with any static translate utility (e.g. -translate-x-1/2
  				// -translate-y-1/2 for centering) instead of overwriting it, since a
  				// raw `transform` in a keyframe replaces the whole property while running.
  				"0%, 100%": { transform: "translate(var(--tw-translate-x, 0), var(--tw-translate-y, 0))" },
  				"50%": { transform: "translate(var(--tw-translate-x, 0), calc(var(--tw-translate-y, 0) - 10px))" },
  			},
  		},
  		animation: {
  			marquee: "marquee 24s linear infinite",
  			float: "float 4s ease-in-out infinite",
  		},
  		colors: {
			creme: 'var(--creme)',
			orangeLight: 'var(--orange-light)',
			orangeDark: 'var(--orange-dark)',
			greenLight: 'var(--green-light)',
			greenDark: 'var(--green-dark)',
			blueLight: 'var(--blue-light)',
			blueDark: 'var(--blue-dark)',
  			background: 'var(--creme)',
  			foreground: 'hsl(var(--foreground))',
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
		screens: {
		'sm': {min: '640px'},
		// => @media (min-width: 640px) { ... }
	
		'md': {min: '768px'},
		// => @media (min-width: 768px) { ... }
	
		'lg': {min: '992px'},
		// => @media (min-width: 1024px) { ... }
	
		'xl': {min: '1280px'},
		// => @media (min-width: 1280px) { ... }
		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
