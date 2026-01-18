import { useState } from "react";

function App() {
  const [num, setNum] = useState("");
  const [result, setResult] = useState("");
  const [msg, setMsg] = useState("");

  const a = Number(num);
  const b = a - 15;

  const calculateExpression = () => {
    if (a === b) {
      setResult("Division by zero");
    } else {
      setResult(((a + b) / (a - b)) * (a + b));
    }
  };

  const sumSquareDigits = () => {
    let n = a;
    let sum = 0;
    while (n > 0) {
      let d = n % 10;
      sum += d * d;
      n = Math.floor(n / 10);
    }
    setMsg("Sum of square of digits: " + sum);
  };

  const evenOdd = () => {
    setMsg(a % 2 === 0 ? "EVEN" : "ODD");
  };

  return (
    <div>
      <h2>SET-1 – Function Component</h2>

      <input
        type="number"
        placeholder="Enter number"
        onChange={(e) => setNum(e.target.value)}
      />

      <br /><br />

      <button onClick={calculateExpression}>Calculate Expression</button>
      <button onClick={sumSquareDigits}>MoD_Sum_square</button>
      <button onClick={evenOdd}>Even_ODD</button>

      <p>Result: {result}</p>
      <p>{msg}</p>
    </div>
  );
}

export default App;
