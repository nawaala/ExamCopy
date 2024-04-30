import "./ZooBooking.css";
import Header from "../../Components/Header/Header";
import basket from "../../Assets/basketIcon.png";
import receipt from "../../Assets/ticketIcon.png";
import profile from "../../Assets/ProfileIcon.PNG";
import line from "../../Assets/dash.png";
import DatePicker from "react-datepicker";
import { useState } from "react";
import TimePicker from "@ashwinthomas/react-time-picker-dropdown";
import VisitorSelector from "../../Components/VisitorSelector/VisitorSelector";
import PaymentSystem from "../../Components/PaymentSystem/PaymentSystem"

const ZooBooking = () => {
  const [date, setDate] = useState(new Date());
 
  return (
    <div>
      <Header />
      <h1>Book a Trip To the Zoo</h1>
      <div class="booking-steps">
        <div class="step">
          <img className="icon" src={profile} height={50} />
          <span class="label">Login</span>
        </div>
        <img className="icon" src={line} height={50} />
        <div class="step">
          <img className="icon" src={receipt} height={50} />
          <span class="label">Fill in admission</span>
        </div>
        <img className="icon" src={line} height={50} />
        <div class="step">
          <img className="icon" src={basket} height={50} />
          <span class="label">Checkout</span>
        </div>
      </div>
      <h3>Select Date:</h3>
      <DatePicker selected={date} onChange={(date) => setDate(date)} />
      <div className="booking-time">
        <h3>Select Time:</h3>
        <TimePicker
          defaultValue="10:10 am"
          useTwelveHourFormat={true}
        />
      </div>
      <div>
        <h3>Select Number of Tickets:</h3>
        <VisitorSelector/>
      </div>
      <div>
        <h3>Enter Card Details:</h3>
        <PaymentSystem/>
      </div>
    </div>
  );
};

export default ZooBooking;
