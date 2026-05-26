import Navbar from "../components/Navbar";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">
      <Navbar />

      {/* HERO */}
      <section className="contact-hero">
        <h1>Contact Us</h1>

        <p>
          Need a quote or have questions about our fabrication services? We are
          ready to help.
        </p>
      </section>

      {/* CONTACT INFO */}
      <section className="contact-info">
        <div className="info-card">
          <h3>Phone</h3>
          <p>(713) 555-1234</p>
        </div>

        <div className="info-card">
          <h3>Email</h3>
          <p>info@avprecisemanufacturing.com</p>
        </div>

        <div className="info-card">
          <h3>Location</h3>
          <p>Houston, Texas</p>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="contact-form-section">
        <h2>Request a Quote</h2>

        <form className="contact-form">
          <input type="text" placeholder="Full Name" />

          <input type="email" placeholder="Email Address" />

          <input type="text" placeholder="Phone Number" />

          <textarea
            placeholder="Tell us about your project..."
            rows="6"
          ></textarea>

          <button type="submit">Send Request</button>
        </form>
      </section>

      {/* BUSINESS HOURS */}
      <section className="hours-section">
        <h2>Business Hours</h2>

        <p>Monday - Friday: 8:00 AM - 5:00 PM</p>

        <p>Saturday: By Appointment</p>

        <p>Sunday: Closed</p>
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

export default Contact;
