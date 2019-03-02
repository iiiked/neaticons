import Head from 'next/head';

import HeaderTemplate from '../components/templates/header';

const Index = () => (
  <div id="index">
    <Head>
      <title>Neaticons!</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://fonts.googleapis.com/css?family=Inconsolata" rel="stylesheet" />
    </Head>
    <HeaderTemplate />
    <style global={global ? 1 : 0}>{`
      /* Variables */
      :root {
        --color-blue--95: #eff4fe;
        --color-blue--85: #d0e0fc;
        --color-blue--45: #639af7;
        --color-blue--50: #5490f7;
        --color-black--25: #939396;
        --color-black--50: #3a3a3f;

        --font-base--size: 19px;
        --font-base--family: Inconsolata, monospace; 
        --font-base--color: var(--color-black--50);
        --font-accent--color: var(--color-blue--50);
      }
      /* Reset */
      html {
        box-sizing: border-box;
      }
      *, *:before, *:after {
        margin-top: inherit;
        box-sizing: inherit;
      }

      html,
      body,
      #index {
        margin: 0;
        padding: 0;
        min-width: 100vw;
        min-height: 100vh;
      }

      /* Typography */
      body {
        font-size: var(--font-base--size);
        font-family: var(--font-base--family);
        color: var(--font-base--color);
        font-weight: 400;
        line-height: 1.55;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;

      }
    `}</style>
  </div>
);

export default Index;
