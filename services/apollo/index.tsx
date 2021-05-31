import { ApolloProvider } from '@apollo/client';
import { ReactNode } from 'react';
import anilistClient from './anilist/client';

const ApolloMulticlientsProvider = ({ children }: { children: ReactNode }) => (
  <ApolloProvider client={anilistClient}>{children}</ApolloProvider>
);

export default ApolloMulticlientsProvider;
