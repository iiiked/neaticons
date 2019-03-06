import _ from 'lodash';

import Icon from './icon';
import Badge from './badge';

const IconCard = ({ icon }) => {
  const { style, config } = icon;
  const { name, category } = icon.meta;
  return (
    <div className="icon-card">
      <Icon ni={`${_.kebabCase(name.trim().toLowerCase())}--${style}`} config={config} />
      <span>{name}</span>
      <div className="flex-row">{Array.isArray(category) ? category.map(cat => <Badge key={cat}>{_.capitalize(cat)}</Badge>) : <Badge>{_.capitalize(category)}</Badge>}</div>
      <style jsx>{`
        .icon-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          background: white;
          border-radius: 12px;
          border: 1px solid var(--color-blue--85);
          border-top-color: transparent;
          border-left-color: transparent;
          border-right-color: transparent;
          box-shadow: 0 4px 4px -2px var(--color-blue--95);
          padding: 2.5em 2em;
          transition: all .2s ease-out;
        }

        .icon-card:hover {
          cursor: pointer;
          box-shadow: 0 8px 6px -2px var(--color-blue--95);
        }

        .flex-row {
          display: flex;
        }

        span {
          font-size: .65em;
          font-weight: 600;
          margin-bottom: 1.5em;
        }

        .input-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 1em;
          align-items: center;
        }
        
        .radio-label {
          display: flex;
          flex-direction: column-reverse;
          justify-content: space-around;
          align-items: center;
          text-transform: none;
          color: #3a3a3f;
        }

        label {
          display: block;
          font-size: .75em;
          margin-bottom: 1em;
          text-transform: uppercase;
          color: #5490f7;
        }
      `}</style>
    </div>
  );
};

export default IconCard;
