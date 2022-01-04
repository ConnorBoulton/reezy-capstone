import React from "react";
import Header from "./Header";
import "../styles/About.css";
import Footer from "./Footer";

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
            This is a project that I have been wanting to create for a while,
            and there is no better time than during my DevMountain capstone
            project! I've worked in many restaraunt kitchens across the Utah
            valley, and have a always wanted an application that would store my
            personal recipes. Not just some notebook or google document. So I
            decided to create Reezy Recipes! A very simple app to help organize,
            maintain, and store your recipes.
            <br />
            <br />
            During my time at DevMountain, i've learned to create a full stack
            application with a variety of methods and languages. For this
            project I decide to use React for the front end, Express as the
            server, and deployed with Heroku.
          </p>
        </span>
      </div>
      <Footer />
    </>
  );
}
