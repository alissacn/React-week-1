//2. Extract the header in its own component
import React from "react";
import Logo from "../images/logo.jfif";

function Heading() {
  return (
    <header className="App-header">
      <p>
        CYF Hotel <img src={Logo} />
      </p>
    </header>
  );
}

export default Heading;
