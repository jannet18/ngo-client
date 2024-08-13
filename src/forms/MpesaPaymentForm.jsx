import React, { useState } from "react";

function MpesaPaymentForm() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");

  return (
    <form
    // onSubmit={handlePayment}
    >
      <div>
        <label>Phone Number:</label>
        <input
          type="text"
          //   value={phoneNumber}
          //   onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Enter Mpesa phone number"
        />
      </div>
      <div>
        <label>Amount:</label>
        <input
          type="number"
          //   value={amount}
          //   onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
        />
      </div>
      <button type="submit">Pay with Mpesa</button>
    </form>
  );
}

export default MpesaPaymentForm;
