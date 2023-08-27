import React, { useEffect, useState } from "react";

const Scrambler = ({ phrases, initialDelay, revealDuration }) => {
  const [counter, setCounter] = useState(0);
  const chars =
    "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをんアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン漢字文学科学生物化学歴史地理音楽美術数学社会政治経済外国語";
  const [displayedText, setDisplayedText] = useState("");
  const [frame, setFrame] = useState(0);

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

      if (frame < initialDelay + fx.length * revealDuration) {
        setFrame((prevFrame) => prevFrame + 1);
        requestAnimationFrame(update);
      } else {
        setTimeout(() => {
          let newChar = chars[Math.floor(Math.random() * chars.length)];
          setDisplayedText((prevText) => {
            const newText =
              prevText.slice(0, prevText.length - 1) + newChar;
            return newText;
          });
          if (newChar === fx[fx.length - 1]) {
            setCounter((prevCounter) => (prevCounter + 1) % phrases.length);
            setFrame(0); // Reset frame for the next phrase
          }
        }, 800);
      }
    };

    update();
  }, [counter, phrases, frame, chars, initialDelay, revealDuration]);

  return <div className="text">{displayedText}</div>;
};

export default Scrambler;
