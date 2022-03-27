import type { NextPage } from 'next'
import Head from 'next/head'
import { GetStartedButton } from '../src/GetStartedButton'
import { GlobalCSS } from '../src/GlobalCSS'

const Home: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Dhamma Gong</title>
        <meta
          name="description"
          content="Automated gong for Dhamma.org courses"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <GetStartedButton />

      <style jsx>{`
        main {
          background: rgb(2, 0, 36);
          background: linear-gradient(
            152deg,
            rgba(2, 0, 36, 1) 0%,
            rgba(9, 9, 121, 1) 35%,
            rgba(0, 212, 255, 1) 100%
          );
          color: hsla(0, 0%, 100%, 0.9);
          min-height: 100vh;
          padding: 4rem 2rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
      <GlobalCSS />
    </main>
  )
}

export default Home
