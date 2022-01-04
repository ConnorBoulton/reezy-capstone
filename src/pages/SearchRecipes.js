import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/SearchRecipes.css";
import axios from "axios";

export default function SearchRecipes() {
  const apiKey = "ecff7ff9007e06d98049e6f333691102";
  const appId = "f81c07f5";
  const [searchInput, setSearchInput] = useState("");
  const [data, setData] = useState([]);
  const [searchRes, setSearchRes] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        `https://api.edamam.com/search?q=random&app_id=${appId}&app_key=${apiKey}`
      );
      console.log(request.data.hits);
      setData(request.data.hits);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        `https://api.edamam.com/search?q=${searchRes}&app_id=${appId}&app_key=${apiKey}`
      );
      console.log(request.data);
      setData(request.data.hits);
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
    <div className="searchrecipe-body">
      <Header />

      <span className="find-recipe-box">
        <h2>Find the right recipe for you!</h2>
        <h3>Over 2 million recipes!</h3>

        <span className="search-box-form">
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
      </span>

      <div className="home-body-recipe">
        <div className="spoon-container">
          {data?.map((element, key) => {
            return (
              <span key={key} className="edamam-card">
                <img alt={element.recipe.label} src={element.recipe.image} />
                <a className="edamam-a" href={element.recipe.url}>
                  <h3>{element.recipe.label}</h3>
                </a>
                <span className="edamam-recipe-info">
                  <span className="edamam-cuisine">
                    <h4>Cuisine - {element.recipe.cuisineType[0]}</h4>
                    <h4>{Math.round(element.recipe.calories)} Calories</h4>
                  </span>

                  <span className="edamam-makes">
                    <h5>Makes: {element.recipe.yield}</h5>
                    <h5>Total Time: {element.recipe.totalTime} min</h5>
                  </span>
                </span>
              </span>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
