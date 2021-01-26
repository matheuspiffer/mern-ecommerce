import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./views/Home/Home";
import Product from "./views/Product/Product";
import Cart from "./views/Cart/Cart";
import Login from "./views/Login/Login";
import Register from "./views/Register/Register";
import Profile from "./views/Profile/Profile";
import Shipping from "./views/Shipping/Shipping";
import Payment from "./views/Payment/Payment";
import PlaceOrder from "./views/PlaceOrder/PlaceOrder";

function App() {
  return (
    <Router>
      <Header></Header>
      <main className="py-3">
        <Container>
          <Route path="/login" component={Login} exact />
          <Route path="/register" component={Register} exact />
          <Route path="/profile" component={Profile} exact />
          <Route path="/shipping" component={Shipping} exact />
          <Route path="/payment" component={Payment} exact />
          <Route path="/place-order" component={PlaceOrder} exact />
          <Route path="/product/:id" component={Product} exact />
          <Route path="/cart/:id?" component={Cart} exact />
          <Route path="/" component={Home} exact />
        </Container>
      </main>
      <Footer></Footer>
    </Router>
  );
}

export default App;
