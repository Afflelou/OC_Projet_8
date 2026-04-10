import React from 'react';
import { useEffect, useState } from "react";
import Banner from '../components/banner/banner';
import Cards from '../components/cards/cards';
import axios from "axios";
import mainImg from "../assets/kasa-main.png";

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
    <div className="home">
      <Banner imgSrc={mainImg} title="Chez vous, partout ailleurs" />
      <Cards properties={properties} />
    </div>
  );
}

export default Home;
