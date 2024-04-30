import "./RewardScheme.css";
import Header from "../../Components/Header/Header";
import giftbox from "../../Assets/giftbox.jpg";
import Footer from "../../Components/Footer/Footer";
const RewardScheme = () => {
  return (
    <div>
      <Header />
      <div className="RewardScheme-container">
        <h1 className="rewardScheme-title">
          Riget Zoo Adventures
          <br />
          Reward Scheme
        </h1>
        <div className="login-container">
    <img className="login-reward-image" src={giftbox} height={300} />
    <div className="login-reward-form">
      {/* creating a form so users can sign in first then head onto gain rewards */ }     
        <form>
            <h2>Joined our rewards scheme yet?</h2>
            <h1>Sign In</h1>      
            <label htmlFor="email" className="labels">Email</label>
            <input
                className="labels"
                type="email"
                name="email"
                placeholder="Enter your email"
                required
            />
            <label htmlFor="password" className="labels">Password</label>
            <input
                className="labels"
                type="password"
                name="password"
                placeholder="Enter your password"
                required
            />
            <button type="submit">JOIN NOW</button>
        </form>
    </div>

        </div>
        <div>
          <h3 className="rewards-heading">Collect Rewards today:</h3>
          <p className="rewards-paragraphs">
            -Every ticket you purchase you will get 5 points
            <br />
            Become a loyal member to our zoo
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
            <br />
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            <br />
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea
          </p>
          <br/>
          <br/>
          <br/>
          <br/>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default RewardScheme;
