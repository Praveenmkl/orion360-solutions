import useSpotlight from "../../../hooks/useSpotlight";
import "./ServiceCard.css";

function ServiceCard({ service }) {
  const cardRef = useSpotlight();
  const { id, title, href, description, icon } = service;

  return (
    <article ref={cardRef} id={id} className="service-card">
      <div className="service-card__spotlight" aria-hidden="true" />

      <div className="service-card__inner">
        <div className="service-card__top">
          <div className="service-card__icon-badge">
            <img
              src={icon}
              alt=""
              className="service-card__icon"
              aria-hidden="true"
            />
          </div>
        </div>

        <h3 className="service-card__title">{title}</h3>
        <p className="service-card__description">{description}</p>

        <a
          href={href}
          className="service-card__link"
          aria-label={`Explore Service — ${title}`}
        >
          <span aria-hidden="true">Explore Service</span>
          <span className="service-card__link-arrow" aria-hidden="true">
            &rarr;
          </span>
        </a>
      </div>
    </article>
  );
}

export default ServiceCard;
