import { useState } from "react";
import "./App.css";
import dice from "../public/images/icon-dice.svg";

function App() {
  const [adviceData, setAdviceData] = useState(null);
  const [isLoading, setIsLoading] = useState(false)

  const getAdvice = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("https://api.adviceslip.com/advice");
      const data = await res.json();
      setAdviceData(data);
    } catch (error) {
      console.error("error fetching data:", error);
    } finally {
      setIsLoading(false)
    }
  };

  return (
    <div className="advice">
      <div className="advice-container">
        {isLoading ? (
          <p id="loading">Loading...</p>
        ) : adviceData ? (
          <>
            <h1 className="advice-number">
              ADVICE #<span>{adviceData?.slip?.id}</span>
            </h1>
            <div className="advice-text">
              <p>"{adviceData?.slip?.advice}"</p>
            </div>
          </>
        ) : (
          <p id="get-advice">Click the dice below to get advice.</p>
        )}
        <div className="pattern-divider"></div>
        <button className="dice-container" onClick={getAdvice}>
          <img src={dice} alt="Image of a dark blue die" />
        </button>
      </div>
    </div>
  );
}

export default App;
