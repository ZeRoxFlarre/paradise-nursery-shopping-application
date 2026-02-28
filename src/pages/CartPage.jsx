import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import "../styles/CartPage.css";

function CartPage() {
  const {
    cartItems,
    increaseQty,
    decreaseQty,
    removeFromCart,
    clearCart,
    totalCost,
    totalItems,
  } = useContext(CartContext);

  const navigate = useNavigate();

  const handleCheckout = () => {
    alert("✅ Checkout complete! Thanks for shopping at Paradise Nursery.");
    clearCart();
    navigate("/plants");
  };

  return (
    <>
      <Navbar />

      <div className="cart-page">
        <h1>Your Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty.</p>
            <button onClick={() => navigate("/plants")}>Continue Shopping</button>
          </div>
        ) : (
          <div className="cart-layout">
            <div className="cart-items">
              {cartItems.map((item) => (
                <div className="cart-item" key={item.name}>
                  <img src={item.image} alt={item.name} />

                  <div className="cart-info">
                    <h3>{item.name}</h3>
                    <p className="cart-price">${item.price}</p>
                    <p className="cart-desc">{item.description}</p>

                    <div className="cart-controls">
                      <button onClick={() => decreaseQty(item.name)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => increaseQty(item.name)}>+</button>

                      <button
                        className="remove"
                        onClick={() => removeFromCart(item.name)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>

                  <div className="cart-subtotal">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h2>Summary</h2>

              <div className="summary-row">
                <span>Items</span>
                <span>{totalItems}</span>
              </div>

              <div className="summary-row total">
                <span>Total</span>
                <span>${totalCost.toFixed(2)}</span>
              </div>

              <button className="checkout" onClick={handleCheckout}>
                Checkout
              </button>

              <button className="clear" onClick={clearCart}>
                Clear Cart
              </button>

              <button className="continue" onClick={() => navigate("/plants")}>
                Continue Shopping
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default CartPage;