import React from "react";

//4. Create a Footer component
function Footer() {
  const companyInformation = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <div className="footer">
      <ul>
        {companyInformation.map((informations, i) => (
          <li key={i}>{informations}</li>
        ))}
      </ul>
    </div>
  );
}

export default Footer;
