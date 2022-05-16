import React, { useState } from "react";
import RestaurantButton from "../components/RestaurantButton";

//12. Extract pizza order to its own Order component

function Order(props) {
  const [orders, setOrders] = useState(0);

  function orderOne() {
    setOrders(orders + 1);
  }

  return (
    <ul>
      <li>
        {props.orderType}
        {orders} <RestaurantButton add={orderOne} />
      </li>
    </ul>
  );
}

export default Order;
