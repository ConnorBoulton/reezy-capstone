import React, { useEffect, useState } from "react";
import "../App.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../recipes.json";
import axios from "axios";

export default function Recipes() {
  const apiKey = "ecff7ff9007e06d98049e6f333691102";
  const appId = "f81c07f5";
  const [data, setData] = useState([]);

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

  return (
    <div>
      <div className="App">
        <Header />

        <div className="card-box">
          <h1 className="title">{data[1]?.recipe?.label}</h1>
          <span className="image-card">
            <img
              className="user-image"
              src={data[1]?.recipe?.image}
              alt="user-post"
            />
          </span>

          <div className="info-section">
            <span className="info-quantity">
              <img
                alt="quantity"
                src="https://cdn-icons-png.flaticon.com/512/3003/3003655.png"
                className="quantity-img"
              />
              <p>Makes: {data[1]?.recipe?.yield}</p>
            </span>
            <span className="info-time">
              <img
                alt="clock"
                src="https://cdn-icons-png.flaticon.com/512/2088/2088617.png"
                className="clock-img"
              />
              <p>Time: {data[1]?.recipe?.totalTime}</p>
            </span>
          </div>

          <div className="list-items">
            <span className="list-headers">
              <h3>Ingredients</h3>
            </span>
            <span className="list-ingredients">
              <ul>
                {data[1]?.recipe?.ingredients?.map((element, key) => {
                  return <li key={key}>{element.text}</li>;
                })}
              </ul>
            </span>
          </div>

          <div className="instruction-box">
            <span className="instructions">
              <h3>Url</h3>
              <a href={data[1]?.recipe?.url}>{data[1]?.recipe?.url}</a>
            </span>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
