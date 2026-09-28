export default function Footer({ dict }) {
  return (
    <footer>
      <div className="container footer-inner">
        <span className="dots" aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
        </span>
        <p>{dict.footer}</p>
      </div>
    </footer>
  );
}
