

export const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"},
}
export const nuxtOptions = {
  isUniversalMode: true,
  trailingSlash: undefined,
}
export const options = {
  vueI18n: {"fallbackLocale":"en","dateTimeFormats":{"en":{"long":{"year":"numeric","month":"short","day":"numeric","weekday":"short"}},"fr":{"long":{"year":"numeric","month":"long","day":"numeric","weekday":"short"}}}},
  vueI18nLoader: false,
  locales: [{"code":"fr","iso":"fr-FR","file":"fr-FR.js","name":"Français"}],
  defaultLocale: "fr",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  sortRoutes: true,
  strategy: "prefix_except_default",
  lazy: true,
  langDir: "C:\\Users\\david\\Documents\\david\\iutranetDocs\\node_modules\\@nuxt\\content-theme-docs\\src\\i18n",
  rootRedirect: null,
  detectBrowserLanguage: {"alwaysRedirect":false,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","onlyOnNoPrefix":false,"onlyOnRoot":false,"useCookie":true},
  differentDomains: false,
  seo: false,
  baseUrl: "",
  vuex: {"moduleName":"i18n","syncLocale":false,"syncMessages":false,"syncRouteParams":true},
  parsePages: false,
  pages: {},
  skipSettingLocaleOnNavigate: false,
  beforeLanguageSwitch: () => null,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  normalizedLocales: [{"code":"fr","iso":"fr-FR","file":"fr-FR.js","name":"Français"}],
  localeCodes: ["fr"],
}

export const localeMessages = {
  'fr-FR.js': () => import('../..\\node_modules\\@nuxt\\content-theme-docs\\src\\i18n\\fr-FR.js' /* webpackChunkName: "lang-fr-FR.js" */),
}
