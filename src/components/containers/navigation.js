import { useContext } from 'react';
import Link from 'next/link'
import _ from 'lodash';

import { StoreContext } from '../services/withStoreContext';

const NavigationContainer = ({ type = 'inline', precission = 'topic', page }) => {
  const { siteMap } = useContext(StoreContext).state;
  return (
    <nav className={`nav-${type} nav-${precission}`}>
      <ul>
        {_.map(siteMap, ({ link, displayAs }, pageTitle) => {
            return (
              <li key={pageTitle}>
                <Link href={link}>
                  <a className={pageTitle === page ? 'active-link' : ''}>
                    {_.capitalize(displayAs || pageTitle)}
                  </a>
                </Link>
              </li>
            );
        })}
      </ul>
      <style jsx>{`
        .nav-inline {
          display: flex;
          align-items: center;
          height: 100%;
        }
        ul {
          margin: 0;
          padding: 0;
          display: inherit;
          align-items: center;
          list-style: none;
          height: 100%;
        }
        li {
          display: inherit;
          align-items: center;
          margin: 0 0 0 1.5em;
          padding: 0;
          height: 100%;
        }

        a {
          display: inherit;
          align-items: center;
          width: 100%;
          height: 100%;
          color: var(--color-black--40);
          text-decoration: none;
          font-weight: 700;
          transition: color .2s ease-out;
          will-change: color;
        }
        a:hover,
        a:focus {
          color: var(--color-black--30);
        }
        a.active-link {
          color: var(--font-accent--color);
        }

      `}</style>
    </nav>
  );
};

export default NavigationContainer;
