export const Card = ({
  description,
  title,
  url,
}: {
  description: string,
  title: string,
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
        transition: all 0.15s ease;
        max-width: 300px;
      }

      a:hover,
      a:focus,
      a:active {
        color: #b7d9ff;
        border-color: #b7d9ff;
        background-color: #0003;
      }

      a:hover h2 {
        color: #fffc;
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
