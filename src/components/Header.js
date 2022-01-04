import React from "react";
import "../App.css";

export default function Header() {
  return (
    <div>
      <header>
        <span>
          <h1 className="reezy-title">Reezy Recipes</h1>
          <img
            src="https://cdn-icons-png.flaticon.com/512/188/188333.png"
            alt="leaf"
            width="50px"
            height="50px"
          />
        </span>
        <nav className="header-nav">
          <a href="/">Home</a> |<a href="/recipes">Recipes </a>|
          <a href="/about">About</a>
        </nav>
      </header>
    </div>
  );
}
