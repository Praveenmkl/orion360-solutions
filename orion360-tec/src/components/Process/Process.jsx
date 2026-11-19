import processData from "../../data/processData";
import useInView from "../../hooks/useInView";
import "./Process.css";

function Process({
  id = "process",
  eyebrow = "OUR PROCESS",
  title = "From vision to reality.",
  subtitle = "A clear and collaborative journey from the first conversation to the final launch.",
  steps = processData,
}) {
  const [sectionRef, isVisible] = useInView();
  const revealClass = `reveal ${isVisible ? "reveal--visible" : ""}`.trim();

  return (
    <section ref={sectionRef} id={id} className="process section-divider">
      <div className="process__container">
        <div className={`process__header ${revealClass}`}>
          <span className="process__eyebrow">{eyebrow}</span>
          <h2 className="process__title">{title}</h2>
          {subtitle && <p className="process__subtitle">{subtitle}</p>}
        </div>

        <div className="process__timeline">
          <div className="process__track" aria-hidden="true" />

          <div className="process__steps">
            {steps.map((item, index) => (
              <article
                key={item.id}
                className={`process__step ${revealClass}`}
                style={{ "--step-index": index, "--reveal-index": index + 1 }}
              >
                <div className="process__node" aria-hidden="true">
                  <span className="process__dot-ring" />
                  <span className="process__dot-pulse" />
                  <span className="process__dot" />
                </div>
                <span className="process__number">{item.step}</span>
                <h3 className="process__step-title">{item.title}</h3>
                <p className="process__step-description">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;
