import Button from "../../common/Button/Button";
import "./HeroActions.css";

function HeroActions() {
  return (
    <div className="hero-actions">
      <Button href="#contact" variant="primary">
        START A PROJECT
      </Button>
      <Button href="#services" variant="link" className="hero-actions__link">
        <span className="hero-actions__label">EXPLORE SERVICES</span>
        <span className="hero-actions__arrow" aria-hidden="true">
          &rarr;
        </span>
      </Button>
    </div>
  );
}

export default HeroActions;
