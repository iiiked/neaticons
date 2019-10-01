import Head from 'next/head';

import HeaderTemplate from '../components/templates/header';
import WrapperLayout from '../components/layouts/wrapper';

const Demo = () => (
  <div id="app-container">
    <Head>
      <title>Neaticons Demo!</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://fonts.googleapis.com/css?family=Inconsolata" rel="stylesheet" />
    </Head>
    <HeaderTemplate page="demo" />
    <main>
      <WrapperLayout maxWidth="1112px">
        <h1>Demo</h1>
      </WrapperLayout>
    </main>
  </div>
);

export default Demo;