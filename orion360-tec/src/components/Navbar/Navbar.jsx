import { useEffect, useState } from "react";
import Button from "../common/Button/Button";
import NavLogo from "./NavLogo/NavLogo";
import NavMenu from "./NavMenu/NavMenu";
import NavToggle from "./NavToggle/NavToggle";
import navItems from "../../data/navItems";
import "./Navbar.css";

function Navbar({ activeHref = "#home" }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let rafId = 0;

    const updateOnScroll = () => {
      rafId = 0;
      const scrollY = window.scrollY;
      const hero = document.getElementById("home");
      if (hero) {
        const heroBottom = hero.getBoundingClientRect().bottom;
        setScrolled((prev) => (prev ? heroBottom <= 180 : heroBottom <= 140));
      } else {
        setScrolled(scrollY > window.innerHeight * 0.75);
      }
    };

    const handleScroll = () => {
      if (!rafId) {
        rafId = window.requestAnimationFrame(updateOnScroll);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    updateOnScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeHref]);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`.trim()}>
      <nav className="navbar__inner" aria-label="Main navigation">
        <NavLogo />
        <NavMenu
          items={navItems}
          activeHref={activeHref}
          open={menuOpen}
          onNavigate={() => setMenuOpen(false)}
        />
        <Button href="#contact" className="navbar__cta">
          LETS TALK
        </Button>
        <NavToggle open={menuOpen} onToggle={() => setMenuOpen((v) => !v)} />
      </nav>
    </header>
  );
}

export default Navbar;
