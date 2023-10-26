import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

const client = new ApolloClient({
  // options go here

  //location of GraphQL server
  uri: 'http://localhost:4000',

  //apolloclient uses memory cache
  cache: new InMemoryCache(),
})

export default client
