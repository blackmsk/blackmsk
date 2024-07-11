import { useState } from "react";

function UseStateApp2() {
  const [names, setNames] = useState([""]);
  const [input, setInput] = useState("");

  const handleInputChange = (e: any) => {
    setInput(e.target.value);
  };

  const handleUpload = () => {
    if (input.trim() !== "") {
      setNames((prevState) => {
        console.log("이전 state ", prevState);
        return [input, ...prevState];
      });
      setInput("");
    }
  };
  return (
    <div>
      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={handleUpload}>Upload</button>

      {names.map((name, index) => (
        <p key={index}>{name}</p>
      ))}
    </div>
  );
}

export default UseStateApp2;
