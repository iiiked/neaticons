import Head from 'next/head';
import axios from 'axios';
import { useContext, useState, useEffect } from 'react';

import { StoreContext } from '../components/services/withStoreContext';
import populateList from '../lib/populateList';

import HeaderTemplate from '../components/templates/header';
import WrapperLayout from '../components/layouts/wrapper';
import ControlBar from '../components/templates/controlBar';
import IconCard from '../components/leafs/iconCard';
import Grid from '../components/layouts/grid';

const Index = () => {
  const { state, dispatch } = useContext(StoreContext);
  const { collection } = state;

  const themeDefauls = {
    style: 'filled',
    config: {
      icon_size: '64px',
      icon_transition_time: '.2s',
      color_primary: 'var(--font-accent--color)',
      color_secondary: 'var(--color-blue--85)',
      color_background: 'white',
    },
    checked: false,
  };

  const [localState, setLocalState] = useState(populateList(collection, themeDefauls));

  const fetchData = async () => {
    if (!collection.length) {
      const { data } = await axios.get('http://localhost:4000/css/list');
      dispatch({
        type: 'POPULATE_COLLECTION',
        payload: data,
      });
      setLocalState(populateList(data, themeDefauls));
    }
  };

  const retrieveCategoryList = list => [...new Set(list.map(({ meta }) => meta.category).flat())];

  const filterIcons = ()

  useEffect(() => {
    fetchData();
  });

  return (
    <div id="app-container">
      <Head>
        <title>Neaticons!</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="https://fonts.googleapis.com/css?family=Inconsolata" rel="stylesheet" />
      </Head>
      <HeaderTemplate page="home" />
      <main>
        <WrapperLayout maxWidth="1112px" padding=".5em 0 2.5em 0">
          <h1>Collection</h1>
          <ControlBar categories={localState.length ? retrieveCategoryList(localState) : []} />
          <Grid gap="1em" height="128px" width="256px">
            {localState.map((icon, index) => <IconCard icon={icon} key={`${index}-${icon.file}`} />)}
          </Grid>
        </WrapperLayout>
      </main>
    </div>
  );
};

export default Index;
