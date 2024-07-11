import React, { useState, useEffect } from "react";
import Timer from "./components/Timer";

function UseEffectApp2() {
  const [showTimer, setShowTimer] = useState(false);

  return (
    <div>
      {showTimer && <Timer />}
      <button
        onClick={() => {
          setShowTimer(!showTimer);
        }}
      >
        toggle Timer
      </button>
    </div>
  );
}

export default UseEffectApp2;
