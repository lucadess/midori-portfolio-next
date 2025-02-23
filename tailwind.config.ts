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
