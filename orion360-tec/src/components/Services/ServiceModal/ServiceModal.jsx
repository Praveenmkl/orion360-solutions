import { useEffect, useRef } from "react";
import Button from "../../common/Button/Button";
import "./ServiceModal.css";

function ServiceModal({ service, onClose }) {
  const closeBtnRef = useRef(null);

  useEffect(() => {
    if (!service) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="service-modal-backdrop"
      role="presentation"
      onClick={handleBackdropClick}
    >
      <div
        className="service-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-modal-title"
      >
        <button
          ref={closeBtnRef}
          type="button"
          className="service-modal__close"
          onClick={onClose}
          aria-label="Close service details"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>

        <div className="service-modal__header">
          <div className="service-modal__icon-badge">
            <img
              src={service.icon}
              alt=""
              className="service-modal__icon"
              aria-hidden="true"
            />
          </div>
          <div>
            <span className="service-modal__eyebrow">
              SERVICE {service.number}
            </span>
            <h3 id="service-modal-title" className="service-modal__title">
              {service.title}
            </h3>
            <p className="service-modal__tagline">{service.tagline}</p>
          </div>
        </div>

        <p className="service-modal__description">{service.description}</p>

        <div className="service-modal__section">
          <h4 className="service-modal__section-label">WHAT WE DELIVER</h4>
          <ul className="service-modal__deliverables">
            {service.deliverables.map((item) => (
              <li key={item} className="service-modal__deliverable">
                <span className="service-modal__check" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="service-modal__section">
          <h4 className="service-modal__section-label">CORE CAPABILITIES</h4>
          <div className="service-modal__tags">
            {service.tags.map((tag) => (
              <span key={tag} className="service-modal__tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="service-modal__footer">
          <Button
            href="#contact"
            variant="primary"
            className="service-modal__cta"
            onClick={onClose}
          >
            <span>START A PROJECT</span>
            <span className="service-modal__cta-arrow" aria-hidden="true">
              &rarr;
            </span>
          </Button>
          <button
            type="button"
            className="service-modal__dismiss"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default ServiceModal;
