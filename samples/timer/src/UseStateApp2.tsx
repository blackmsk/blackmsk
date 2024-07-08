import { useState } from "react";

const heavyWork = () => {
  console.log("엄청 무고운 작업!!!");
  return ["홍길동", "김민수"];
};

function UseStateApp2() {
  // 1
  const [names, setNames] = useState(() => heavyWork());
  const [input, setInput] = useState("");

  // 2
  const handleInputChange = (e: any) => {
    setInput(e.target.value);
  };

  // 3
  const handleUpload = () => {
    setNames((prevState) => {
      console.log("이전 state: ", prevState);
      return [input, ...prevState];
    });
  };

  // 4
  console.log(input);

  return (
    <div>
      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={handleUpload}>Upload</button>
      {names.map((name, idx) => {
        return <p key={idx}>{name}</p>;
      })}
    </div>
  );
}

export default UseStateApp2;
