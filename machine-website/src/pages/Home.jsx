import Navbar from "../components/Navbar";
import "./Home.css";

function Home() {
  return (
    <div className="app">
      <Navbar />

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h2>Precision Metal Fabrication</h2>

          <p>
            Tube and metal bending services for industrial and commercial
            clients.
          </p>

          <button>Request a Quote</button>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="services">
        <h2 className="section-title">Our Services</h2>

        <div className="service-container">
          <div className="card">
            <h3>Tube Bending</h3>
            <p>
              High-precision tube bending for custom metal fabrication and
              industrial applications.
            </p>
          </div>

          <div className="card">
            <h3>Metal Bending</h3>
            <p>
              Professional sheet metal bending and fabrication with accurate
              finishing.
            </p>
          </div>

          <div className="card">
            <h3>Custom Fabrication</h3>
            <p>
              Custom industrial metal solutions built with precision and fast
              turnaround times.
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="services">
        <h2 className="section-title">Gallery</h2>

        <div className="service-container">
          <div className="card">
            <h3>Tube Projects</h3>
            <p>Examples of precision tube bending and fabrication work.</p>
          </div>

          <div className="card">
            <h3>Industrial Parts</h3>
            <p>Custom parts and manufacturing solutions for clients.</p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about">
        <div className="about-content">
          <h2>About Our Shop</h2>

          <p>
            We specialize in delivering reliable fabrication and machining
            solutions with precision, quality, and fast turnaround times.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <h2>Contact Us</h2>

        <p>Email: info@oscarcompany.com</p>

        <p>Phone: (713) 555-1234</p>
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

export default Home;
