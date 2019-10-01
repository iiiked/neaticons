import { useState } from 'react';
import _ from 'lodash';

import TextInput from '../leafs/textInput';
import Icon from '../leafs/icon';
import Badge from '../leafs/badge';

const ControlBar = ({ categories }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="control-bar control-bar--open">
      <div className="flex-column">
        <div className="flex-row">
          <div>
            <label htmlFor="search-input">Search</label>
            <TextInput type="search" id="search-input" hidelabel label="Search" />
          </div>
          <div>
            <button type="button" onClick={() => setOpen(!isOpen)}>
              <Icon ni={`chevron-${isOpen ? 'up' : 'down'}--filled`} config={{
                icon_size: '48px',
                color_primary: 'var(--color-blue--50)',
              }} />
            </button>
          </div>
        </div>
        {isOpen
          ? (<div className="flex-row">
          <div>
            <label>Categories</label>
            <div className="flex-row badge-row">{Array.isArray(categories) ? categories.map(cat => <Badge key={`${cat}-control-bar`}>{_.capitalize(cat)}</Badge>) : <Badge>{_.capitalize(categories)}</Badge>}</div>
          </div>
          <div>
            <label>Style</label>
            <div className="input-row">
              <label className="radio-label" htmlFor="radio-dest-filled">Filled
                <input type="radio" name="dest-style" id="radio-dest-filled" value="filled" checked />
              </label>
              <label className="radio-label" htmlFor="radio-dest-outline">Outline
                <input type="radio" name="dest-style" id="radio-dest-outline" value="outline" />
              </label>
              <label className="radio-label" htmlFor="radio-dest-duotone">Duotone
                <input type="radio" name="dest-style" id="radio-dest-duotone" value="duotone" />
              </label>
            </div>
          </div>
        </div>)
        : false}
      </div>
      <style jsx>{`
        .control-bar {
          display: flex;
          justify-content: space-around;
          border-radius: 12px;
          background: white;
          padding: 1.5em 4.5em;
          width: 100%;
          box-shadow: 0 4px 0 #5490f7;
          margin-bottom: 2.5em;
        }

        .control-bar--open {
          box-shadow: 0 2px 0 #5490f7;
        }
        
        .flex-column {
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        .flex-row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        .badge-row {
          flex-wrap: wrap;
          justify-content: flex-start;
          margin-right: 2em;
        }

        .flex-row div:first-child {
          flex: 1;
        }
        
        label {
          display: block;
          font-size: .75em;
          margin-bottom: .35em;
          text-transform: uppercase;
          color: #5490f7;
          font-weight: 600;
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
          font-weight: 400;
        }

        button {
          cursor: pointer;
          padding: 0;
          margin: 0;
          background: transparent;
          border: none;
        }
      `}</style>
    </div>
  );
};

export default ControlBar;
