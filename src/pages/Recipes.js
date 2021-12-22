import React from "react";
import "../App.css";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Recipes() {
  return (
    <div>
      <div className="App">
        <Header />
        <div className="search-box">
          <form>
            <label>Search Your Recipes </label>
            <input placeholder="search"></input>
          </form>

          <button>
            <a href="/add-recipe">Add Recipe +</a>
          </button>
        </div>

        <div className="card-box">
          <h1 className="title">Title Name</h1>

          <span className="description">
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32. The
              standard chunk of Lorem Ipsum used since the 1500s is reproduced
              below for those interested. Sections 1.10.32 and 1.10.33 from "de
              Finibus Bonorum et Malorum" by Cicero are also reproduced in their
              exact original form, accompanied by English versions from the 1914
              translation by H. Rackham.
            </p>
          </span>
          <span className="image-card">
            <img
              className="user-image"
              src="https://www.simplyrecipes.com/thmb/8caxM88NgxZjz-T2aeRW3xjhzBg=/2000x1125/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-8f256746d649404baa36a44d271329bc.jpg"
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
              <p>Makes:</p>
            </span>
            <span className="info-time">
              <img
                alt="clock"
                src="https://cdn-icons-png.flaticon.com/512/2088/2088617.png"
                className="clock-img"
              />
              <p>Time: </p>
            </span>
          </div>

          <div className="list-items">
            <span className="list-headers">
              <h3>Ingredients</h3>
            </span>
            <span className="list-ingredients">
              <ul>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
              </ul>
            </span>
          </div>

          <div className="instruction-box">
            <span className="instructions">
              <h3>Instructions</h3>
            </span>
            <ol>
              <li>
                Cook Ground Beef: Heat a large skillet over medium heat. Add the
                ground beef. Break the beef up with a wooden spoon while
                cooking. Cook the ground beef fully, until browned and no longer
                pink.
              </li>
              <br />
              <li>
                Drain: Drain any excess grease from the skillet. Then return to
                the stove and reduce the heat to low.
              </li>
              <br />
              <li>
                Season: Add the 1/2 cup tomato sauce and taco seasoning. Stir
                together until the meat is coated in the sauce.
              </li>
              <br />
              <li>Simmer: Allow to simmer for 5 minutes.</li>
              <br />
              <li>
                Fry Tortillas: Pour 1/2 cup oil in a medium size skillet, heat
                over medium high heat. Carefully dip a tortilla, if the oil
                sizzles and bubbles then it's hot enough. Gently lay the
                tortilla in the oil and fry each side for about 30 seconds, just
                enough to give some color and add some crispness.
              </li>
            </ol>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
