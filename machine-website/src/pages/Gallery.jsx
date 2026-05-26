import "./Gallery.css";

function Gallery() {
  return (
    <div className="gallery-page">
      {/* NAVBAR */}
      <header className="navbar">
        <h1 className="logo">A&V Precise Manufacturing</h1>

        <nav className="nav-links">
          <a href="#/">Home</a>
          <a href="#/services">Services</a>
          <a href="#/gallery">Gallery</a>
          <a href="#/about">About</a>
          <a href="#/contact">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="gallery-hero">
        <h1>Our Work</h1>

        <p>
          A look at our tube bending, metal fabrication, and custom
          manufacturing projects.
        </p>
      </section>

      {/* GALLERY */}
      <section className="gallery-section">
        <h2>Project Categories</h2>

        <div className="gallery-grid">
          <div className="gallery-card">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop"
              alt="Metal bending"
            />
            <h3>Metal Bending</h3>
            <p>Accurate bending for sheet metal, brackets, and custom parts.</p>
          </div>

          <div className="gallery-card">
            <img
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop"
              alt="Tube bending"
            />
            <h3>Tube Bending</h3>
            <p>Precision tube bending for industrial and commercial needs.</p>
          </div>

          <div className="gallery-card">
            <img
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop"
              alt="Industrial work"
            />
            <h3>Industrial Work</h3>
            <p>
              Reliable fabrication services for heavy-duty industrial projects.
            </p>
          </div>

          <div className="gallery-card">
            <img
              src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=800&auto=format&fit=crop"
              alt="Commercial work"
            />
            <h3>Commercial Work</h3>
            <p>
              Metal solutions for commercial buildings, shops, and facilities.
            </p>
          </div>

          <div className="gallery-card">
            <img
              src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=800&auto=format&fit=crop"
              alt="Custom fabrication"
            />
            <h3>Custom Fabrication</h3>
            <p>Custom-made metal parts built to match project requirements.</p>
          </div>

          <div className="gallery-card">
            <img
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop"
              alt="Welding services"
            />
            <h3>Welding Services</h3>
            <p>Strong and clean welding for fabrication and repair work.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>
          Powered by <span>Markefy Solutions</span>
        </p>
      </footer>
    </div>
  );
}

export default Gallery;
