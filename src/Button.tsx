export const Button = ({
  onClick,
  text,
}: {
  onClick: () => void
  text: string
}) => (
  <>
    <button onClick={onClick}>{text}</button>

    <style jsx>{`
      button {
        font-size: 2rem;
        max-width: 300px;
        padding: 7px 0;
        width: 100%;
        margin: 1rem;

        border: 2px solid #fffe;
        border-radius: 10px;
        background: none;
        color: #fffe;

        cursor: pointer;

        transition: all 0.15s ease;
      }

      button:hover {
        background: #fff2;
        border-color: #fff8;
      }
    `}</style>
  </>
)
