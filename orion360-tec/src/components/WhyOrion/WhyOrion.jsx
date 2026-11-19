import whyOrionData from "../../data/whyOrionData";
import useInView from "../../hooks/useInView";
import "./WhyOrion.css";

function WhyOrion() {
  const [sectionRef, isVisible] = useInView();
  const revealClass = `reveal ${isVisible ? "reveal--visible" : ""}`.trim();

  return (
    <section ref={sectionRef} id="why-orion" className="why-orion section-divider">
      <div className="why-orion__container">
        <div className={`why-orion__header ${revealClass}`}>
          <span className="why-orion__eyebrow">WHY ORION360?</span>
          <h2 className="why-orion__title">
            More than technology. A partner in innovation.
          </h2>
          <p className="why-orion__subtitle">
            We bring together creative thinking, engineering expertise, and a
            commitment to building digital solutions that make a difference.
          </p>
        </div>

        <div className="why-orion__grid">
          {whyOrionData.map((item, index) => (
            <div
              key={item.id}
              className={revealClass}
              style={{ "--reveal-index": index + 1 }}
            >
              <article className="why-orion__item">
                <span className="why-orion__number">{item.number}</span>
                <h3 className="why-orion__item-title">{item.title}</h3>
                <p className="why-orion__item-description">{item.description}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyOrion;
