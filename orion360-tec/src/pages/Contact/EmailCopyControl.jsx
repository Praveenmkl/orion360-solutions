function EmailCopyControl({ email, copied, onCopy, variant = "hero" }) {
  return (
    <div className={`contact-email contact-email--${variant}`}>
      <a href={`mailto:${email}`} className="contact-email__link">
        {email}
      </a>

      <button
        type="button"
        onClick={onCopy}
        className={`contact-email__copy ${copied ? "contact-email__copy--copied" : ""}`.trim()}
        aria-label={copied ? "Email address copied" : `Copy email address ${email}`}
      >
        {copied ? (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.1"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        ) : (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
          </svg>
        )}
        <span>{copied ? "Copied" : "Copy"}</span>
      </button>
    </div>
  );
}

export default EmailCopyControl;
