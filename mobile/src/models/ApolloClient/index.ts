import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://d6e2-177-152-87-204.ngrok-free.app',
  }),
  cache: new InMemoryCache(),
});

const apolloClient = () => {
  if (!client) {
    throw new Error('DEU RUIM');
  }

  return client;
};

export default apolloClient;
