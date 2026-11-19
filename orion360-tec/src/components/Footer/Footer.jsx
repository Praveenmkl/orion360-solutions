import logo from "../../assets/orion360_logo.png";
import {
  contactDetails,
  exploreLinks,
  serviceLinks,
  socialLinks,
} from "../../data/footerData";
import "./Footer.css";

const SOCIAL_ICONS = {
  linkedin: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6Z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  instagram: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  ),
  facebook: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3Z" />
    </svg>
  ),
  github: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  ),
};

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#home" className="footer__logo-link" aria-label="Orion360 home">
              <img src={logo} alt="Orion360" className="footer__logo" />
            </a>

            <p className="footer__description">
              Transforming ambitious ideas into meaningful digital experiences
              through creativity, innovation, design, and engineering.
            </p>

            <div className="footer__socials">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  className="footer__social-link"
                  aria-label={social.label}
                >
                  {SOCIAL_ICONS[social.id]}
                </a>
              ))}
            </div>
          </div>

          <div className="footer__column">
            <h3 className="footer__heading">Explore</h3>
            <ul className="footer__list">
              {exploreLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="footer__link">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__column">
            <h3 className="footer__heading">Our Services</h3>
            <ul className="footer__list">
              {serviceLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="footer__link">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__column">
            <h3 className="footer__heading">Get in Touch</h3>
            <ul className="footer__list">
              <li>
                <span className="footer__text">{contactDetails.location}</span>
              </li>
              <li>
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="footer__link"
                >
                  {contactDetails.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contactDetails.phone}`}
                  className="footer__link"
                >
                  {contactDetails.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__divider" />

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; 2026 ORION360. All rights reserved.
          </p>
          <p className="footer__tagline">Sri Lankan Origins. Global Horizons.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
