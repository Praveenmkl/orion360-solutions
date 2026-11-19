import skyline from "../../../assets/colombo_city2.webp";
import "./HeroBackground.css";

function HeroBackground() {
  return (
    <div className="hero-bg" aria-hidden="true">
      <img src={skyline} alt="" className="hero-bg__img" />
    </div>
  );
}

export default HeroBackground;
