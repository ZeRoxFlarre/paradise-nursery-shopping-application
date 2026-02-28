import Navbar from "../components/Navbar";
import PlantCard from "../components/PlantCard";
import "../styles/PlantsPage.css";
import { plantCategories } from "../data/plants";
import Reveal from "../components/Reveal";

function PlantsPage() {
  return (
    <>
      <Navbar />

      <div className="plants-container">
        {plantCategories.map((category) => (
          <section key={category.title} className="category-section">
            <h1>{category.title}</h1>

            <div className="plants-grid">
            {category.items.map((plant, index) => (
     <Reveal key={plant.name} delay={index * 80}>
     <div className="plant-card">
       <PlantCard plant={plant} />
     </div>
   </Reveal>
        ) )}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}

export default PlantsPage;