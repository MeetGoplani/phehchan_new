// src/lib/apolloClient.js
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://darksalmon-newt-269456.hostingersite.com/graphql",
  cache: new InMemoryCache(),
});

export default client;
