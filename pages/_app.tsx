import ApolloMulticlientsProvider from 'services/apollo';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: any) {
  return (
    <ApolloMulticlientsProvider>
      <Component {...pageProps} />
    </ApolloMulticlientsProvider>
  );
}

export default MyApp;
