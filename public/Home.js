import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import About from "../components/About";
import "../Home.css";
import axios from "axios";
import Card from "../components/Card";

export default function Home() {
  const apiKey = "ecff7ff9007e06d98049e6f333691102";
  const appId = "f81c07f5";
  const [searchInput, setSearchInput] = useState("");
  const [data, setData] = useState([]);
  const [searchRes, setSearchRes] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        `https://api.edamam.com/search?q=tacos&app_id=${appId}&app_key=${apiKey}`
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
    <div>
      <Header />

      <span className="find-recipe-box">
        <h2>Find the right recipe for you!</h2>
        <h3>Over 2 million recipes!</h3>
      </span>
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
          {/* <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card /> */}

          {data?.map((element, key) => {
            return (
              <div>
                <span className="spoon-card">
                  <img alt="food" src={element.recipe.image} />

                  <a key={key} className="spoon-card" href={element.recipe.url}>
                    <button>{element.recipe.label}</button>
                    <h2>Hello</h2>
                  </a>
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <About />

      <Footer />
    </div>
  );
}
