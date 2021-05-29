import { ApolloProvider } from '@apollo/client';
import { ReactNode } from 'react';
import anilistClient from './anilist/client';

const GraphQlServiceProvider = ({ children }: { children: ReactNode }) => (
  <ApolloProvider client={anilistClient}>{children}</ApolloProvider>
);

export default GraphQlServiceProvider;
