import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from '@apollo/client';
// import { UserProvider } from '@auth0/nextjs-auth0';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_BACKEND_URL}/graphql`,
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <UserProvider>
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
    // </UserProvider>
  );
}

export default MyApp;
