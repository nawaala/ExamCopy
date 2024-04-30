import "./AboutUs.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import attractions from "../../Assets/attractionsImage.jpg";
import facilities from "../../Assets/facilitiesImage.jpg";
import ChatBot from "../../Components/Chatbot/ChatBot";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <h1>What's Here</h1>
      <h3 className="h3-about-us">Attractions:</h3>
      <div class="row-attractions">
        <div class="col">
          <img src={attractions} height={300} />
          <p> *Text* </p>
        </div>
        <div class="col">
          <img src={attractions} height={300} />
          <p> *Text* </p>
        </div>
        <div class="col">
          <img src={attractions} height={300} />
          <p> *Text* </p>
        </div>
      </div>

      <h3 className="h3-about-us">Facilities:</h3>
      <div class="row-facilities">
        <div class="col">
          <img src={facilities} height={300} />
          <p> *Text* </p>
        </div>
        <div class="col">
          <img src={facilities} height={300} />
          <p> *Text* </p>
        </div>
        <div class="col">
          <img src={facilities} height={300} />
          <p> *Text* </p>
        </div>
        <h3>Ask the ChatBot for any questions you may have about the Zoo, down below</h3>

        </div>
        <div className="chatbot-section">
          <ChatBot />
        </div>
 

      <Footer />
    </div>
  );
};

export default AboutUs;
