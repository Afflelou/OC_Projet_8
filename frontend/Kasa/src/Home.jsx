import mainImg from "./assets/kasa-main.png";
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/properties");
        setProperties(response.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };
    fetchProperties();
  }, []);
  return (
    <div>
      <section>
        <h1>Chez vous, partout ailleurs</h1>
        <img src={mainImg} alt="Kasa Main" />
      </section>
      <div>
        {properties.map((property) => (
          <div key={property.id}>
            <h2>{property.title}</h2>
            <img src={property.cover} alt={property.title} width="300" />
            <p>{property.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
