import React, { useState } from "react";
import Form from "./Form";
import Order from "./Order";
import logo from "../images/logo.png";
import "./App.css";
import { v4 as uuidv4 } from 'uuid'

function App() {
  const [orders, setOrders] = useState([]);

  function addOrder(order) {
    setOrders(orders.concat(order));
  }

  const displayOrders = orders.map(order => {
    return <Order 
      protein={order.protein} 
      toppings={order.toppings} 
      fillings={order.fillings} 
      sides={order.sides}
      key={uuidv4()}
    />;
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Form addOrder={addOrder} />
      <div className="ui raised container segment">
        <h1 className="ui block header">All Orders</h1>
        <div className="ui three cards">{displayOrders}</div>
      </div>
    </div>
  );
}

export default App;
