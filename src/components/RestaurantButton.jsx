import React from "react";

//11. Extract the Add button to its own component

function RestaurantButton(props) {
  return (
    <div className="d-flex justify-content-center">
      <button onClick={props.add} className="btn btn-primary">
        Add
      </button>
    </div>
  );
}

export default RestaurantButton;
