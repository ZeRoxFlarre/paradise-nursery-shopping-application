import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { FaCheck } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";

function PlantCard({ plant, index = 0 }) {
  const { addToCart, cartItems } = useContext(CartContext);
  const [clicked, setClicked] = useState(false);

  const isAdded = cartItems.find((item) => item.name === plant.name);

  const handleAdd = () => {
    addToCart(plant);
    setClicked(true);
    setTimeout(() => setClicked(false), 220);
  };

  return (
    <div
    >
      <span className="sale">SALE</span>

      <img src={plant.image} alt={plant.name} />

      <h3>{plant.name}</h3>
      <p className="price">${plant.price}</p>

      <p className="description">{plant.description}</p>

      <button
     className={`${clicked ? "btn-pulse" : ""}`}
      onClick={handleAdd}
    >
  <>
    <HiOutlineShoppingBag style={{ marginRight: 8 }} /> Add to Cart
  </>
    </button>
    </div>
  );
}

export default PlantCard;