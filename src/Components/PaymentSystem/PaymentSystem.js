import "./PaymentSystem.css";
import { useState } from "react";

const PaymentForm = () => {
  // UseState hooks for storing form input values
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCvc] = useState("");
  const [country, setCountry] = useState("United Kingdom");
  const [postalCode, setPostalCode] = useState("");

  // Function to format card number input into blocks of 4 digits
  const formatCardNumber = (value) => {
    const cleanedValue = value.replace(/\D/g, "");
    const formattedValue = cleanedValue.replace(/(\d{4})/g, "$1 ").trim(); // Insert space after every 4 digits
    return formattedValue;
  };

  //function to test if expiry date is valid
  const isValidExpiryDate = (value) => {
    const regex = /^(0[1-9]|1[0-2])\/\d{2}$/; // Date has to match MM/YY format
    if (!regex.test(value)) return false;

    const [month, year] = value.split("/");
    const currentYear = new Date().getFullYear() % 100;
    const currentMonth = new Date().getMonth() + 1;

    //Dont allow users to input a year below the current year
    if (parseInt(year) < currentYear) return false;
    if (parseInt(year) === currentYear && parseInt(month) < currentMonth)
      return false;

    return true;
  };

  // Validator for the card verification code (CVC)
  const isValidCvc = (value) => {
    const regex = /^\d{3,4}$/;
    return regex.test(value);
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate expiry date and CVC before proceeding
    if (!isValidExpiryDate(expiryDate) || !isValidCvc(cvc)) {
      // Show an error message if validation fails
      return;
    }

    try {
      // Make a POST request to the server to process payment
      const response = await fetch("/api/processPayment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          cardNumber,
          expiryDate,
          cvc,
          country,
          postalCode,
        }),
      });

      

      if (response.ok) {
        // Payment successful
        console.log("Payment successful");
      } else {
        // Payment failed
        console.error("Payment failed");
      }
    } catch (error) {
      // Handle any errors that occur during fetch
      console.error("Error occurred:", error);
    }
  };

  return (
    //  Payment form for when users input their payment details
    <form onSubmit={handleSubmit} className="payment-form">
      <div className="form-row">
        <div className="form-group">
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
            required
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <input
            type="text"
            id="cardNumber"
            value={formatCardNumber(cardNumber)}
            onChange={(e) => setCardNumber(e.target.value)}
            maxLength={19}
            placeholder="1234 1234 1234 1234"
            required
          />
          <div className="card-icons">
            <img src="visa.png" alt="Visa" />
            <img src="mastercard.png" alt="Mastercard" />
          </div>
        </div>
        <div className="form-group">
          <input
            type="text"
            id="expiryDate"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            placeholder="MM/YY"
            maxLength={5}
            required
            pattern="\d\d/\d\d"
            title="Enter a valid expiry date in the format MM/YY"
            onBlur={(e) => {
              if (!isValidExpiryDate(e.target.value)) {
                // Show an error message or perform any necessary action
              }
            }}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            id="cvc"
            value={cvc}
            onChange={(e) => setCvc(e.target.value)}
            maxLength={4}
            placeholder="CVC"
            required
            pattern="\d{3,4}"
            title="Enter a 3 or 4-digit CVC code"
            onBlur={(e) => {
              if (!isValidCvc(e.target.value)) {
                // Show an error message or perform any necessary action
              }
            }}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <select
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="United Kingdom">United Kingdom</option>
         
          </select>
        </div>

        <div className="form-group">
          <input
            type="text"
            id="postalCode"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            placeholder="WS1 1DB"
            required
          />
        </div>
      </div>
      <button type="submit" className="submit-button">
        Confirm Booking
      </button>
    </form>
  );
};

export default PaymentForm;
