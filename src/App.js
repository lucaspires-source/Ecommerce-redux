import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from "./components/ProductListing";
import ProductDetail from "./components/ProductDetail";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={ProductListing} />
        <Route exact path="/product/:productId" component={ProductDetail} />
        <Route> 404 Not Found</Route>
      </Switch>
    </Router>
  );
};

export default App;
