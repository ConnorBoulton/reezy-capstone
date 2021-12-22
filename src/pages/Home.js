import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../Home.css";
import axios from "axios";

export default function Home() {
  const apiKey = "9896a5171de44a7cb24a8987a66433e5";
  const [searchInput, setSearchInput] = useState("");
  const [data, setData] = useState([]);
  const [searchRes, setSearchRes] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?query=${searchRes}&apiKey=${apiKey}`
      );
      console.log(request.data);
      setData(request.data.results);
    }
    fetchData();
  }, [searchRes]);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleClick = () => {
    setSearchRes(searchInput);
    setSearchInput("");
  };

  return (
    <div>
      <Header />
      <div className="home-body">
        <h1>Welcome to Reezy Recipes!</h1>

        <span>
          <input
            className="search-input-home"
            placeholder="Search Recipes!"
            value={searchInput}
            onChange={handleChange}
          />
          <button className="search-button-home" onClick={handleClick}>
            Submit
          </button>
        </span>

        <div className="spoon-container">
          {data?.map((element, key) => {
            return (
              <span key={key} className="spoon-card">
                <img alt="" src={element.image} />
                <h3>{element.title}</h3>
              </span>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
