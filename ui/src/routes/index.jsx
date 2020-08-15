import React from "react";
import { Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import Home from "./Home";
import { ApolloClient, InMemoryCache } from "@apollo/client";

import { gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io",
  cache: new InMemoryCache(),
});

// const client = ...

client
  .query({
    query: gql`
      query GetRates {
        rates(currency: "USD") {
          currency
        }
      }
    `,
  })
  .then((result) => console.log(result));

function AppRoutes() {
  return (
    <ApolloProvider client={client}>
      <Route exact path="/home" component={Home} />
    </ApolloProvider>
  );
}

export default AppRoutes;
