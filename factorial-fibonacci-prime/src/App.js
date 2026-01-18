import { useState } from "react";

function App() {
  const [num, setNum] = useState("");

  const factorial = (n) => {
    let f = 1;
    for (let i = 1; i <= n; i++) f *= i;
    return f;
  };

  const fibonacci = (n) => {
    let a = 0, b = 1, res = [];
    for (let i = 0; i < n; i++) {
      res.push(a);
      [a, b] = [b, a + b];
    }
    return res.join(", ");
  };

  const isPrime = (n) => {
    if (n <= 1) return "Not Prime";
    for (let i = 2; i < n; i++)
      if (n % i === 0) return "Not Prime";
    return "Prime";
  };

  return (
    <div>
      <h2>Factorial, Fibonacci, Prime Number</h2>
      <input
        type="number"
        placeholder="Enter number"
        onChange={(e) => setNum(e.target.value)}
      />
      <p>Factorial: {num && factorial(num)}</p>
      <p>Fibonacci: {num && fibonacci(num)}</p>
      <p>Prime Check: {num && isPrime(num)}</p>
    </div>
  );
}

export default App;
