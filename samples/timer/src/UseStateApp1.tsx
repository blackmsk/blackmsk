import { useState } from "react";

function UseStateApp1() {
  // 1
  const [time, setTime] = useState(1);

  // 2
  const handleClick = () => {
    let newTime;
    if (time >= 12) {
      newTime = 1;
    } else {
      newTime = time + 1;
    }

    setTime(newTime);
  };

  // 3
  console.log("updated!");

  return (
    <div>
      <span>현재 시각: {time}시</span>
      <button onClick={handleClick}>Update</button>
    </div>
  );
}

export default UseStateApp1;
