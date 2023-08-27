import React from "react";
import Scrambler from "./Scrambler.js";
import { TypeAnimation } from "react-type-animation";

function About() {
  const phrase_1 = ["David Doyle Software Developer"]; // Array of phrases

  
  const initialDelay = 5; 
  const revealDuration = 2000; 

  return (
    <section id="about">
      <h2>About Me</h2>

      {/* <div className="container">
        <div className="text">
          <Scrambler
            phrases={phrase_1}
            initialDelay={initialDelay}
            revealDuration={revealDuration}
          />
        </div>
      </div> */}

      <br />

      
        
        <div className="revealed-text">
          <div className="container">
            
              <Scrambler
                phrases={phrase_1}
                initialDelay={initialDelay}
                revealDuration={revealDuration}
              />
            
            <TypeAnimation
              sequence={[``, 1, ""]}
              speed={20}
              style={{ whiteSpace: "pre-line", fontSize: "2em" }}
              repeat={0}
            />
          </div>
        </div>
      
    </section>
  );
}

export default About;
