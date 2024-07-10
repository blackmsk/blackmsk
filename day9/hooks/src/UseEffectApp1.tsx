import React, { useState, useEffect } from "react";

function UseEffectApp1() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");

  const handleCountUpdate = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("렌더링");
  });

  useEffect(() => {
    console.log("count 렌더링");
  }, [count]);

  useEffect(() => {
    console.log("name 렌더링");
  }, [name]);

  useEffect(() => {
    console.log("init 렌더링");
  }, []);

  function handleInputCahnge(e: React.ChangeEvent<HTMLInputElement>): void {
    setName(e.target.value);
  }

  return (
    <div>
      <button onClick={handleCountUpdate}>update</button>
      <span>count:{count}</span>
      <input type="text" value={name} onChange={handleInputCahnge}></input>
      <span>name: {name}</span>
    </div>
  );
}

export default UseEffectApp1;
