import "./HotelBooking.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import GuestSelector from "../../Components/GuestSelector/GuestSelector.js"
import PaymentForm from "../../Components/PaymentSystem/PaymentSystem.js";
import basket from "../../Assets/basketIcon.png";
import receipt from "../../Assets/ticketIcon.png";
import profile from "../../Assets/ProfileIcon.PNG";
import line from "../../Assets/dash.png";
import room from "../../Assets/hotelRoom.jpg";
import Header from "../../Components/Header/Header.js";
import Footer from "../../Components/Footer/Footer.js";

const HotelBooking = () => {
  // State for storing the start and end dates of the hotel booking
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (date) => {
    setStartDate(date);
    // Resets the end date if it is before the new start date
    if (endDate && date > endDate) {
      setEndDate(null);
    }
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
    // Resets the start date if it is after the new end date
    if (date && date < startDate) {
      setStartDate(null);
    }
  };

  return (
    <div>
      <Header/>
      <div className="booking-container">
        <h1>Hotel Booking</h1>
        <div class="booking-steps">
          <div class="step">
            <img className="icon" src={profile} height={50}/>
            <span class="label">Login</span>
          </div>
          <img className="icon" src={line} height={50} />
          <div class="step">
            <img className="icon" src={receipt} height={50}/>
            <span class="label">Fill in admission</span>
          </div>
          <img className="icon" src={line} height={50} />
          <div class="step">
            <img className="icon" src={basket} height={50}/>
            <span class="label">Checkout</span>
          </div>
        </div>
        <div className="images-container">
          <img src={room} height={300} width={500}/>
        </div>
        <h3>Select Dates:</h3>
        <DatePicker
          selected={startDate}
          onChange={handleStartDateChange}
          placeholderText="Start Date"
          minDate={new Date()}
          selectsStart
          startDate={startDate}
          endDate={endDate}
        />
        <DatePicker
          selected={endDate}
          onChange={handleEndDateChange}
          placeholderText="End Date"
          minDate={startDate}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
        />
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        
        <GuestSelector /> {/* Component for selecting number of guests */}
        <br/>
        <br/>
        <br/>

        <h3>Enter Card Details:</h3>
        <PaymentForm /> {/* Component for entering payment details */}
      </div>
      <Footer/>
    </div>
  );
};

export default HotelBooking;