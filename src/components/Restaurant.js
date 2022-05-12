
import React, { useState } from "react";
import RestaurantButton from "../components/RestaurantButton";


const Restaurant = () => {

  const [orders, setOrders] = useState(0);

  function orderOne(props) {
    setOrders(orders + 1);
  }

    return (
      <div>
        <h3>Restaurant Orders</h3>
        <ul>
            <li>
                Pizzas:
                <RestaurantButton add={orderOne} />
                <button onClick={() => orderOne()} className="btn btn-primary">Add</button>
            </li>
        </ul>
      </div>
    );
  };




  export default Restaurant;
