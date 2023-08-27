import React from "react";
import Scrambler from "./Scrambler.js";

function About() {
  const phrases = ["THIS IS A TEST PHRASE TO SCRAMBLE"]; // Array of phrases
  const initialDelay = 1; // Adjust this value
  const revealDuration = 10000; // Adjust this value

  return (
    <section id="about">
      <h2>About Me</h2>
      <p>
        This is the About section of your portfolio. You can provide information
        about yourself here.
      </p>
      <div className="container">
        <div className="text">
          <Scrambler
            phrases={phrases}
            initialDelay={initialDelay}
            revealDuration={revealDuration}
          />
        </div>
      </div>
    </section>
  );
}

export default About;
