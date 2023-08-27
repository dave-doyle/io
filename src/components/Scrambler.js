import React, { useEffect, useState } from "react";

const Scrambler = ({ phrases, initialDelay, revealDuration }) => {
  const [counter, setCounter] = useState(0);
  const chars =
    "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをんアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン漢字文学科学生物化学歴史地理音楽美術数学社会政治経済外国語";
  const [displayedText, setDisplayedText] = useState("");
  const [frame, setFrame] = useState(0);
  const [scrambleCompleted, setScrambleCompleted] = useState(false);

  useEffect(() => {
    const update = () => {
      const fx = phrases[counter];
      let newDisplayedText = "";

      for (let i = 0; i < fx.length; i++) {
        if (frame >= initialDelay + i * revealDuration) {
          newDisplayedText += fx[i];
        } else {
          newDisplayedText += chars[Math.floor(Math.random() * chars.length)];
        }
      }

      setDisplayedText(newDisplayedText);

      if (!scrambleCompleted && frame >= initialDelay + fx.length * revealDuration) {
        setScrambleCompleted(true);
      }

      if (!scrambleCompleted) {
        setFrame((prevFrame) => prevFrame + 1);
        requestAnimationFrame(update);
      } else {
        setTimeout(() => {
          setCounter((prevCounter) => (prevCounter + 1) % phrases.length);
          setDisplayedText(""); // Reset the displayed text
          setScrambleCompleted(false); // Reset the scrambleCompleted state
        }, 800);
      }
    };

    update();
  }, [counter, phrases, frame, chars, initialDelay, revealDuration, scrambleCompleted]);

  return  <div className="text" style={{ fontFamily: "Roboto Mono", fontSize: "1em",whiteSpace: "nowrap", maxWidth: "100%"  }}>
  {displayedText}
</div>;
};

export default Scrambler;
