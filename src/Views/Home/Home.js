import "./Home.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import heroImage from "../../Assets/HeroImage.jpg";
import lionImage from "../../Assets/homepageLion.jpg";
import zebraImage from "../../Assets/homepageZebra.jpg";
import { useNavigate } from 'react-router-dom';
import ToggleTheme from "../../Components/ToggleTheme/ToggleTheme";
const NavButton = ({text, path}) => {
  const navigate = useNavigate()
  return(
      <button className='nav-button' onClick={() => navigate(path)}>
          {text}
      </button>
  )
}


const HeroSection = () => {
  return (
    /* Hero section */  
    <div className="hero-section">
      <div className="hero-text">
        <h1>Enjoy your time here</h1>
        <h1 className="text">At Riget Zoo Adventures</h1>
        <div className="hero-buttons">
          <button className="book-tickets-btn">Book Tickets</button>
          <button className="collect-rewards-btn">Collect Rewards</button>
        </div>
      </div>
      <img
        src={heroImage}
        alt="Hero"
        className="hero-image"
        width={1900}
        height={1000}
      />
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <ToggleTheme/>
      <Header />
      <HeroSection />
      <div class="container text-center">
        <div class="row-homepage">        
          <div class="col"><img src={lionImage} height={300}/><NavButton  text="Find out more" path={"/AboutUs"} /></div>
          <div class="col"><img src={zebraImage} height={300}/><NavButton  text="Learn at the zoo with your children" path={"/EducationalVisits"} /></div>
          <div class="col"><img src={lionImage} height={300}/><NavButton  text="Purchase your tickets today" path={"/ZooBooking"} /></div>
        </div>
      </div>
      <h2 className="location">Where are we located?</h2>
      {/* Importing Google maps feature onto my website */ }
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2491.9620319973446!2d-0.32125092888657947!3d51.34860878822209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760a79b30bdf09%3A0xd4b0f2618c8e5071!2sChessington%20World%20of%20Adventures%20Resort!5e0!3m2!1sen!2suk!4v1711641711893!5m2!1sen!2suk"
        width="600"
        height="450"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      

      

      <Footer />
    </div>
  );
};

export default Home;
