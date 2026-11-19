import Button from "../common/Button/Button";
import useCopyToClipboard from "../../hooks/useCopyToClipboard";
import useInView from "../../hooks/useInView";
import useSpotlight from "../../hooks/useSpotlight";
import { contactDetails } from "../../data/footerData";
import "./ContactCta.css";

function ContactCta({
  id = "contact-cta",
  badge = "READY FOR YOUR NEXT PROJECT",
  title = "Let's build something meaningful",
  subtitle = "Have an idea or a challenge to solve? Let's connect and explore what's possible together.",
  primaryLabel = "LETS TALK",
  primaryHref = "#contact",
  secondaryLink = null,
  showTagline = true,
}) {
  const cardRef = useSpotlight();
  const [contentRef, isVisible] = useInView();
  const { isCopied, copy } = useCopyToClipboard();
  const copied = isCopied("cta-email");

  const handleCopyEmail = async () => {
    const ok = await copy(contactDetails.email, "cta-email");
    if (!ok) {
      window.location.href = `mailto:${contactDetails.email}`;
    }
  };

  return (
    <section id={id} className="contact-cta section-divider">
      <div className="contact-cta__ambient" aria-hidden="true" />

      <div className="contact-cta__container">
        <div ref={cardRef} className="contact-cta__card">
          <div className="contact-cta__card-inner">
            <div className="contact-cta__grid-bg" aria-hidden="true" />
            <div className="contact-cta__spotlight" aria-hidden="true" />

            <div
              ref={contentRef}
              className={`contact-cta__content reveal ${isVisible ? "reveal--visible" : ""}`.trim()}
            >
              <div className="contact-cta__badge">
                <span className="contact-cta__badge-dot" aria-hidden="true" />
                <span>{badge}</span>
              </div>

              <h2 className="contact-cta__title">{title}</h2>

              <p className="contact-cta__subtitle">{subtitle}</p>

              <div className="contact-cta__actions">
                <Button
                  href={primaryHref}
                  variant="primary"
                  className="contact-cta__button"
                >
                  <span>{primaryLabel}</span>
                  <span className="contact-cta__button-arrow" aria-hidden="true">
                    &rarr;
                  </span>
                </Button>

                {secondaryLink ? (
                  <Button
                    href={secondaryLink.href}
                    variant="link"
                    className="contact-cta__secondary-link"
                  >
                    <span className="contact-cta__secondary-label">
                      {secondaryLink.label}
                    </span>
                    <span
                      className="contact-cta__button-arrow"
                      aria-hidden="true"
                    >
                      &rarr;
                    </span>
                  </Button>
                ) : (
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className={`contact-cta__email-btn ${copied ? "contact-cta__email-btn--copied" : ""}`.trim()}
                    aria-label={
                      copied
                        ? "Email address copied"
                        : `Copy email address ${contactDetails.email}`
                    }
                  >
                    {copied ? (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    ) : (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                      </svg>
                    )}
                    <span>{copied ? "Copied!" : contactDetails.email}</span>
                  </button>
                )}
              </div>

              {showTagline && (
                <p className="contact-cta__tagline">
                  Sri Lankan Origins. Global Horizons.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactCta;
