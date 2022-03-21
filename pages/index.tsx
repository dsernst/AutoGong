import type { NextPage } from 'next'
import Head from 'next/head'
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
          <a
            href="https://github.com/dsernst/DhammaGong"
            target="_blank"
            className="card"
            rel="noreferrer"
          >
            <h2>Code &rarr;</h2>
            <p>View or contribute to this app&apos;s source code.</p>
          </a>
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
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        h1 {
          margin: 0;
          line-height: 1.15;
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

        .card {
          margin: 1rem;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
          max-width: 300px;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #73b4fe;
          border-color: #73b4fe;
        }

        .card h2 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }
      `}</style>
    </div>
  )
}

export default Home
