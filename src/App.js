import React from "react";
import Bookings from "./components/Bookings";
import "./App.css";
import Heading from "./components/Heading.jsx";
import Footer from "./components/Footer.jsx";
import TouristInfoCards from "./components/TouristInfoCards.jsx";
import SearchResults from "./components/SearchResults.jsx";
import Restaurant from "./components/Restaurant";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <Bookings />
      <Restaurant />
      <TouristInfoCards />
      <Footer />
    </div>
  );
};

export default App;
