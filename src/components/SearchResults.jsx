import React, { useState } from "react";
import CustomerProfile from "./CustomerProfile";
import moment from "moment";

//6. Show more bookings in the table
function ClientsDataRow(props) {
  let checkin = moment(props.client.checkInDate);
  let checkout = moment(props.client.checkOutDate);
  let days = checkout.diff(checkin, "days");

  const [color, setColors] = useState("white");
  function changeColor() {
    if (color === "pink") {
      setColors("white");
    } else {
      setColors("pink");
    }
  }

  const colorCss = {
    backgroundColor: color
  };

  return (
    <tr onClick={changeColor} style={colorCss}>
      <td>{props.client.id}</td>
      <td>{props.client.title}</td>
      <td>{props.client.firstName}</td>
      <td>{props.client.surname}</td>
      <td>{props.client.email}</td>
      <td>{props.client.roomId}</td>
      <td>{props.client.checkInDate}</td>
      <td>{props.client.checkOutDate}</td>
      <td>{days}</td>
      <td>
        {" "}
        <button
          className="btn btn-primary"
          onClick={() => props.changeCustomerId(props.client.id)}
        >
          Show profile
        </button>
      </td>
    </tr>
  );
}

//5- Create a table to show hotel bookings
function SearchResults(props) {
  const [customerId, setCustomerId] = useState(0);
  function changeCustomerId(id) {
    console.log(id);
    setCustomerId(id);
  }

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">{props.word}Title</th>
            <th scope="col">First name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room Id</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check out date</th>
            <th scope="col">Nights staying</th>
            <th scope="col">Profile</th>
          </tr>
        </thead>
        {props.results.map(client => (
          <ClientsDataRow client={client} changeCustomerId={changeCustomerId} />
        ))}
      </table>
      <CustomerProfile id={customerId} />
    </div>
  );
}

export default SearchResults;
