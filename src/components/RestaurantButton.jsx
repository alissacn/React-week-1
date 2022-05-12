import React from "react";


//11. Extract the Add button to its own component

function RestaurantButton(props) {
    return (
        <button onClick={props.add} className="btn btn-primary">Add</button>
    );
};

export default RestaurantButton;