import "./About.css";

function About() {
  return (
    <div className="about-page">
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

      <section className="about-hero">
        <h1>About Our Shop</h1>
        <p>
          Precision metal fabrication and tube bending services built around
          quality, reliability, and customer satisfaction.
        </p>
      </section>

      <section className="about-section">
        <div className="about-content">
          <h2>Who We Are</h2>
          <p>
            A&V Precise Manufacturing provides dependable fabrication services
            for industrial and commercial projects. We focus on clean work,
            accurate results, and practical solutions for every customer.
          </p>
        </div>

        <div className="about-content">
          <h2>What We Do</h2>
          <p>
            Our work includes tube bending, metal bending, welding, custom
            fabrication, and manufacturing support for businesses that need
            strong and precise metal solutions.
          </p>
        </div>
      </section>

      <section className="values-section">
        <h2>Our Values</h2>

        <div className="values-grid">
          <div className="value-card">
            <h3>Precision</h3>
            <p>We aim for accurate, consistent, and clean fabrication work.</p>
          </div>

          <div className="value-card">
            <h3>Quality</h3>
            <p>Every project is handled with care and attention to detail.</p>
          </div>

          <div className="value-card">
            <h3>Reliability</h3>
            <p>We work hard to complete projects efficiently and professionally.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>
          Powered by <span>Markefy Solutions</span>
        </p>
      </footer>
    </div>
  );
}

export default About;