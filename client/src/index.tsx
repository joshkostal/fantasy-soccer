import { ApolloProvider } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom";
import client from "./api";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
// serviceWorkerRegistration.unregister();
