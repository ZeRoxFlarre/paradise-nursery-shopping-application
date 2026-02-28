import "../styles/Navbar.css";
import { useContext, useEffect, useRef, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate, useLocation } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { GiPlantSeed } from "react-icons/gi";

function Navbar() {
  const { totalItems } = useContext(CartContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [animateCart, setAnimateCart] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [titleAnim, setTitleAnim] = useState(false);

  const prevTotalRef = useRef(0);

  // Cart animation when items increase
  useEffect(() => {
    if (totalItems > prevTotalRef.current) {
      setAnimateCart(true);
      const timer = setTimeout(() => setAnimateCart(false), 450);
      return () => clearTimeout(timer);
    }
    prevTotalRef.current = totalItems;
  }, [totalItems]);

  // Navbar scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Title change animation
  useEffect(() => {
    setTitleAnim(true);
    const t = setTimeout(() => setTitleAnim(false), 220);
    return () => clearTimeout(t);
  }, [location.pathname]);

  const title =
    location.pathname === "/cart"
      ? "Shopping Cart"
      : location.pathname === "/"
      ? "Welcome"
      : "Plants";

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      {/* LOGO */}
      <div className="logo" onClick={() => navigate("/plants")} role="button" tabIndex={0}>
        <GiPlantSeed className="logo-icon" />
        <div>
          <h2>Paradise Nursery</h2>
          <p>Where Green Meets Serenity</p>
        </div>
      </div>

      {/* TITLE */}
      <h2 className={`plants-title ${titleAnim ? "title-pop" : ""}`}>
        {title}
      </h2>

      {/* CART */}
      <button
        className={`cart ${animateCart ? "bounce" : ""}`}
        onClick={() => navigate("/cart")}
        aria-label="Go to cart"
      >
        <FaShoppingCart />
        {totalItems > 0 && (
          <span className={`cart-count ${animateCart ? "badge-pop" : ""}`}>
            {totalItems}
          </span>
        )}
      </button>
    </nav>
  );
}

export default Navbar;