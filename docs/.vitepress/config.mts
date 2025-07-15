import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AtomGlimpses",
  description: "AtomGlimpses组织官网",
  head: [
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' }
    ],
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
    ],
    [
      'link',
      { href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap', rel: 'stylesheet' }
    ],
    ['link', { rel: 'icon', href: '../assets/peacock_flat.png' }]
  ],
  themeConfig: {

    socialLinks: [
      { icon: 'github', link: 'https://github.com/AtomGlimpses/freeCodeWebsite' }
    ],
    footer: {
      message: 'Released under the GPL-3.0 license.',
      copyright: 'Copyright© 2025 AtomGlimpses, All rights reserved.'
    }
  },
})
