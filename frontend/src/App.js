import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./views/Home/Home";
import Product from "./views/Product/Product";
function App() {
  return (
    <Router>
      <Header></Header>
      <main className="py-3">
        <Container>
          <Route path="/" component={Home} exact />
          <Route path="/product/:id" component={Product} exact />
        </Container>
      </main>
      <Footer></Footer>
    </Router>
  );
}

export default App;
