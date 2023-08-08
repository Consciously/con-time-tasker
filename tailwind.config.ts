import type { Config } from 'tailwindcss';

interface GradientGenerator {
	(direction: string, ...colors: string[]): string;
}

const generateGradient: GradientGenerator = (
	direction = 'to right',
	...colors
) => {
	return `linear-gradient(${direction}, ${colors.join(', ')})`;
};

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'orange-gradient-right': generateGradient(
					'to right',
					'var(--color-orange-600)',
					'var(--color-orange-400)',
					'var(--color-orange-300)',
				),
				'orange-gradient-bottom': generateGradient(
					'to bottom',
					'var(--color-orange-600)',
					'var(--color-orange-400)',
					'var(--color-orange-300)',
				),
			},
		},
	},
	plugins: [],
};
export default config;
