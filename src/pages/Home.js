import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../Home.css";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="body">
        <div className="home-body">
          <span className="welcome-section">
            <h1>Welcome to Reezy Recipes!</h1>
            <h4>A web application that allows you to search for any recipe!</h4>
          </span>

          <span className="recipe-btn-container">
            <a href="/recipes">
              <button>Start Searching</button>
            </a>
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
}
