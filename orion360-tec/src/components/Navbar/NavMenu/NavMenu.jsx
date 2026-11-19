import { useEffect, useRef, useState } from "react";
import Button from "../../common/Button/Button";
import "./NavMenu.css";

function NavMenu({ items, activeHref, open, onNavigate }) {
  const [openDropdown, setOpenDropdown] = useState(null);
  const menuRef = useRef(null);

  useEffect(() => {
    if (!openDropdown) return undefined;

    const handlePointerDown = (event) => {
      if (!menuRef.current?.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [openDropdown]);

  const handleLinkClick = () => {
    setOpenDropdown(null);
    onNavigate?.();
  };

  const toggleDropdown = (label) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <ul
      ref={menuRef}
      className={`nav-menu ${open ? "nav-menu--open" : ""}`.trim()}
    >
      {items.map((item) => {
        const hasChildren = Boolean(item.children?.length);
        const isDropdownOpen = openDropdown === item.label;
        const isActive =
          activeHref === item.href ||
          (hasChildren &&
            item.children.some((child) => child.href === activeHref));

        if (hasChildren) {
          return (
            <li
              key={item.label}
              className="nav-menu__item nav-menu__item--has-dropdown"
            >
              <button
                type="button"
                className={`nav-menu__link nav-menu__trigger ${isActive ? "nav-menu__link--active" : ""} ${isDropdownOpen ? "nav-menu__trigger--open" : ""}`.trim()}
                aria-expanded={isDropdownOpen}
                aria-haspopup="menu"
                onClick={() => toggleDropdown(item.label)}
              >
                <span>{item.label}</span>
                <svg
                  className="nav-menu__chevron"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              <ul
                className={`nav-dropdown ${isDropdownOpen ? "nav-dropdown--open" : ""}`.trim()}
                role="menu"
                aria-label={`${item.label} submenu`}
              >
                {item.children.map((child) => {
                  const isChildActive = activeHref === child.href;
                  return (
                    <li key={child.href} role="none">
                      <a
                        href={child.href}
                        role="menuitem"
                        aria-current={isChildActive ? "page" : undefined}
                        className={`nav-dropdown__link ${isChildActive ? "nav-dropdown__link--active" : ""}`.trim()}
                        onClick={handleLinkClick}
                      >
                        <span className="nav-dropdown__text">
                          <span className="nav-dropdown__label">
                            {child.label}
                          </span>
                          <span className="nav-dropdown__desc">
                            {child.description}
                          </span>
                        </span>
                        <span className="nav-dropdown__arrow" aria-hidden="true">
                          &rarr;
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        }

        return (
          <li key={item.label} className="nav-menu__item">
            <a
              href={item.href}
              className={`nav-menu__link ${isActive ? "nav-menu__link--active" : ""}`.trim()}
              aria-current={isActive ? "page" : undefined}
              onClick={handleLinkClick}
            >
              {item.label}
            </a>
          </li>
        );
      })}
      <li className="nav-menu__cta">
        <Button href="#contact" onClick={handleLinkClick}>
          LETS TALK
        </Button>
      </li>
    </ul>
  );
}

export default NavMenu;
