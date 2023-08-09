import '@/styles/globals.css'
import { useRouter } from 'next/router'
import { IntlProvider } from 'react-intl'

import fr from '../i18n/fr.json'
import en from '../i18n/en.json'
import pt from '../i18n/pt.json'

const messages = {
  fr,
  en,
  pt
}

function getDirection(_locale){
  return "ltr"
}


export default function App({ Component, pageProps }) {
  const { locale } = useRouter();
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Component {...pageProps} dir={getDirection(locale)} />
    </IntlProvider>
  )
}
