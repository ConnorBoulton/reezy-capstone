import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../App.css";

export default function AddPage() {
  const handleClick = () => {
    return <input placeholder="Add Ingredient" />;
  };

  return (
    <div>
      <Header />
      <div className="form-box">
        <h1>Create your Recipe!</h1>

        <input className="input title-input" placeholder="Title" />

        <span className="description-box">
          <h3>Description</h3>
          <textarea className="description-textarea"></textarea>
        </span>

        <input className="input" placeholder="Add Image URL" />

        <span className="info-box-a">
          <input placeholder="Makes How Many?" />
          <input placeholder="Total Time" />
        </span>

        <span className="add-ingredient-box">
          <button onClick={handleClick}>Add Ingredient +</button>
          {}
        </span>
      </div>
      <Footer />
    </div>
  );
}
