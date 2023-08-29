import React, { useEffect, useState } from "react";

const Scrambler = ({ phrases, initialDelay, revealDuration, fontFamily  }) => {
  const chars =
    "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをんアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン漢字文学科学生物化学歴史地理音楽美術数学社会政治経済外国語";

  const [counter, setCounter] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [scrambleCompleted, setScrambleCompleted] = useState(false);

  const animationLoop = (timestamp) => {
    if (!animationLoop.startTime) {
      animationLoop.startTime = timestamp;
    }

    const elapsed = timestamp - animationLoop.startTime;

    if (!scrambleCompleted) {
      const fx = phrases[counter];
      let newDisplayedText = "";

      for (let i = 0; i < fx.length; i++) {
        if (elapsed >= initialDelay + i * revealDuration) {
          newDisplayedText += fx[i];

          
        } else {
          newDisplayedText += chars[Math.floor(Math.random() * chars.length)];
        }
      }

      setDisplayedText(newDisplayedText);

      if (elapsed >= initialDelay + fx.length * revealDuration) {
        setScrambleCompleted(true);
      }

      if (!scrambleCompleted) {
        requestAnimationFrame(animationLoop);
      }
    } else if (elapsed >= 800) {
      setCounter((prevCounter) => (prevCounter + 1) % phrases.length);
      setDisplayedText("");
      setScrambleCompleted(false);
      animationLoop.startTime = null;
    }
  };

  useEffect(() => {
    requestAnimationFrame(animationLoop);
  }, [counter, phrases]);

  return (
    <div className="text" style={{ fontFamily, fontSize: "1em", whiteSpace: "nowrap"}}>
      {displayedText}
    </div>
  );
};

export default Scrambler;
