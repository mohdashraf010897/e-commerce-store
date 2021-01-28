import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "./styles/main.scss";
import ProductLanding from "./pages/ProductLanding";

import { store, persistor } from "./redux/store";
//being only one page, Routing is deliberately being ignored
//and the single page component is directly fed to React engine

ReactDOM.render(
  <React.StrictMode>
    {" "}
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ProductLanding />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
