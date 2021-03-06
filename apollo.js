import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
// import { setContext } from '@apollo/link-context';

// see: https://github.com/graphql/swapi-graphql

//https://beta.pokeapi.co/graphql/v1beta
// https://beta.pokeapi.co/graphql/console/

const GRAPHQL_API_URL = 'https://beta.pokeapi.co/graphql/v1beta';

/*
uncomment the code below in case you are using a GraphQL API that requires some form of
authentication. asyncAuthLink will run every time your request is made and use the token
you provide while making the request.


const TOKEN = '';
const asyncAuthLink = setContext(async () => {
  return {
    headers: {
      Authorization: TOKEN,
    },
  };
});

*/

const httpLink = new HttpLink({
  uri: GRAPHQL_API_URL,
});

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink,
  // link: asyncAuthLink.concat(httpLink),
});
