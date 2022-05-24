import React, { useEffect, useState } from "react";

const CustomerProfile = ({ id }) => {
  const [customerInfo, setCustomerInfo] = useState(null);
  useEffect(() => {
    if (id > 0) {
      fetch(`https://cyf-react.glitch.me/customers/${id}`)
        .then(response => response.json())
        .then(data => setCustomerInfo(data));
    }
  }, [id]);

  return (
    <div className="customer-profile text-center">
      {id && customerInfo
        ? ` Customer profile | ID: ${customerInfo.id} |
    Email: ${customerInfo.email} |
    Is VIP? ${customerInfo.vip} |
    Phone Number: ${customerInfo.phoneNumber}`
        : ""}
    </div>
  );
};

export default CustomerProfile;
