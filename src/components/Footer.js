import React from "react";
import "../App.css";

export default function Footer() {
  return (
    <div>
      <footer>
        <span className="footer-header">
          <h3>Reezy Recipes</h3>
          <p>By Connor Boulton</p>
        </span>
        <nav className="footer-nav">
          <a href="/">Home</a> |<a href="/recipes">Recipes</a> |
          <a href="/about">About</a>
        </nav>
      </footer>
    </div>
  );
}
