import { ApolloProvider } from '@apollo/client'
import anilistClient from './anilist/client';

const GraphQlServiceProvider = ({children}) => {
  return (
    <ApolloProvider client={anilistClient}>
      {children}
    </ApolloProvider>
  )
}

export default GraphQlServiceProvider;
