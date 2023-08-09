import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router'
import { FormattedMessage, useIntl } from 'react-intl'
import Link from "next/link"

export default function Home({ dir }) {

  const { locales } = useRouter();
  const intl = useIntl();

  const title = intl.formatMessage({ id: "page.home.head.title"})
  const description = intl.formatMessage({ id: "page.home.head.meta.description"})

  return (
    <>
      <Head>
        <title>{ title }</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" hrefLang="x-default" />
        <link rel="icon" href="/favicon.ico" hrefLang="fr" />
        <link rel="icon" href="/favicon.ico" hrefLang="en" />
        <link rel="icon" href="/favicon.ico" hrefLang="pt" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        {/* <!-- plugin CSS --> */}
        <link
          href="static/plugin/bootstrap/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          href="static/plugin/font-awesome/css/all.min.css"
          rel="stylesheet"
        />
        <link href="static/plugin/et-line/style.css" rel="stylesheet" />
        <link
          href="static/plugin/themify-icons/themify-icons.css"
          rel="stylesheet"
        />
        <link
          href="static/plugin/owl-carousel/css/owl.carousel.min.css"
          rel="stylesheet"
        />
        <link
          href="static/plugin/magnific/magnific-popup.css"
          rel="stylesheet"
        />
        <link
          href="static/plugin/scroll/jquery.mCustomScrollbar.min.css"
          rel="stylesheet"
        />
        {/* <!-- theme css --> */}
        <link href="static/css/style.css" rel="stylesheet" />

        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header>
        <div className={styles.translation}>
          {[...locales].sort().map((locale) => (
            <Link key={locale} href="/" locale={locale}>
              <div>{locale}</div>
            </Link>
          ))}
        </div>
      </header>
      <main dir={dir} className={styles.main}>
        <h1>
          <FormattedMessage id="page.home.title" values={{ b: (info) => <b>{info}</b>}}/>
        </h1>
        <p className={styles.description}>
          <FormattedMessage id="page.home.description" values={{ b: (info) => <b>{info}</b>}}/>
        </p>
      </main>
    </>
  )
}
