import "./NavToggle.css";

function NavToggle({ open, onToggle }) {
  return (
    <button
      type="button"
      className={`nav-toggle ${open ? "nav-toggle--open" : ""}`.trim()}
      onClick={onToggle}
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
    >
      <span />
      <span />
      <span />
    </button>
  );
}

export default NavToggle;
