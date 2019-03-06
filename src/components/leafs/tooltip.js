const Tooltip = props => {
  const { title, titleAbbr, text, type } = props;
  return (
    <div className="tooltip">
      <span className={`tooltip-title tooltip-title--${type}`} tabIndex="0">
        <abbr title={title}>{titleAbbr}</abbr>
        <span className="tooltip-hint">{text}</span>
      </span>
      <style jsx>{`
        .tooltip {
          padding-left: 8px;
        }
        .tooltip-title {
          font-size: 14px;
          color: rgba(0, 0, 0, .55);
        }

        .tooltip-title--circle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          font-weight: 500;
          outline: none;
        }

        .tooltip-hint {
          position: absolute;
          visibility: hidden;
          top: -12px;
          left: 0;
          right: 0;
          padding: 6px;
          font-size: 12px;
          color: white;
          background: grey;
          border-radius: 4px;
        }

        .tooltip-title:hover > .tooltip-hint,
        .tooltip-title:focus > .tooltip-hint {
          visibility: visible;
        }
      `}</style>
    </div>
  );
};

export default Tooltip;
