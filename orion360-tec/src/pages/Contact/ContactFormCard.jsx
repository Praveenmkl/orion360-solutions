import { useState } from "react";
import Button from "../../components/common/Button/Button";
import useCopyToClipboard from "../../hooks/useCopyToClipboard";
import useSpotlight from "../../hooks/useSpotlight";
import { contactFormCopy, contactTopicOptions } from "../../data/contactData";
import { contactDetails } from "../../data/footerData";

const INITIAL_FORM = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  message: "",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateForm(form) {
  const errors = {};
  if (!form.fullName.trim()) {
    errors.fullName = "Please enter your name.";
  }
  if (!form.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!EMAIL_PATTERN.test(form.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (!form.message.trim()) {
    errors.message = "Please tell us a little about your project.";
  }
  return errors;
}

function buildInquirySummary(form, topics) {
  const cleanName = form.fullName.trim();
  const cleanEmail = form.email.trim();
  const cleanPhone = form.phone.trim();
  const cleanCompany = form.company.trim();
  const cleanMessage = form.message.trim();
  const topicText = topics.length ? topics.join(", ") : "General inquiry";

  const subjectTopics = topics.length ? ` — ${topics.slice(0, 2).join(", ")}` : "";
  const subject = `Project inquiry from ${cleanName}${subjectTopics}`;

  const lines = [
    `Name: ${cleanName}`,
    `Email: ${cleanEmail}`,
    cleanPhone ? `Phone: ${cleanPhone}` : null,
    cleanCompany ? `Business / Project: ${cleanCompany}` : null,
    `Need help with: ${topicText}`,
    "",
    "Message:",
    cleanMessage,
  ].filter((line) => line !== null);

  const plainText = lines.join("\n");
  const mailtoHref = `mailto:${contactDetails.email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(plainText)}`;

  return {
    fullName: cleanName,
    email: cleanEmail,
    topics: topicText,
    message: cleanMessage,
    plainText,
    mailtoHref,
  };
}

function ContactFormCard() {
  const cardRef = useSpotlight();
  const { isCopied, copy } = useCopyToClipboard();
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [errors, setErrors] = useState({});
  const [submittedSummary, setSubmittedSummary] = useState(null);

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleToggleTopic = (topic) => {
    setSelectedTopics((prev) =>
      prev.includes(topic)
        ? prev.filter((item) => item !== topic)
        : [...prev, topic]
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validateForm(formData);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    const summary = buildInquirySummary(formData, selectedTopics);
    setSubmittedSummary(summary);
    window.location.href = summary.mailtoHref;
  };

  const handleEditInquiry = () => {
    setSubmittedSummary(null);
  };

  return (
    <div ref={cardRef} className="contact-form-card">
      <div className="contact-form-card__spotlight" aria-hidden="true" />
      <div className="contact-form-card__inner">
        {submittedSummary ? (
          <div className="contact-confirmation" role="status" aria-live="polite">
            <div className="contact-confirmation__icon" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>

            <h3 className="contact-confirmation__title">
              Your message is ready to send.
            </h3>

            <p className="contact-confirmation__subtitle">
              We opened your email app for{" "}
              <a
                href={submittedSummary.mailtoHref}
                className="contact-confirmation__email"
              >
                {contactDetails.email}
              </a>
              . You can also copy your message below and send it from anywhere.
            </p>

            <div className="contact-confirmation__summary">
              <div className="contact-confirmation__row">
                <span className="contact-confirmation__label">From</span>
                <span className="contact-confirmation__value">
                  {submittedSummary.fullName} ({submittedSummary.email})
                </span>
              </div>
              <div className="contact-confirmation__row">
                <span className="contact-confirmation__label">Topics</span>
                <span className="contact-confirmation__value">
                  {submittedSummary.topics}
                </span>
              </div>
              <div className="contact-confirmation__row">
                <span className="contact-confirmation__label">Message</span>
                <p className="contact-confirmation__message">
                  {submittedSummary.message}
                </p>
              </div>
            </div>

            <div className="contact-confirmation__actions">
              <Button
                href={submittedSummary.mailtoHref}
                variant="primary"
                className="contact-form__submit"
              >
                <span>Open email app</span>
                <span className="contact-form__submit-arrow" aria-hidden="true">
                  &rarr;
                </span>
              </Button>

              <button
                type="button"
                onClick={() => copy(submittedSummary.plainText, "summary")}
                className={`contact-confirmation__secondary ${isCopied("summary") ? "contact-confirmation__secondary--copied" : ""}`.trim()}
              >
                {isCopied("summary") ? "Copied!" : "Copy message"}
              </button>

              <button
                type="button"
                onClick={handleEditInquiry}
                className="contact-confirmation__reset"
              >
                Edit details
              </button>
            </div>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="contact-form__fields">
              <div className="contact-form__field">
                <label htmlFor="contact-full-name" className="contact-sr-only">
                  {contactFormCopy.namePlaceholder}
                </label>
                <input
                  id="contact-full-name"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  placeholder={contactFormCopy.namePlaceholder}
                  value={formData.fullName}
                  onChange={handleFieldChange}
                  aria-invalid={Boolean(errors.fullName)}
                  className={`contact-form__input ${errors.fullName ? "contact-form__input--error" : ""}`.trim()}
                  required
                />
                {errors.fullName && (
                  <p className="contact-form__error" role="alert">
                    {errors.fullName}
                  </p>
                )}
              </div>

              <div className="contact-form__row">
                <div className="contact-form__field">
                  <label htmlFor="contact-email" className="contact-sr-only">
                    {contactFormCopy.emailPlaceholder}
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder={contactFormCopy.emailPlaceholder}
                    value={formData.email}
                    onChange={handleFieldChange}
                    aria-invalid={Boolean(errors.email)}
                    className={`contact-form__input ${errors.email ? "contact-form__input--error" : ""}`.trim()}
                    required
                  />
                  {errors.email && (
                    <p className="contact-form__error" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="contact-form__field">
                  <label htmlFor="contact-phone" className="contact-sr-only">
                    {contactFormCopy.phonePlaceholder}
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder={contactFormCopy.phonePlaceholder}
                    value={formData.phone}
                    onChange={handleFieldChange}
                    className="contact-form__input"
                  />
                </div>
              </div>

              <div className="contact-form__field">
                <label htmlFor="contact-company" className="contact-sr-only">
                  {contactFormCopy.companyPlaceholder}
                </label>
                <input
                  id="contact-company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  placeholder={contactFormCopy.companyPlaceholder}
                  value={formData.company}
                  onChange={handleFieldChange}
                  className="contact-form__input"
                />
              </div>
            </div>

            <div className="contact-form__topics-block">
              <span id="contact-topics-label" className="contact-form__label">
                {contactFormCopy.topicsHeading}
              </span>
              <div
                className="contact-form__topics"
                role="group"
                aria-labelledby="contact-topics-label"
              >
                {contactTopicOptions.map((topic) => {
                  const isSelected = selectedTopics.includes(topic);
                  return (
                    <button
                      key={topic}
                      type="button"
                      aria-pressed={isSelected}
                      onClick={() => handleToggleTopic(topic)}
                      className={`contact-topic-pill ${isSelected ? "contact-topic-pill--selected" : ""}`.trim()}
                    >
                      {topic}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="contact-form__field">
              <label htmlFor="contact-message" className="contact-sr-only">
                {contactFormCopy.messagePlaceholder}
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                placeholder={contactFormCopy.messagePlaceholder}
                value={formData.message}
                onChange={handleFieldChange}
                aria-invalid={Boolean(errors.message)}
                className={`contact-form__input contact-form__textarea ${errors.message ? "contact-form__input--error" : ""}`.trim()}
                required
              />
              {errors.message ? (
                <p className="contact-form__error" role="alert">
                  {errors.message}
                </p>
              ) : (
                <p className="contact-form__hint">
                  {contactFormCopy.messageHint}
                </p>
              )}
            </div>

            <div className="contact-form__footer">
              <p className="contact-form__note">{contactFormCopy.privacyNote}</p>

              <button
                type="submit"
                className="btn btn--primary contact-form__submit"
              >
                <span>{contactFormCopy.submitLabel}</span>
                <span className="contact-form__submit-arrow" aria-hidden="true">
                  &rarr;
                </span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default ContactFormCard;
