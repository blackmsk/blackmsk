import React, { useMemo, useState } from "react";

const hardCalculate = (number: number) => {
  console.log("어려운 계산!");
  for (let i = 0; i < 99999999; i++) {
    //생각하는 시간
  } 
  return number + 10000;
};

const easyCalculate = (number: number) => {
  console.log("짱 쉬운 계산!");
  return number + 1;
};

function UseMemoApp1() {
  const [hardNumber, setHardNumber] = useState(1);
  const [easyNumber, setEasyNumber] = useState(1);

  // easy 만 불러지도록 memo 를 사용한다.
  // const hardSum = hardCalculate(hardNumber);
  const hardSum = useMemo(() => {
    return hardCalculate(hardNumber);
  }, [hardNumber]); // hardNumber 가 변경되어야 호출된다.

  // const easySum = easyCalculate(easyNumber);
  const easySum = useMemo(() => {
    return easyCalculate(easyNumber);
  }, [easyNumber]);


  return (
    <div>
      <h3>어려운 계산기</h3>
      <input
        type="number"
        value={hardNumber}
        onChange={(e) => setHardNumber(Number(e.target.value))}
      />
      <span> + 10000 = {hardSum}</span>

      <h3>쉬운 계산기</h3>
      <input
        type="number"
        value={easyNumber}
        onChange={(e) => setEasyNumber(Number(e.target.value))}
      />
      <span> + 1 = {easySum}</span>
    </div>
  );
}

export default UseMemoApp1;
