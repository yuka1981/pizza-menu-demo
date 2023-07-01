import React from "react";
import ReactDOM from "react-dom/client";
import moment from "moment";

const App = () => {
  return (
    <div>
      <Header />
      <h1>Hello React!</h1>
      <Menu />
      <Footer />
    </div>
  );
};

const Header = () => {
  return <h1>Fast React Pizza Co.</h1>;
};

const Menu = () => {
  return (
    <div>
      <h2>Our menu</h2>
      <Pizza />
    </div>
  );
};

const Footer = () => {
  const now = moment().format("MMM Do YYYY");
  return <footer>{now} We're currently open </footer>;
};

const Pizza = () => {
  return (
    <div>
      <img alt="Pizza spinaci" src="./pizzas/spinaci.jpg" />
      <h2>Pizza Spinaci</h2>
      <p>Tomato, mozarella, spinach, and ricotta cheese</p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
