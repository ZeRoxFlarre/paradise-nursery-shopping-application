import snake from "../assets/images/Plant 3.jpg";
import spider from "../assets/images/Plants 2.avif";
import lily from "../assets/images/plants 1.avif";

// (Añade tus imágenes reales aquí)
import aloe from "../assets/images/Plant 4.png";
import fern from "../assets/images/Plant 5.avif";
import rubber from "../assets/images/Plant 6.avif";

export const plantCategories = [
  {
    title: "Air Purifying Plants",
    items: [
      {
        name: "Snake Plant",
        price: 15,
        image: snake,
        description: "Produces oxygen at night."
      },
      {
        name: "Spider Plant",
        price: 12,
        image: spider,
        description: "Filters air pollutants."
      },
      {
        name: "Peace Lily",
        price: 18,
        image: lily,
        description: "Purifies indoor air."
      }
    ]
  },
  {
    title: "Aromatic Plants",
    items: [
      {
        name: "Aloe Vera",
        price: 14,
        image: aloe,
        description: "Soothing plant with natural benefits."
      },
      {
        name: "Boston Fern",
        price: 16,
        image: fern,
        description: "Boosts humidity and freshness."
      }
    ]
  },
  {
    title: "Decorative Plants",
    items: [
      {
        name: "Rubber Plant",
        price: 20,
        image: rubber,
        description: "Bold leaves for a modern look."
      }
    ]
  }
];