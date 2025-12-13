import { checker } from 'vite-plugin-checker'

export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },
	devServer: {
		host: '0.0.0.0'
	},
	modules: ['@nuxt/eslint', '@pinia/nuxt', '@nuxt/icon'],
	icon: {
		size: '24px',
		class: 'icon',
		mode: 'css',
		customCollections: [
			{
				prefix: 'icons',
				dir: './app/assets/icons/',
				normalizeIconName: false
			}
		]
	},
	css: ['~/assets/css/main.css', '~/assets/scss/main.scss'],
	vite: {
		plugins: [
			checker({
				eslint: {
					useFlatConfig: true,
					lintCommand: 'eslint "./**/*.{ts,js,vue}"'
				},
				stylelint: {
					lintCommand: 'stylelint "**/*.{vue,css,scss}"'
				}
			})
		],
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `@use "@/assets/scss/general/variables.scss" as *; @use "@/assets/scss/abstracts/mixins.scss" as *;`
				}
			}
		}
	},
	runtimeConfig: {
		public: {
			baseUrl: process.env.USE_MOCK
				? process.env.MOKE_URL
				: process.env.BASE_URL
		}
	},

	app: {
		head: {
			link: [
				{ rel: 'apple-touch-icon', sizes: '57x57', href: '/favicon-57x57.png' },
				{ rel: 'apple-touch-icon', sizes: '60x60', href: '/favicon-60x60.png' },
				{ rel: 'apple-touch-icon', sizes: '72x72', href: '/favicon-72x72.png' },
				{ rel: 'apple-touch-icon', sizes: '76x76', href: '/favicon-76x76.png' },
				{
					rel: 'apple-touch-icon',
					sizes: '114x114',
					href: '/favicon-114x114.png'
				},
				{
					rel: 'apple-touch-icon',
					sizes: '120x120',
					href: '/favicon-120x120.png'
				},
				{
					rel: 'apple-touch-icon',
					sizes: '144x144',
					href: '/favicon-144x144.png'
				},
				{
					rel: 'apple-touch-icon',
					sizes: '152x152',
					href: '/favicon-152x152.png'
				},
				{
					rel: 'apple-touch-icon',
					sizes: '180x180',
					href: '/favicon-180x180.png'
				},
				{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
				{
					rel: 'icon',
					type: 'image/png',
					sizes: '16x16',
					href: '/favicon-16x16.png'
				},
				{
					rel: 'icon',
					type: 'image/png',
					sizes: '32x32',
					href: '/favicon-32x32.png'
				},
				{
					rel: 'icon',
					type: 'image/png',
					sizes: '96x96',
					href: '/favicon-96x96.png'
				},
				{
					rel: 'icon',
					type: 'image/png',
					sizes: '192x192',
					href: '/favicon-192x192.png'
				},
				{ rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
				{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
				{ rel: 'manifest', href: '/site.webmanifest' }
			],
			meta: [
				{
					name: 'msapplication-TileColor',
					content: '#ffffff'
				},
				{
					name: 'msapplication-TileImage',
					content: '/favicon-144x144.png'
				},
				{
					name: 'msapplication-config',
					content: '/browserconfig.xml'
				},
				{ name: 'apple-mobile-web-app-title', content: 'Travel Blog' },
				{
					name: 'theme-color',
					content: '#ffffff'
				}
			]
		}
	}
})
