const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	theme: {
		container: {
			center: true
		},
		extend: {
			fontFamily: {
				sans: ['Inter var', ...defaultTheme.fontFamily.sans]
			},
			colors: {
				'blue': '#1DA1F2',
				'green': '#48BB78',
				'red': '#F56565',
				'darkblue': '#2795D9',
				'lightblue': '#EFF9FF',
				'dark': '#657786',
				'light': '#AAB8C2',
				'lighter': '#E1E8ED',
				'lightest': '#F5F8FA',
				'lightgreen': '#F0FFF4',
				'lightred': '#FFF5F5'
			}
		},
	},
	variants: {},
	plugins: [
		require('@tailwindcss/ui')
	],
	purge: {
		enabled: process.env.NODE_ENV === 'production',
		content: [
			'./public/**/*.html',
			'./src/**/*.vue',
		],
		options: {
			whitelistPatterns: [ 
				/-(leave|enter|appear)(|-(to|from|active))$/, 
				/^(?!(|.*?:)cursor-move).+-move$/,
				/^router-link(|-exact)-active$/
			],
		},  
	}
}
