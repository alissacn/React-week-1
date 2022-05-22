import React, { useState } from "react";

function SearchButton(props) {
  return (
    <button className="btn btn-primary" onClick={props.onClick}>
      Search
    </button>
  );
}

const Search = props => {
  const [searchInput, setSearchInput] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    props.search(searchInput);
  }

  function handleSearchInput(event) {
    setSearchInput(event.target.value);
    console.log(event.target.value);
  }

  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group search-box" onSubmit={handleSubmit}>
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input
                type="text"
                id="customerName"
                className="form-control"
                placeholder="Customer name"
                results={searchInput}
                onChange={handleSearchInput}
              />
              <SearchButton onClick={() => props.onSearch(searchInput)} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
