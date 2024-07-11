/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"../../packages/ui/components/**/*.{ts,tsx}",
	],

	plugins: [require("tailwindcss-animate")],
};
