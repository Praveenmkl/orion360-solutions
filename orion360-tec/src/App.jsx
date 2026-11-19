import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Works from "./pages/Works/Works";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import ServiceDetail from "./pages/ServiceDetail/ServiceDetail";
import Footer from "./components/Footer/Footer";
import servicePagesData from "./data/servicePagesData";

const HOME_TITLE =
  "Orion360 | Where Digital Creativity Meets Engineering Excellence";
const WORKS_TITLE = "Orion360 | Our Work";
const ABOUT_TITLE = "Orion360 | About";
const CONTACT_TITLE = "Orion360 | Contact";

function getInitialHash() {
  if (typeof window === "undefined") return "";
  if (!window.location.hash) {
    const path = window.location.pathname.replace(/\/+$/, "");
    if (path === "/works") return "#works";
    if (path === "/about") return "#about";
    if (path === "/contact") return "#contact";
    if (path.startsWith("/services/")) {
      return `#${path.slice(1)}`;
    }
  }
  return window.location.hash;
}

function getServiceFromHash(hash) {
  if (!hash.startsWith("#services/")) return null;
  const slug = hash.slice("#services/".length);
  return servicePagesData[slug] || null;
}

function App() {
  const [hash, setHash] = useState(getInitialHash);
  const activeService = getServiceFromHash(hash);
  const isWorksPage = hash === "#works";
  const isAboutPage = hash === "#about";
  const isContactPage = hash === "#contact";
  const isDedicatedPage =
    isWorksPage || isAboutPage || isContactPage || Boolean(activeService);

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    if (activeService) {
      document.title = activeService.pageTitle;
    } else if (isWorksPage) {
      document.title = WORKS_TITLE;
    } else if (isAboutPage) {
      document.title = ABOUT_TITLE;
    } else if (isContactPage) {
      document.title = CONTACT_TITLE;
    } else {
      document.title = HOME_TITLE;
    }
  }, [activeService, isWorksPage, isAboutPage, isContactPage]);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const behavior = reducedMotion ? "auto" : "smooth";

    if (isDedicatedPage) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      return undefined;
    }

    if (hash && hash !== "#home") {
      const targetId = hash.slice(1);
      const frameId = window.requestAnimationFrame(() => {
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior });
        }
      });
      return () => window.cancelAnimationFrame(frameId);
    }

    if (hash === "#home") {
      window.scrollTo({ top: 0, left: 0, behavior });
    }

    return undefined;
  }, [hash, isDedicatedPage]);

  const activeHref = activeService
    ? `#services/${activeService.slug}`
    : isWorksPage
      ? "#works"
      : isAboutPage
        ? "#about"
        : isContactPage
          ? "#contact"
          : "#home";

  return (
    <>
      <Navbar activeHref={activeHref} />
      {activeService ? (
        <ServiceDetail key={activeService.slug} service={activeService} />
      ) : isWorksPage ? (
        <Works />
      ) : isAboutPage ? (
        <About />
      ) : isContactPage ? (
        <Contact />
      ) : (
        <Home />
      )}
      <Footer />
    </>
  );
}

export default App;
