import { useState } from "react";

function UseSampleApp1() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [result, setResult] = useState<number|string>("");

  const handleInputAChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setA(Number(e.target.value));
  }
  const handleInputBChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setB(Number(e.target.value));
  }
    
  const calculate = (operation: "+" | "-" | "*" | "/") => () => {
    switch (operation) {
      case "+":
        setResult(a + b);
        break;
      case "-":
        setResult(a - b);
        break;
      case "*":
        setResult(a * b);
        break;
      case "/":
        setResult(b !== 0 ? a / b : "error");
        break;
      default:
        setResult(0);
    }
  };

  return (
    <div>
      <input type="number" value={a} onChange={handleInputAChange} />
      <input type="number" value={b} onChange={handleInputBChange} />
      <button onClick={calculate("+")}>+</button>
      <button onClick={calculate("-")}>-</button>
      <button onClick={calculate("*")}>*</button>
      <button onClick={calculate("/")}>/</button>
      <span>{result}</span>
      <br />
    </div>
  );
}

export default UseSampleApp1;
