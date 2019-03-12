const Grid = ({ children, gap, width, height }) => (
  <div className="grid-layout">
    {children}
    <style jsx>{`
      .grid-layout {
        display: grid;
        grid-auto-flow: row;
        grid-gap: ${gap};
        grid-template-columns: repeat(auto-fill, minmax(${width}, 1fr));
        grid-template-rows: repeat(auto-fill, minmax(${height}, 1fr));
      }
    `}</style>
  </div>
);

export default Grid;
