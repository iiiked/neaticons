import { Container } from 'next/app';
import { withStoreContext } from '../components/services/withStoreContext';

const Root = ({ Component, pageProps }) => (
  <Container>
    {withStoreContext(Component, pageProps)}
    <style global={global ? 1 : 0}>{`
      /* Variables */
      :root {
        --color-blue--95: #eff4fe;
        --color-blue--85: #d2e4fc;
        --color-blue--45: #639af7;
        --color-blue--50: #5490f7;
        --color-black--25: #939396;
        --color-black--30: #818184;
        --color-black--40: 5D5D61;
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
        background: radial-gradient(#5490f7c2 8%, transparent 8%), white;
        background-position: 0 0, 15px 15px;
        background-size:15px 15px;
      }
    `}</style>
  </Container>
);

export default Root;