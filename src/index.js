import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import allreducer from "./Redux/reducer/index";
import { legacy_createStore } from "redux";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "./graphql";
const root = ReactDOM.createRoot(document.getElementById("root"));
const strore = legacy_createStore(allreducer);
root.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <Provider store={strore}>
        <App />
      </Provider>
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
