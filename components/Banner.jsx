export default function Banner({ text }) {
  return (
    <div className="banner">
      <div className="container banner-inner">
        <span className="dots" aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
        </span>
        <p>{text}</p>
      </div>
    </div>
  );
}
