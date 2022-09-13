const typography = require('@tailwindcss/typography');

/** @type {import('tailwindcss').Config} */
const config = {
	mode: 'jit',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['Inter', 'sans-serif']
		},
		extend: {
			colors: {
				nord0: '#2E3440', //Polar Night Darkest -> Background
				nord1: '#3B4252', //Polar Night Dark ->
				nord2: '#434C5E', //Polar Night
				nord3: '#4C566A', //Polar Night
				nord4: '#D8DEE9', //Snow Storm Lightest -> Text Color
				nord5: '#E5E9F0', //Snow Storm Lighter
				nord6: '#ECEFF4', //Snow Storm Light
				nord7: '#8FBCBB', //Frost Green
				nord8: '#88C0D0', //Frost Cyan
				nord9: '#81A1C1', //Frost Grayish Blue
				nord10: '#5E81AC', //Frost Blue
				nord11: '#BF616A', //Aurora Red -> Error Color
				nord12: '#D08770', //Aurora Orange -> Hover Color
				nord13: '#EBCB8B', //Aurora Yellow
				nord14: '#A3BE8C', //Aurora Green
				nord15: '#B48EAD' //Aurora Purple
			},

			typography: ({ theme }) => ({
				nord: {
					css: {
						'--tw-prose-body': theme('colors.nord4'),
						'--tw-prose-headings': theme('colors.nord8'),
						'--tw-prose-lead': theme('colors.nord4'),
						'--tw-prose-links': theme('colors.nord10'),
						'--tw-prose-bold': theme('colors.nord4'),
						'--tw-prose-counters': theme('colors.nord11'),
						'--tw-prose-bullets': theme('colors.nord11'),
						'--tw-prose-hr': theme('colors.nord11'),
						'--tw-prose-quotes': theme('colors.nord4'),
						'--tw-prose-quote-borders': theme('colors.nord11'),
						'--tw-prose-captions': theme('colors.nord4'),
						'--tw-prose-code': theme('colors.nord4'),
						'--tw-prose-pre-code': theme('colors.nord4'),
						'--tw-prose-pre-bg': theme('colors.nord3'),
						'--tw-prose-th-borders': theme('colors.nord3'),
						'--tw-prose-td-borders': theme('colors.nord3')
					}
				}
			})
		}
	},
	plugins: [typography]
};

module.exports = config;
