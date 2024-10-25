// @ts-check
import {defineConfig} from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      customCss: ['./src/fonts/fixel.css', './src/styles/theme.css', './src/styles/common.css'],
      title: 'База знань Bluesky',
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'Українська',
          lang: 'uk',
        },
      },
      editLink: {
        baseUrl: 'https://github.com/navix/info.bsky.one/edit/main/',
      },
      social: {
        github: 'https://github.com/navix/info.bsky.one',
        blueSky: 'https://bsky.app/profile/bsky.one',
        email: 'mailto:hey@bsky.one',
      },
      sidebar: [
        {
          slug: 'home',
        },
        {
          label: 'Основи',
          items: [
            {slug: 'basics/bluesky'},
            {slug: 'basics/atproto'},
            {slug: 'basics/join'},
            {slug: 'basics/public'},
            {slug: 'basics/handle'},
            {slug: 'basics/feed'},
            {slug: 'basics/list'},
            {slug: 'basics/mute'},
            {slug: 'basics/block'},
          ],
        },
        {
          label: 'Посібники',
          items: [{slug: 'guides/custom-handle'}, {slug: 'guides/custom-feed'}],
        },
      ],
    }),
  ],
});
