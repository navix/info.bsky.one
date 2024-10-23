// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
      customCss: [
        './src/styles/theme.css',
      ],
			title: 'База знань Bluesky',
      defaultLocale: 'uk',
      locales: {
        uk: {
          label: 'Українська',
        },
      },
      editLink: {
        baseUrl: 'https://github.com/navix/info.bsky.one/edit/main/',
      },
			social: {
				github: 'https://github.com/navix/info.bsky.one',
        blueSky: 'https://bsky.app/profile/bsky.one',
			},
			sidebar: [
        {
          label: 'Головна',
          slug: 'home'
        },
        {
          label: 'Основи',
          items: [
            { slug: 'basics/bluesky' },
            { slug: 'basics/atproto' },
            { slug: 'basics/join' },
            { slug: 'basics/public', label: 'Що публічне і приватне?' },
            { slug: 'basics/handle' },
            { slug: 'basics/feed' },
            { slug: 'basics/mute' },
            { slug: 'basics/block' },
          ]
        },
				{
					label: 'Посібники',
					items: [
						{ slug: 'guides/custom-handle' },
						{ slug: 'guides/custom-feed' },
					],
				},
			],
		}),
	],
});
