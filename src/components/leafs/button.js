const Button = props => {
  const { type, text, size, action, viewState } = props;
  return (
    <button className={`btn btn-${type} btn-${size} btn-${viewState}`} onClick={action}>
      <span>{text}</span>
      <style jsx>{`
        .btn {
          display: flex;
          justify-content: center;
          align-items: center;
          border: none;
          outline: none;
          background: transparent;
          border: 1px solid transparent;
          font-weight: 500;
        }
        .btn span {
          margin-right: 6px;
        }
        .btn:hover {
          cursor: pointer;
        }
        .btn-primary {
          background: blue;
          color: white;
          box-shadow: 0 4px 8px -4px rgba(0, 0, 255, .5);
          transition: all .2s ease-out;
        }
        .btn-primary:hover,
        .btn-primary:focus {
          background: rgba(0, 0, 255, .85);
          color: white;
          border: 1px solid blue;
          box-shadow: 0 4px 10px -2px rgba(0, 0, 255, .25);
        }
        .btn-tertiary {
          background: transparent;
          color: blue;
          transition: all .2s ease-out;
        }
        .btn-tertiary:hover,
        .btn-tertiary:focus {
          background: rgba(0, 0, 255, .025);
          color: rgba(0, 0, 255, .85);
          box-shadow: 0 4px 10px -2px rgba(0, 0, 255, .15);
        }
        .btn-md {
          padding: 0 12px;
          font-size: 14px;
          min-width: 86px;
          height: 36px;
          border-radius: 6px;
        }
      `}</style>
    </button>
  );
};

export default Button;
