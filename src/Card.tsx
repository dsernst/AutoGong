export const Card = ({
  title,
  description,
  url,
}: {
  title: string
  description: string
  url: string
}) => (
  <>
    <a href={url} target="_blank" className="card" rel="noreferrer">
      <h2>{title} &rarr;</h2>
      <p>{description}</p>
    </a>

    <style jsx>{`
      a {
        margin: 1rem;
        padding: 1.1rem;
        text-align: left;
        color: inherit;
        text-decoration: none;
        border: 1px solid #fff4;
        border-radius: 10px;
        transition: color 0.15s ease, border-color 0.15s ease;
        max-width: 300px;
      }

      a:hover,
      a:focus,
      a:active {
        color: #73b4fe;
        border-color: #73b4fe;
      }

      a h2 {
        margin: 0 0 0.8rem 0;
        font-size: 1.2rem;
      }

      a p {
        margin: 0;
        font-size: 1.1rem;
        line-height: 1.5;
      }
    `}</style>
  </>
)
