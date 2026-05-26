import Navbar from "../components/Navbar";
import "./Services.css";

function Services() {
  return (
    <div className="services-page">
      <Navbar />

      <section className="services-hero">
        <h1>Precision Fabrication Services</h1>
        <p>
          High-quality tube bending, metal fabrication, and custom manufacturing
          solutions for industrial and commercial clients.
        </p>
      </section>

      <section className="services-section">
        <h2>What We Offer</h2>

        <div className="services-grid">
          <div className="service-card">
            <h3>Tube Bending</h3>
            <p>
              Precision tube bending for frames, supports, railings, and custom
              metal components.
            </p>
          </div>

          <div className="service-card">
            <h3>Metal Bending</h3>
            <p>
              Accurate sheet metal forming and fabrication with clean finishes
              and reliable results.
            </p>
          </div>

          <div className="service-card">
            <h3>CNC Machining</h3>
            <p>
              Custom machining for metal parts, prototypes, and production
              manufacturing.
            </p>
          </div>

          <div className="service-card">
            <h3>Welding & Fabrication</h3>
            <p>
              Strong welding and fabrication services for commercial and
              industrial projects.
            </p>
          </div>

          <div className="service-card">
            <h3>Industrial Manufacturing</h3>
            <p>
              Dependable manufacturing support for industrial equipment,
              structures, and production needs.
            </p>
          </div>

          <div className="service-card">
            <h3>Commercial Fabrication</h3>
            <p>
              Custom metal solutions for businesses, shops, facilities, and
              commercial installations.
            </p>
          </div>
        </div>
      </section>

      <section className="why-section">
        <h2>Why Choose Us?</h2>

        <div className="why-grid">
          <div>
            <h3>Precision Work</h3>
            <p>We focus on clean, accurate, and consistent fabrication.</p>
          </div>

          <div>
            <h3>Fast Turnaround</h3>
            <p>We work efficiently to help keep your projects moving.</p>
          </div>

          <div>
            <h3>Custom Solutions</h3>
            <p>We build around your project needs and specifications.</p>
          </div>
        </div>
      </section>

      <section className="process-section">
        <h2>Our Process</h2>

        <div className="process-grid">
          <div className="process-step">
            <span>1</span>
            <h3>Request a Quote</h3>
            <p>Send us your project details, drawings, or requirements.</p>
          </div>

          <div className="process-step">
            <span>2</span>
            <h3>Fabrication</h3>
            <p>We produce the work using precise fabrication methods.</p>
          </div>

          <div className="process-step">
            <span>3</span>
            <h3>Completion</h3>
            <p>Your finished parts or project are completed and ready.</p>
          </div>
        </div>
      </section>

      <section className="quote-section">
        <h2>Have a Project in Mind?</h2>
        <p>Contact us today to discuss your fabrication needs.</p>
        <a href="#/contact">Request a Quote</a>
      </section>

      <footer className="footer">
        <p>
          Powered by <span>Markefy Solutions</span>
        </p>
      </footer>
    </div>
  );
}

export default Services;
