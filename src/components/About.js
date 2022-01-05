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
            <br />
            Before I came to DevMountain, I worked in the culinary industry
            across four different restaurants in the Salt Lake valley and
            graduated from culinary school at the Park City Culinary Institute.
            After taking a long hard look at where my future was headed in terms
            of financial security and sanity, I decided to leave the culinary
            field for good. My three years of experience were enough for me to
            discern that although I love to cook and the culture that surrounds
            it, It was not a healthy field to be in. Long hours at the most
            inconvenient time. Constantly in a rush and on a consistent
            reoccurring deadline. All combined with low pay and high stress made
            me look for an alternative to a new career path.
            <br />
            <br />I have always been interested in computers, or anything
            science-related for that matter. During Christmas break of 2020, I
            sat down with my two step-brothers who both worked in the computer
            programming field. They enticed me with the idea of plunging myself
            into the field with them. And showed me the attractive side and
            benefits of coding. I followed through with their advice and
            enrolled in the DevMountain coding boot camp program.
            <br />
            <br />
            There I learned to be agile, and flexible in my learning skills. I
            grasped the idea of how to think in a constructive and rudimentary
            way. In the coding basics course, we had tackled everything from
            methodologies to front-end web basics, python and data analytics,
            and cryptography. In their specializations program for web dev, we
            dove deep into React and learned how to build out a full-scale
            application.
            <br />
            <br />
            Towards the end of the 8 weeks of our specializations program, we
            were tasked with creating our capstone project. I chose to create a
            recipe app for my project, as it seemed applicable to my previous
            circumstance. This is where Reezy Recipes was born. A simple app
            that has access to over two million recipes and information
            regarding those recipes. A basic yet effective way for finding the
            right recipe for the individual. More features to come in the
            future, but for now, I decide to leave it at that. If you are
            reading this, thank you for looking at the project, and I hope you
            enjoy!
          </p>
          <a
            className="github-link"
            href="https://github.com/ConnorBoulton/reezy-capstone"
          >
            <h3>GitHub</h3>
          </a>
        </span>
      </div>
      <Footer />
    </>
  );
}
