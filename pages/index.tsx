import type { NextPage } from 'next'
import Head from 'next/head'
import { Card } from '../src/Card'
import { TestButton } from '../src/TestButton'

const Home: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Dhamma Gong</title>
        <meta
          name="description"
          content="Automated gong for Dhamma.org courses"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <h1>Welcome to Dhamma Gong!</h1>

        <TestButton />

        <div className="grid">
          <Card
            url="https://github.com/dsernst/DhammaGong"
            title="Code"
            description="View or contribute to this app's source code."
          />
        </div>
      </main>

      <style jsx>{`
        .container {
          padding: 0 2rem;
          background: rgb(2, 0, 36);
          background: linear-gradient(
            152deg,
            rgba(2, 0, 36, 1) 0%,
            rgba(9, 9, 121, 1) 35%,
            rgba(0, 212, 255, 1) 100%
          );
          color: hsla(0, 0%, 100%, 0.9);
        }

        main {
          min-height: 100vh;
          padding: 4rem 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        h1 {
          font-size: 2.5rem;
          text-align: center;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 800px;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  )
}

export default Home
