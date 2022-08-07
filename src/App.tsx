import { Layout } from './containers/Layout';
import { Providers } from './containers/Providers';
import { Router } from './routes';

import './styles/global.scss';

export const App = () => (
  <Providers>
    <Layout>
      <Router />
    </Layout>
  </Providers>
);
