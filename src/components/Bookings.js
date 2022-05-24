import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "../components/SearchResults";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  const handleSearch = searchTerm => {
    search(searchTerm);
  };

  useEffect(() => {
    setIsloading(true);
    fetch("https://cyf-react.glitch.me/delayed")
      .then(res => {
        setIsloading(false);
        if (res.status != 200) {
          alert("Sorry, something went wrong. Please try again.");
        }
        return res.json();
      })
      .then(data => {
        setBookings(data);
      })
      .catch(err => {
        setIsloading(false);
        console.log(err);
      });
  }, []);

  const search = searchVal => {
    const bookingsFiltered = bookings.filter(booking => {
      return (
        booking.firstName[0].toLowerCase().includes(searchVal.toLowerCase()) ||
        booking.surname[0].toLowerCase().includes(searchVal.toUpperCase())
      );
    });
    console.log(bookingsFiltered);
    setBookings(bookingsFiltered);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} onSearch={handleSearch} />
        <div id="test">{isLoading ? "Loading..." : ""}</div>
        <SearchResults results={bookings} />
      </div>
    </div>
  );
};

export default Bookings;
