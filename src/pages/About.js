import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/About.css";

export default function About() {
  return (
    <>
      <Header />
      <div className="about-body">
        <div className="about-box">
          <h1>About</h1>
        </div>
        <span className="description">
          <h2>Capstone Project</h2>
          <p>
            Officia nisi in Lorem elit cillum qui. In reprehenderit elit sunt ex
            Lorem laborum duis. Veniam est pariatur nulla cupidatat labore
            reprehenderit. Ut exercitation deserunt elit nulla ullamco consequat
            ex sint proident sint pariatur. Quis ullamco cupidatat laborum quis
            id consectetur. Adipisicing pariatur dolore cillum qui magna in
            Lorem dolore ipsum aliqua. Reprehenderit esse Lorem quis excepteur
            sit reprehenderit dolor ullamco.
            <br />
            Officia nisi in Lorem elit cillum qui. In reprehenderit elit sunt ex
            Lorem laborum duis. Veniam est pariatur nulla cupidatat labore
            reprehenderit. Ut exercitation deserunt elit nulla ullamco consequat
            ex sint proident sint pariatur. Quis ullamco cupidatat laborum quis
            id consectetur. Adipisicing pariatur dolore cillum qui magna in
            Lorem dolore ipsum aliqua. Reprehenderit esse Lorem quis excepteur
            sit reprehenderit dolor ullamco.
          </p>
        </span>
      </div>
      <Footer />
    </>
  );
}
