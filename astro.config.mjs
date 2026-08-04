// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

const deployTarget = process.env.DEPLOY_TARGET ?? 'github-pages';
const isMainSite = deployTarget === 'main-site';

// https://astro.build/config
export default defineConfig({
	output: 'static',
	site: isMainSite
		? 'https://kirushakov.com'
		: 'https://kir-ushakov.github.io',
	base: isMainSite
		? '/articles'
		: '/personal-blog',
	integrations: [mdx(), sitemap()],
	fonts: [
		{
			provider: fontProviders.local(),
			name: 'Atkinson',
			cssVariable: '--font-atkinson',
			fallbacks: ['sans-serif'],
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/atkinson-regular.woff'],
						weight: 400,
						style: 'normal',
						display: 'swap',
					},
					{
						src: ['./src/assets/fonts/atkinson-bold.woff'],
						weight: 700,
						style: 'normal',
						display: 'swap',
					},
				],
			},
		},
	],
});
