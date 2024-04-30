import './App.css';
import { Routes, Route} from 'react-router-dom';
import  Home from "../src/Views/Home/Home.js"
import HotelBooking from "../src/Views/HotelBooking/HotelBooking.js"
import Register from "../src/Views/Register/Register.js";

import PrivacyPolicy from './Views/PrivacyPolicy/PrivacyPolicy.js';
import TermsAndConditions from './Views/TermsAndConditions/TermsAndConditions.js';
import Cookies from './Views/Cookies/Cookies.js';
import Login from "../src/Views/Login/Login.js";
import ZooBooking from './Views/ZooBooking/ZooBooking.js';
import RewardScheme from './Views/RewardScheme/RewardScheme.js';
import AccessibilityOptions from './Views/WebsiteAccessibility/WebsiteAccessibility.js';
import AboutUs from './Views/AboutUs/AboutUs.js'
import EducationalVisits from './Views/EducationalVisits/EducationalVisits.js';


function App() {
  return (
    <div className="App">
      {/*All the routes for the website */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/HotelBooking" element={<HotelBooking />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
        <Route path="/Cookies" element={<Cookies />} />
        <Route path='/ZooBooking' element={<ZooBooking />} />
        <Route path='/RewardScheme' element={<RewardScheme />} />
        <Route path='/Website-Accessibility' element={<AccessibilityOptions/>} />
        <Route path='/AboutUs' element={<AboutUs/>} />
        <Route path='/EducationalVisits' element={<EducationalVisits/>} />
      </Routes>
    </div> 
  );
}


export default App;
