import { useState } from "react";
import "./App.css";

function App() {
  const [a] = useState(Math.floor(Math.random() * 10));
  const [b] = useState(Math.floor(Math.random() * 10));
  const [ans, setAns] = useState("");
  const [msg, setMsg] = useState("");

  const checkAnswer = () => {
    if (Number(ans) === a + b) {
      setMsg("Correct ");
    } else {
      setMsg("Try Again ");
    }
  };

  return (
    <div className="container">
      <h1>Kids Math Game</h1>

      <h2>
        {a} + {b} = ?
      </h2>

      <input
        type="number"
        placeholder="Enter your answer"
        onChange={(e) => setAns(e.target.value)}
      />

      <br /><br />

      <button onClick={checkAnswer}>
        Check
      </button>

      <h3>{msg}</h3>
    </div>
  );
}

export default App;
