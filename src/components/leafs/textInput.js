import Tooltip from './tooltip';

const TextInput = props => {
  const { type, label, hidelabel, placeholder, value, id, tooltip } = props;
  const getType = (type) => {
    switch (type.toLowerCase().trim()) {
      case 'search':
        return 'search';
      case 'email':
        return 'email';
      case 'password':
        return 'password';
      case 'text':
      default:
        return 'text';
    }
  }

  return (
    <div className={`input-field`}>
      <div className="flex label-row">
        <label htmlFor={id} className={hidelabel ? 'nocss' : ''}>{label}</label>
        {tooltip
          ? <Tooltip
            title={tooltip.title}
            titleAbbr={tooltip.titleAbbr}
            type={tooltip.type}
            text={tooltip.text}
          />
          : false}
      </div>
      <input type={getType(type)} value={value} placeholder={placeholder} id={id} />
      <style jsx>{`
        .input-field {
          display: flex;
          flex-direction: column;
          margin-bottom:  1.25em;
        }
        .label-row {
          position: relative;
        }

        .input-field label {
          font-size: 12px;
          color: rgba(0, 0, 0, .65);
          padding-left: 12px;
        }
        .input-field input {
          font-size: 16px;
          font-family: var(--font-base--family);
          padding: 12px 12px;
          width: 100%;
          max-width: 630px;
          height: 48px;
          border: 1px solid rgba(0, 0, 0, .35);
          border-radius: 6px;
        }
        .input-field input:focus {
          outline: none;
          box-shadow: 0 0 0 1px var(--font-accent--color);
          border: 1px solid var(--font-accent--color);
        }

        .nocss {
          border: 0;
          clip: rect(0 0 0 0);
          height: 1px;
          margin: -1px;
          overflow: hidden;
          padding: 0;
          position: absolute;
          width: 1px;
        }
      `}</style>
    </div>
  );
};

export default TextInput;
