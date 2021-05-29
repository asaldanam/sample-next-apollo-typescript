import { ApolloClient, InMemoryCache } from '@apollo/client';

/** Anilist Apollo Client */
const anilistClient = new ApolloClient({
  uri: 'https://graphql.anilist.co/',
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

export default anilistClient;
