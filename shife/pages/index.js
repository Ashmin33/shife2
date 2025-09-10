import Head from "next/head";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";

export default function Home() {
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const [typed, setTyped] = useState("");
  const message = "Happy 18th Birthday, Shifu ❤️ You’re the most special part of my world. I’m so lucky to have you, and I can’t wait to make every moment of your life as beautiful as you are. Wishing you love, laughter, and happiness today & always 🎂🎉💖";

  useEffect(() => {
    if (showMessage && typed.length < message.length) {
      const timeout = setTimeout(() => {
        setTyped(message.slice(0, typed.length + 1));
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [typed, showMessage]);

  const playSong = () => {
    const audio = new Audio("/song.mp3");
    audio.play();
    setShowButton(false);
    setShowMessage(true);
  };

  return (
    <>
      <Head>
        <title>Birthday Shifu</title>
      </Head>
      <div className="container">
        <Confetti />
        <div className="collage">
          <img src="/girl1.png" alt="Girl 1" />
          <img src="/girl2.png" alt="Girl 2" />
        </div>
        {showButton && (
          <button className="playBtn" onClick={playSong}>Play Surprise</button>
        )}
        {showMessage && <p className="message">{typed}</p>}
        <footer>Made with ❤️ by Isshan</footer>
      </div>
    </>
  );
}
