import lion from "../../../assets/lion.webp";
import "./HeroBadge.css";

function HeroBadge({ text }) {
  return (
    <div className="hero-badge">
      <img src={lion} alt="Sri Lanka lion" className="hero-badge__icon" />
      <span className="hero-badge__text">{text}</span>
    </div>
  );
}

export default HeroBadge;
