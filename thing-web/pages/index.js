import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { whatsTheDateRightNow } from '../../packages/date'
import { haveARandomNumber } from '../../packages/random'

export default function Home() {
  const getDate = () => alert(whatsTheDateRightNow())
  const getRandom = () => alert(haveARandomNumber())

  return (
    <div className={styles.container}>
      <Head>
        <title>Thing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Thing Web
        </h1>

        <p className={styles.description}>
          <button onClick={getDate}>What's the date?</button>
          <button onClick={getRandom}>Can I get a random?</button>
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
