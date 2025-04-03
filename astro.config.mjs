// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Bistro Pulse Docs', 
			tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
			logo: {
				src: '/src/assets/logo.svg'
			},
			customCss : [
				'/src/styles/custom.css',
			],
			social: {
				github: 'https://github.com/BitterSweetBoy',
				linkedin: 'https://www.linkedin.com/in/denisduenas0101/'
			},
			sidebar: [
				{
					label: 'Getting Starded',
					items: [
						{ label: 'Bienvenido a Bistro Pulse 🧑‍🍳', slug: 'introduccion/inicio' },
						{ label: 'Aprende lo básico', slug: 'introduccion/aprende-lo-basico' },
					],
				},
				{
					label: 'Administración del proyecto',
					items: [
						{ label: 'Análisis de Requerimientos', slug: '' },
						{ label: 'Requerimientos Funcionales', slug: ''},
						{ label: 'Requerimientos No Funcionales', slug: ''},
						{ label: 'Requerimientos Comunes', slug: ''},
						{ label: 'Metodología de Trabajo', slug: ''},
					],
				},
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
