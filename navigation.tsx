import {
  createLocalizedPathnamesNavigation,
  Pathnames
} from 'next-intl/navigation'

export const defaultLocale = 'en'

export const locales = ['en', 'es'] as const

export const localePrefix =
  process.env.NEXT_PUBLIC_LOCALE_PREFIX === 'never' ? 'never' : 'as-needed'

export const pathnames = {
  '/': '/',
  '/agency': {
    en: '/agency',
    es: '/agencia',

  },
  '/projects': {
    en: '/projects',
    es: '/proyectos',
  }
  ,
  '/services': {
    en: '/services',
    es: '/servicios',
  },
  '/redirect': '/redirect'
}

export const { Link, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation({
    locales,
    localePrefix,
    pathnames
  })
