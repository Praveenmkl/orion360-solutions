import Button from "../../components/common/Button/Button";
import useCopyToClipboard from "../../hooks/useCopyToClipboard";
import { contactHeroData, contactProcessData } from "../../data/contactData";
import { contactDetails } from "../../data/footerData";
import ContactFormCard from "./ContactFormCard";
import EmailCopyControl from "./EmailCopyControl";
import "./Contact.css";

function Contact() {
  const { isCopied, copy } = useCopyToClipboard();

  const handleScrollToForm = (event) => {
    event.preventDefault();
    const formSection = document.getElementById("contact-form");
    if (!formSection) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    formSection.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });

    window.requestAnimationFrame(() => {
      document.getElementById("contact-full-name")?.focus({ preventScroll: true });
    });
  };

  return (
    <main className="contact-page">
      <section className="contact-hero" aria-labelledby="contact-hero-title">
        <div className="contact-hero__content">
          <span className="contact-hero__eyebrow">{contactHeroData.eyebrow}</span>

          <h1 id="contact-hero-title" className="contact-hero__title">
            {contactHeroData.title}
          </h1>

          <p className="contact-hero__subtitle">{contactHeroData.subtitle}</p>

          <div className="contact-hero__actions">
            <Button
              href="#contact-form"
              variant="primary"
              className="contact-hero__cta"
              onClick={handleScrollToForm}
            >
              {contactHeroData.primaryCtaLabel}
            </Button>

            <EmailCopyControl
              email={contactDetails.email}
              copied={isCopied("hero")}
              onCopy={() => copy(contactDetails.email, "hero")}
              variant="hero"
            />
          </div>
        </div>
      </section>

      <section
        id="contact-form"
        className="contact-intake section-divider"
        aria-labelledby="contact-intake-title"
      >
        <div className="contact-intake__container">
          <div className="contact-intake__grid">
            <div className="contact-intake__intro">
              <span className="contact-intake__eyebrow">
                {contactProcessData.eyebrow}
              </span>

              <h2 id="contact-intake-title" className="contact-intake__title">
                {contactProcessData.title}
              </h2>

              <ol className="contact-steps">
                {contactProcessData.steps.map((step) => (
                  <li key={step.number} className="contact-step">
                    <span className="contact-step__badge" aria-hidden="true">
                      {step.number}
                    </span>
                    <p className="contact-step__text">
                      <strong className="contact-step__lead">{step.lead}</strong>{" "}
                      {step.body}
                    </p>
                  </li>
                ))}
              </ol>

              <div className="contact-intake__inbox">
                <p className="contact-intake__inbox-label">
                  {contactProcessData.inboxPrompt}
                </p>
                <EmailCopyControl
                  email={contactDetails.email}
                  copied={isCopied("inbox")}
                  onCopy={() => copy(contactDetails.email, "inbox")}
                  variant="inbox"
                />
              </div>
            </div>

            <div className="contact-intake__form-col">
              <ContactFormCard />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
