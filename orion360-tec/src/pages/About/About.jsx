import AboutPillars from "../../components/About/AboutPillars";
import WhyOrion from "../../components/WhyOrion/WhyOrion";
import ContactCta from "../../components/ContactCta/ContactCta";
import useInView from "../../hooks/useInView";
import useSpotlight from "../../hooks/useSpotlight";
import { aboutPageData } from "../../data/aboutData";
import companyImage from "../../assets/orion360_company.webp";
import "./About.css";

function About() {
  const mediaSpotlightRef = useSpotlight();
  const [pillarsRef, pillarsVisible] = useInView();
  const pillarsRevealClass = `reveal ${pillarsVisible ? "reveal--visible" : ""}`.trim();

  return (
    <main className="about-page">
      <section className="about-page__hero" aria-labelledby="about-page-title">
        <div className="about-page__container">
          <div className="about-page__header">
            <span className="about-page__eyebrow">
              {aboutPageData.eyebrow}
            </span>
            <h1 id="about-page-title" className="about-page__title">
              {aboutPageData.title}
            </h1>
            <p className="about-page__subtitle">{aboutPageData.subtitle}</p>
          </div>

          <div className="about-page__story">
            <div ref={mediaSpotlightRef} className="about-page__media">
              <div className="about-page__media-inner">
                <img
                  src={companyImage}
                  alt={aboutPageData.imageAlt}
                  className="about-page__image"
                />
              </div>
            </div>

            <div className="about-page__narrative">
              <div className="about-page__kicker">
                <span className="about-page__bar" aria-hidden="true" />
                <span className="about-page__kicker-text">
                  {aboutPageData.storyEyebrow}
                </span>
              </div>

              <h2 className="about-page__story-title">
                {aboutPageData.storyTitle}
              </h2>

              <div className="about-page__paragraphs">
                {aboutPageData.paragraphs.map((text, index) => (
                  <p key={index} className="about-page__paragraph">
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div ref={pillarsRef} className="about-page__pillars">
            <AboutPillars revealClass={pillarsRevealClass} />
          </div>
        </div>
      </section>

      <WhyOrion />
      <ContactCta />
    </main>
  );
}

export default About;
