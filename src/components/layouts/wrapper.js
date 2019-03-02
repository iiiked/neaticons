const WrapperLayout = ({ maxWidth, justifyContent, children }) => (
  <div className="wrapper-layout">
    {children}
    <style jsx>{`
      .wrapper-layout {
        display: inherit;
        justify-content: ${justifyContent};
        margin: 0 auto;
        width: 100%;
        max-width: ${maxWidth};
      }
    `}</style>
  </div>
);

export default WrapperLayout;