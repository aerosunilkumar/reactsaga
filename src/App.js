import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./components/MainContainer";

import store from "./store";

export default () => (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={Main} />
      </div>
    </Router>
  </Provider>
);
