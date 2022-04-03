import { Card } from '../src/Card'

export const FooterLinks = () => (
  <div className="grid">
    <Card
      url="https://github.com/dsernst/AutoGong/issues"
      title="Report Issue"
      description="Something not working as expected? Let us know."
    />
    <Card
      url="https://github.com/dsernst/AutoGong"
      title="Code"
      description="View or contribute to this app's source code."
    />

    <style jsx>{`
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
