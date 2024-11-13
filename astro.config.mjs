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
            {slug: 'basics/public'},
            {slug: 'basics/handle'},
            {slug: 'basics/profile'},
            {slug: 'basics/feed'},
            {slug: 'basics/post'},
            {slug: 'basics/notification'},
            {slug: 'basics/messages'},
            {slug: 'basics/search'},
            {slug: 'basics/mute'},
            {slug: 'basics/block'},
            {slug: 'basics/moderation'},
            {slug: 'basics/list'},
            {slug: 'basics/settings'},
            {slug: 'extra/starter-pack'},
          ],
        },
        {
          label: 'Проєкт BSKY.ONE',
          slug: 'bsky-one/bsky-one',
        },
        {
          label: 'Корисне',
          items: [
            {slug: 'extra/utils'},
            {slug: 'extra/clients'},
            {slug: 'extra/custom-handle'},
            {slug: 'extra/custom-feed'},
            {slug: 'extra/embed'},
            {slug: 'extra/kawaii-mode'},
          ],
        },
      ],
    }),
  ],
});
