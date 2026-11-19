import { useId } from "react";
import Button from "../../components/common/Button/Button";
import worksData from "../../data/worksData";
import "./Works.css";

function WorksOrbitIcon() {
  const uid = useId().replace(/:/g, "");
  const arcGradId = `${uid}-arc`;
  const glowBlurId = `${uid}-glow`;

  return (
    <div className="works__ring" aria-hidden="true">
      <svg
        className="works__ring-svg"
        viewBox="0 0 64 64"
        fill="none"
        overflow="visible"
      >
        <defs>
          <linearGradient
            id={arcGradId}
            gradientUnits="userSpaceOnUse"
            x1="18.23"
            y1="51.66"
            x2="39.42"
            y2="9.17"
          >
            <stop offset="0%" stopColor="#f2d000" stopOpacity="0" />
            <stop offset="35%" stopColor="#f2d000" stopOpacity="0.55" />
            <stop offset="72%" stopColor="#ffe01b" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#fff5ad" stopOpacity="1" />
          </linearGradient>

          <filter
            id={glowBlurId}
            x="-45%"
            y="-45%"
            width="190%"
            height="190%"
            colorInterpolationFilters="sRGB"
          >
            <feGaussianBlur stdDeviation="2.6" />
          </filter>
        </defs>

        <circle
          cx="32"
          cy="32"
          r="24"
          stroke="rgba(242, 208, 0, 0.16)"
          strokeWidth="1.1"
        />

        <path
          d="M 18.23 51.66 A 24 24 0 0 1 39.42 9.17"
          stroke={`url(#${arcGradId})`}
          strokeWidth="4.2"
          strokeLinecap="round"
          strokeOpacity="0.82"
          filter={`url(#${glowBlurId})`}
        />

        <path
          d="M 18.23 51.66 A 24 24 0 0 1 39.42 9.17"
          stroke={`url(#${arcGradId})`}
          strokeWidth="2.1"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

function Works() {
  return (
    <main>
      <section id="works" className="works" aria-labelledby="works-title">
        <div className="works__content">
          <WorksOrbitIcon />

          <span className="works__eyebrow">{worksData.eyebrow}</span>

          <h1 id="works-title" className="works__title">
            {worksData.title}
          </h1>

          <p className="works__description">{worksData.description}</p>

          <div className="works__actions">
            <Button
              href={worksData.ctaHref}
              variant="primary"
              className="works__back-btn"
            >
              <span className="works__back-arrow" aria-hidden="true">
                &larr;
              </span>
              <span>{worksData.ctaLabel}</span>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Works;
