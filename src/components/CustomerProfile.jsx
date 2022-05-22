import React from "react";

const CustomerProfile = id => {
  return <div>{id ? `Customer profile: ${id}` : ""}</div>;
};

export default CustomerProfile;
