import { ApolloProvider } from "@apollo/client";
import RouteContainer from "@components/routecontainer/routecontainer";
import React from "react";
import ReactDOM from "react-dom";
import { client } from "./apollographql/client/apolloclient";
// Tailwind styles
import "./index.css";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouteContainer />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
