import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "../components/SearchResults";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  const handleSearch = searchTerm => {
    search(searchTerm);
  };

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/")
      .then(res => res.json())
      .then(data => {
        setBookings(data);
      })
      .catch(err => {
        alert("Sorry, something went wrong. Please try again.");
      });
  }, []);

  const search = searchVal => {
    const bookingsFiltered = bookings.filter(booking => {
      return (
        booking.firstName[0].toUpperCase().includes(searchVal) ||
        booking.surname[0].toUpperCase().includes(searchVal)
      );
    });
    console.log(bookingsFiltered);
    setBookings(bookingsFiltered);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} onSearch={handleSearch} />
        <SearchResults results={bookings} />
      </div>
    </div>
  );
};

export default Bookings;
