import AboutPillars from "./AboutPillars";
import useInView from "../../hooks/useInView";
import "./About.css";

function About() {
  const [sectionRef, isVisible] = useInView();
  const revealClass = `reveal ${isVisible ? "reveal--visible" : ""}`.trim();

  return (
    <section ref={sectionRef} id="about" className="about section-divider">
      <div className="about__container">
        <div className={`about__header ${revealClass}`}>
          <span className="about__eyebrow">ABOUT ORION360</span>
          <h2 className="about__title">
            We turn bold ideas
            <br />
            into meaningful digital experiences.
          </h2>
          <p className="about__subtitle">
            ORION360 is a technology-driven company combining creativity,
            design, and engineering to build digital solutions that make a
            difference.
            <br />
            Rooted in Sri Lanka and driven by a global vision, we help
            businesses transform ambitious ideas into practical, scalable
            digital experiences.
          </p>
        </div>

        <AboutPillars revealClass={revealClass} />
      </div>
    </section>
  );
}

export default About;
