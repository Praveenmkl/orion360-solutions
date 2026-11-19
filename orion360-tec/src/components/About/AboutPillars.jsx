import aboutData from "../../data/aboutData";
import "./About.css";

const ABOUT_ICONS = {
  story: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2 5.5c3.3-.7 6.7-.1 10 2 3.3-2.1 6.7-2.7 10-2V18c-3.3-.7-6.7-.1-10 2-3.3-2.1-6.7-2.7-10-2V5.5Z" />
      <path d="M12 7.5V20" />
    </svg>
  ),
  vision: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2 12s3.8-6.5 10-6.5S22 12 22 12s-3.8 6.5-10 6.5S2 12 2 12Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  mission: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9.5" />
      <circle cx="12" cy="12" r="5.5" />
      <circle cx="12" cy="12" r="1.8" />
    </svg>
  ),
};

function AboutPillars({ revealClass = "", baseIndex = 1 }) {
  return (
    <div className="about__grid">
      {aboutData.map((item, index) => (
        <article
          key={item.id}
          className={`about__item ${revealClass}`.trim()}
          style={{ "--reveal-index": index + baseIndex }}
        >
          <div className="about__icon">{ABOUT_ICONS[item.id]}</div>
          <h3 className="about__item-title">{item.title}</h3>
          <p className="about__item-description">{item.description}</p>
        </article>
      ))}
    </div>
  );
}

export default AboutPillars;

