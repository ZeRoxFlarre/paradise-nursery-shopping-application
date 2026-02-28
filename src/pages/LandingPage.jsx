import { useNavigate } from "react-router-dom";
import "../styles/LandingPage.css";
import nursery from "../assets/images/plants-corner-wall-mural.jpg";

function LandingPage() {
  const navigate = useNavigate();

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 2 - 1;  // -1..1
    const y = ((e.clientY - top) / height) * 2 - 1;  // -1..1

    e.currentTarget.style.setProperty("--mx", x.toFixed(3));
    e.currentTarget.style.setProperty("--my", y.toFixed(3));
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.setProperty("--mx", "0");
    e.currentTarget.style.setProperty("--my", "0");
  };

  return (
    <div
      className="landing"
      style={{ backgroundImage: `url(${nursery})` }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="landing-overlay">
        <div className="landing-content">
          <div className="landing-left">
            <h1 className="landing-title">Welcome To Paradise Nursery</h1>
            <p className="landing-subtitle">Where Green Meets Serenity</p>

            <div className="landing-actions">
              <button className="landing-btn" onClick={() => navigate("/plants")}>
                Get Started
              </button>
            </div>
          </div>

          <div className="landing-right">
            <div className="landing-card">
              <h3>Welcome to Paradise Nursery, where green meets serenity!</h3>

              <p>
                At Paradise Nursery, we’re passionate about bringing nature closer to you.
                Our mission is to offer high-quality plants that elevate your space and
                support a healthier lifestyle.
              </p>

              <p>
                Whether you’re a seasoned plant parent or just starting out, we’ll help you
                find the perfect plant for your home or office.
              </p>
            </div>
          </div>
        </div>

        <div className="landing-footer">
        <div className="landing-footer">
  <span>
    © {new Date().getFullYear()} Paradise Nursery · 
    <strong className="signature"> Made by Miguel A. Quiñones Alemán</strong>
  </span>
</div>
</div>
      </div>
    </div>
  );
}

export default LandingPage;