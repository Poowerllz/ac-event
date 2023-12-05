import { useLocale } from 'next-intl'
import { usePathname } from 'next-intl/client'
import NavigationLink from './NavigationLink'

export function Languagues() {
  const locale = useLocale()
  const pathname = usePathname()

  const supportedLanguages = ['pt-br', 'en']

  return (
    <div className="flex flex-col gap-2 rounded-md p-2 text-white">
      {supportedLanguages.map(
        lang =>
          lang !== locale && (
            <NavigationLink
              key={lang}
              href={pathname}
              locale={lang}
              className="transition hover:text-primary hover:transition"
            >
              {lang.toUpperCase()}
            </NavigationLink>
          )
      )}
    </div>
  )
}
