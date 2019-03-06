const WrapperLayout = ({ maxWidth, justifyContent, padding = '0', children }) => (
  <div className="wrapper-layout">
    {children}
    <style jsx>{`
      .wrapper-layout {
        display: inherit;
        justify-content: ${justifyContent};
        align-items: center;
        margin: 0 auto;
        padding: ${padding};
        width: 100%;
        max-width: ${maxWidth};
        height: 100%;
      }
    `}</style>
  </div>
);

export default WrapperLayout;