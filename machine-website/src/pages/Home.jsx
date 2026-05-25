import "./Home.css";

function App() {
  return (
    <div className="app">
      {/* NAVBAR */}
      <header className="navbar">
        <h1 className="logo">Aqui va el nombre del negocio Oscar</h1>

        <nav>
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h2>Precision Metal Fabrication</h2>

          <p>
            Metal bending, and fabrication services for industrial and
            commercial clients.
          </p>

          <button>Request a Quote</button>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services">
        <h2 className="section-title">Our Services</h2>

        <div className="service-container">
          <div className="card">
            <h3>CNC Machining</h3>

            <p>
              High precision machining for custom parts and industrial
              components.
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
            <h3>Welding</h3>

            <p>
              MIG and TIG welding solutions for commercial and industrial
              projects.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about">
        <div className="about-content">
          <h2>About Our Shop</h2>

          <p>
            We specialize in delivering reliable fabrication and machining
            solutions with precision, quality, and fast turnaround times.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact">
        <h2>Contact Us</h2>

        <p>Email: info@oscarcompany.com</p>

        <p>Phone: (713) 555-1234</p>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>
          Powered by <span>A&R Software Solutions</span>
        </p>
      </footer>
    </div>
  );
}

export default App;
