import { useState } from "react";

function App() {
  const [num, setNum] = useState("");

  const sumOfDigits = (n) => {
    let sum = 0;
    while (n > 0) {
      sum += n % 10;
      n = Math.floor(n / 10);
    }
    return sum;
  };

  return (
    <div>
      <h2>Sum of Digits</h2>
      <input
        type="number"
        placeholder="Enter number"
        onChange={(e) => setNum(e.target.value)}
      />
      <p>Sum: {num && sumOfDigits(Number(num))}</p>
    </div>
  );
}

export default App;
