import HeroBackground from "./HeroBackground/HeroBackground";
import HeroBadge from "./HeroBadge/HeroBadge";
import HeroActions from "./HeroActions/HeroActions";
import logo from "../../assets/orion360_logo.png";
import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero">
      <HeroBackground />

      <div className="hero__content">
        <HeroBadge text="Sri Lankan Origins. Global Horizons." />

        <img src={logo} alt="Orion360" className="hero__logo" />

        <h1 className="hero__title">
          Where Digital Creativity Meets
          <br />
          Engineering Excellence.
        </h1>

        <p className="hero__description">
          Driven by creativity and powered by technology, Orion360 builds
          digital solutions that move businesses forward.
        </p>

        <HeroActions />
      </div>
    </section>
  );
}

export default Hero;
