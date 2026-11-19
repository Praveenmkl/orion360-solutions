import Button from "../../components/common/Button/Button";
import Process from "../../components/Process/Process";
import ContactCta from "../../components/ContactCta/ContactCta";
import CapabilityCard from "./CapabilityCard";
import useInView from "../../hooks/useInView";
import "./ServiceDetail.css";

function scrollToSection(event, targetId) {
  event.preventDefault();
  const targetEl = document.getElementById(targetId);
  if (!targetEl) return;

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  targetEl.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
}

function ServiceDetail({ service }) {
  const [capRef, capVisible] = useInView();
  const [toolsRef, toolsVisible] = useInView();
  const capRevealClass = `reveal ${capVisible ? "reveal--visible" : ""}`.trim();
  const toolsRevealClass = `reveal ${toolsVisible ? "reveal--visible" : ""}`.trim();

  return (
    <main className="service-page">
      <section className="service-hero" aria-labelledby="service-hero-title">
        <div className="service-hero__content">
          <span className="service-hero__eyebrow">{service.eyebrow}</span>

          <h1 id="service-hero-title" className="service-hero__title">
            {service.title}
          </h1>

          <p className="service-hero__subtitle">{service.subtitle}</p>

          <div className="service-hero__actions">
            <Button
              href="#service-cta"
              variant="primary"
              onClick={(event) => scrollToSection(event, "service-cta")}
            >
              {service.primaryCtaLabel}
            </Button>

            <Button
              href="#service-process"
              variant="link"
              className="service-hero__link"
              onClick={(event) => scrollToSection(event, "service-process")}
            >
              <span className="service-hero__link-label">
                {service.secondaryCtaLabel}
              </span>
              <span className="service-hero__link-arrow" aria-hidden="true">
                &rarr;
              </span>
            </Button>
          </div>

          {service.techPills?.length > 0 && (
            <ul className="service-hero__pills" aria-label="Technologies used">
              {service.techPills.map((pill) => (
                <li key={pill} className="service-hero__pill">
                  {pill}
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <section
        ref={capRef}
        className="service-capabilities section-divider"
        aria-label={`${service.eyebrow} capabilities`}
      >
        <div className="service-capabilities__container">
          <div className="service-capabilities__grid">
            {service.capabilities.map((item, index) => (
              <div
                key={item.id}
                className={capRevealClass}
                style={{ "--reveal-index": index + 1 }}
              >
                <CapabilityCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Process id="service-process" />

      <section
        ref={toolsRef}
        className="service-tools section-divider"
        aria-labelledby="service-tools-title"
      >
        <div className="service-tools__container">
          <div className={`service-tools__intro ${toolsRevealClass}`}>
            <span className="service-tools__eyebrow">
              {service.toolsEyebrow}
            </span>
            <h2 id="service-tools-title" className="service-tools__title">
              {service.toolsTitle}
            </h2>
          </div>

          <div className="service-tools__grid">
            {service.toolsGroups.map((group, index) => (
              <article
                key={group.label}
                className={`service-tools__group ${toolsRevealClass}`}
                style={{ "--reveal-index": index + 1 }}
              >
                <span className="service-tools__label">{group.label}</span>
                <h3 className="service-tools__items">{group.items}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactCta
        id="service-cta"
        badge={service.ctaBadge}
        title={service.ctaTitle}
        subtitle={service.ctaSubtitle}
        primaryLabel={service.ctaPrimaryLabel}
        secondaryLink={{
          label: service.ctaSecondaryLabel,
          href: service.ctaSecondaryHref,
        }}
        showTagline={false}
      />
    </main>
  );
}

export default ServiceDetail;
