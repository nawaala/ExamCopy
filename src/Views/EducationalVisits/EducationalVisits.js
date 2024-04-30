import "./EducationalVisits.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Parrot from "../../Assets/Parrot.jpg";
import arrow from "../../Assets/arrow.png";

const EducationalVisits = () => {
  return (
    <div>
      <Header />
      <h1 className="edvisits-title">Educational Visits</h1>
      <div class="educational-facts-row">
        <div class="col">
          <img src={Parrot} height={300} />
          <p> RESOURCES </p>
        </div>
        <div class="col">
          <img src={Parrot} height={300} />
          <p> ANIMAL FACTS </p>
        </div>
      </div>
      
      <h2 className="resources-heading">Check out these resources:</h2>
      {/* These links below will navigate to educational pdfs and will be replaced with actual links for the final website */}
      <div className="resources-column">
        <a href="#"><img src={arrow} height={30} /> ipsum dolor sit amet, consectetur adipiscing elit</a>
        <a href="#"><img src={arrow} height={30} />Lorem ipsum dolor sit amet, consectetur adipiscing elit</a>
        <a href="#"><img src={arrow} height={30} />Lorem ipsum dolor sit amet, consectetur adipiscing elit</a>
      </div>
      <br/>
      <br/>
      <br/>
      <Footer />
    </div>
  );
};

export default EducationalVisits;
