import { useContext } from 'react';
import Link from 'next/link'
import _ from 'lodash';

import { StoreContext } from '../services/withStoreContext';

const NavigationContainer = ({ type = 'inline', precission = 'topic' }) => {
  const { siteMap } = useContext(StoreContext).state;
  return (
    <nav className={`nav-${type} nav-${precission}`}>
      <ul>
        {_.map(siteMap, ({ link, displayAs }, page) => {
            return (
              <li key={page}>
                <Link href={link}>
                  <a className="nav-anchor">
                    {_.capitalize(displayAs || page)}
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
        }
      `}</style>
    </nav>
  );
};

export default NavigationContainer;
