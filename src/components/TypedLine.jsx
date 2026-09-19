import { useState, useEffect } from "react";

export default function TypedLine({ text, speed = 28, startDelay = 0, onDone }) {
  const [shown, setShown] = useState("");

  useEffect(() => {
    let i = 0;
    let timer;
    const start = setTimeout(() => {
      timer = setInterval(() => {
        i++;
        setShown(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(timer);
          if (onDone) onDone();
        }
      }, speed);
    }, startDelay);
    return () => {
      clearTimeout(start);
      clearInterval(timer);
    };
  }, [text]);

  return <span>{shown}</span>;
}
