import theme from '@nuxt/content-theme-docs'

export default theme({
  target: 'static',
  docs: {
    primaryColor: '#f7b000'
  },
  css: [
    './assets/css/main.css'
  ],
  title: "Documentation de l'Intranet",
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      hid: 'description',
      name: 'Iutranet Documentation',
      content: 'Documentation officiel de l\'intranet de l\'IUT de Troyes et de Reims'
    }
  ],
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  loading: { color: '#4d3677' },
  i18n: {
    locales: () => [{
      code: 'fr',
      iso: 'fr-FR',
      file: 'fr-FR.js',
      name: 'Français'
    }],
    defaultLocale: 'fr'
  },
  build: {
    babel: {
      plugins: [
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-private-methods',
  
        // or with JUST the line below 
       // ['@babel/plugin-proposal-private-property-in-object', { loose: true }]
      ],
    },
  }
})
