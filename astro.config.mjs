// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';
import expressiveCode from 'astro-expressive-code';
import remarkMermaid from 'remark-mermaidjs'

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  markdown: {
      // Applied to .md and .mdx files
      remarkPlugins: [remarkMermaid],
	  },

  integrations: [starlight({
      title: 'Bistro Pulse Docs', 
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 4 },
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
              label: 'Acerca del proyecto',
              items: [
                  { label: 'Bienvenido a Bistro Pulse 🧑‍🍳', slug: 'introduccion/inicio' },
                  { label: 'Aprende lo básico', slug: 'introduccion/aprende-lo-basico' },
              ],
          },
          {
              label: 'Administración de Proyecto',
              items: [
                { label: 'Análisis de Requerimientos', slug: 'proyecto/analisis-de-requerimientos' },
                {
                  label: 'Requerimientos Funcionales',
                  collapsed: true,
                  items: [
                    { label: 'Funcionalidades', slug: 'proyecto/requerimientos-funcionales' },
                    { label: 'Manejo de Restaurantes', slug: 'proyecto/funcionalidades/manejo-de-restaurantes' },
                    { label: 'Manejo de Usuarios', slug: 'proyecto/funcionalidades/manejo-de-usuarios' },
                    { label: 'Manejo de Menú', slug: 'proyecto/funcionalidades/manejo-de-menu' },
                    { label: 'Manejo de Ordenes', slug: 'proyecto/funcionalidades/manejo-de-ordenes',},
                    { label: 'Reseñas y Valoraciones', slug: 'proyecto/funcionalidades/reseñas-y-valoraciones',},
                    { label: 'Manejo de Repartidores', slug: 'proyecto/funcionalidades/repartidores',},
                    { label: 'Administración del sistema', slug: 'proyecto/funcionalidades/administracion-del-sistema',}
                  ]
                },
                { label: 'Requerimientos no Funcionales', slug: 'proyecto/requerimientos-no-funcionales' },
                { label: 'Requerimientos Comunes', slug: 'proyecto/requerimientos-comunes' },
                { label: 'Requerimientos Futuros', slug: 'proyecto/requerimientos-futuros' },
                { label: 'Metodología de Trabajo', slug: 'proyecto/metodologia-de-trabajo' }
              ],
              
          },
          {
              label: 'Bistro Pulse Api',
              items: [
                  { label: 'Getting Started 👋', slug: 'api/inicio' },
                  { label: 'Aquitectura', slug: 'api/arquitectura' },
                  { label: 'Autenticacion', slug: 'api/autenticacion' },
                  { label: 'Loggin', slug: 'api/logging' },
                  {
                      label: 'Api Reference',
                      collapsed: true,
                      items: [

                      ]
                  },
              ],
              
          },
          {
              label: 'Bistro Pulse Frontend',
              items: [
                  { label: 'Getting Started 👋', slug: 'frontend/inicio' },
              ],
          },
      ],
      }), expressiveCode(), mdx()],

  adapter: vercel(),
});