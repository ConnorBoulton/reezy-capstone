import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../App.css";
import "../styles/AddPage.css";

export default function AddPage() {
  const [ingredientList, setIngredientList] = useState([{ ingredient: "" }]);
  const [instructions, setInstructions] = useState([{ instruction: "" }]);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...ingredientList];
    list[index][name] = value;
    setIngredientList(list);
    console.log(ingredientList);
  };

  const handleRemoveClick = (e) => {
    const list = [...ingredientList];
    list.splice(e, 1);
    setIngredientList(list);
  };

  const handleRemoveInstructions = (e) => {
    const list = [...instructions];
    list.splice(e, 1);
    setInstructions(list);
  };

  const handleAddClick = (e) => {
    setIngredientList([...ingredientList, { ingredient: "" }]);
  };

  const handleInputInstructions = (e, index) => {
    const { name, value } = e.target;
    const list = [...instructions];
    list[index][name] = value;
    setInstructions(list);
  };

  const handleAddInstructions = (e) => {
    setInstructions([...instructions, { instruction: "" }]);
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
          <button onClick={handleAddClick}>Add Ingredient +</button>
          {ingredientList.map((e, i) => {
            return (
              <div className="ingredient-box">
                <input
                  placeholder="Ingredient Name"
                  onChange={(e) => handleInputChange(e, i)}
                  name="ingredient"
                  value={e.ingredient}
                />
                <div>
                  {ingredientList.length !== 1 && (
                    <button
                      className="trash-btn"
                      onClick={() => handleRemoveClick(i)}
                    >
                      <img
                        src="https://cdn-icons.flaticon.com/png/512/3687/premium/3687412.png?token=exp=1640833513~hmac=3f3287fa476cb18609236bead0293a85"
                        alt="delete"
                        width="20px"
                        height="25px"
                      />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </span>

        <span className="add-ingredient-box">
          <button onClick={handleAddInstructions}>Add Instructions +</button>
          {instructions.map((e, i) => {
            return (
              <div className="ingredient-box">
                <input
                  placeholder="Instructions"
                  onChange={(e) => handleInputInstructions(e, i)}
                  name="instructions"
                  value={e.instructions}
                />
                <div>
                  {instructions.length !== 1 && (
                    <button
                      className="trash-btn"
                      onClick={() => handleRemoveInstructions(i)}
                    >
                      <img
                        src="https://cdn-icons.flaticon.com/png/512/3687/premium/3687412.png?token=exp=1640833513~hmac=3f3287fa476cb18609236bead0293a85"
                        alt="delete"
                        width="20px"
                        height="25px"
                      />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </span>

        <span className="submit-btn-box">
          <button className="submit-btn">Submit</button>
        </span>
      </div>
      <Footer />
    </div>
  );
}
