import theme from '@nuxt/content-theme-docs'

export default theme({
  target: 'static',
  docs: {
    primaryColor: '#f7b000'
  },
  loading: { color: '#4d3677' },
  i18n: {
    locales: () => [{
      code: 'fr',
      iso: 'fr-FR',
      file: 'fr-FR.js',
      name: 'Français'
    }, {
      code: 'en',
      iso: 'en-US',
      file: 'en-US.js',
      name: 'English'
    }],
    defaultLocale: 'fr'
  },
})
