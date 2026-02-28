import "../styles/AboutPage.css";
import Navbar from "../components/Navbar";

function AboutPage() {
  return (
    <>
      <Navbar />

      <div className="about-container">
        <div className="about-hero">
          <h1>About Paradise Nursery</h1>
          <p>
            Bringing nature closer to your everyday life.
          </p>
        </div>

        <div className="about-content">
          <div className="about-section">
            <h2>🌿 Our Mission</h2>
            <p>
              At Paradise Nursery, our mission is to provide high-quality,
              carefully selected plants that enhance your space and promote
              a healthier, greener lifestyle.
            </p>
          </div>

          <div className="about-section">
            <h2>🌎 Sustainability</h2>
            <p>
              We are committed to sustainable practices, responsible sourcing,
              and supporting eco-conscious living. Every plant we offer is
              selected with care for both you and the environment.
            </p>
          </div>

          <div className="about-section">
            <h2>💚 Why Choose Us</h2>
            <ul>
              <li>Premium quality indoor plants</li>
              <li>Modern and clean shopping experience</li>
              <li>Secure and intuitive cart system</li>
              <li>Built with performance and simplicity in mind</li>
            </ul>
          </div>
        </div>

        <div className="about-footer">
          <p>
            Made with passion for design and development.
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutPage;