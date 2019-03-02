import { Container } from 'next/app';
import { withStoreContext } from '../components/services/withStoreContext';

const Root = ({ Component, pageProps }) => (
  <Container>
    {withStoreContext(Component, pageProps)}
  </Container>
);

export default Root;