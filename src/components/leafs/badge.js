const Badge = ({ children }) => (
  <div className="badge">
    {children}
    <style jsx>{`
      .badge {
        font-size: .55em;
        line-height: 1;
        font-weight: 600;
        padding: .2em .5em;
        background: transparent;
        max-height: 1.5em;
        border: 1px solid #FF8888;
        border-radius: .5em;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all.2s ease-out;
        margin-bottom: .65em;
      }

      .badge:not(:last-child) {
        margin-right: .65em;
      }

      .badge:hover {
        cursor: pointer;
        background: #FF8888;
        color: white;
      }
    `}</style>
  </div>
);

export default Badge;
