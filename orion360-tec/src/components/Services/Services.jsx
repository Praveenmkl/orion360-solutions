import ServiceCard from "./ServiceCard/ServiceCard";
import servicesData from "../../data/servicesData";
import useInView from "../../hooks/useInView";
import "./Services.css";

function Services() {
  const [sectionRef, isVisible] = useInView();
  const revealClass = `reveal ${isVisible ? "reveal--visible" : ""}`.trim();

  return (
    <section ref={sectionRef} id="services" className="services section-divider">
      <div className="services__container">
        <div className={`services__header ${revealClass}`}>
          <span className="services__eyebrow">OUR EXPERTISE</span>
          <h2 className="services__title">What we do best.</h2>
          <p className="services__subtitle">
            Combining creativity and engineering to build digital solutions that
            move businesses forward.
          </p>
        </div>

        <div className="services__grid">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className={revealClass}
              style={{ "--reveal-index": index + 1 }}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
