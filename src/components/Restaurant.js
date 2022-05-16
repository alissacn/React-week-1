import React from "react";
import Order from "../components/Order";

const Restaurant = () => {
  return (
    <div className="text-center">
      <h3>Restaurant Orders</h3>
      <Order orderType="Pizzas: " />
      <Order orderType="Salads: " />
      <Order orderType="Chocolate Cake: " />
    </div>
  );
};

export default Restaurant;
