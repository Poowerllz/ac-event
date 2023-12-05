import { usePathname } from 'next/navigation'
import NavigationLink from './NavigationLink'

export function Languagues() {
  const pathname = usePathname()
  const urlPart = pathname.startsWith('/en/') ? pathname.slice(4) : pathname

  const supportedLanguages = ['', 'pt-br', 'en']
  const currentLanguage = supportedLanguages.find(lang =>
    pathname.startsWith(`/${lang}/`)
  )

  return (
    <div className="flex flex-col gap-2 rounded-md p-2 text-white">
      {supportedLanguages
        .filter(
          lang =>
            lang !== currentLanguage &&
            !(currentLanguage === undefined && lang === 'pt-br')
        )
        .map(lang => (
          <NavigationLink
            key={lang}
            href={`/${urlPart}`}
            locale={lang}
            className="transition hover:text-primary hover:transition"
          >
            {lang.toUpperCase()}
          </NavigationLink>
        ))}
    </div>
  )
}
