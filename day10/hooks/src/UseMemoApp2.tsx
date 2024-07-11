import React, { useEffect, useMemo, useState } from "react";

function UseMemoApp2() {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  // 랜더링 될 때마다 매번 object 가 새로 생성된다. 해결하기 위해선 location 변수 초기화를 막아야한다.
  // const location = isKorea ? '한국':'외국';
  const location = useMemo(() => {
    return { country: isKorea ? "한국" : "외국" };
  }, [isKorea]);
  // {
  //     country: isKorea ? '한국':'외국',
  // }
  const mealNumber = useMemo(()=>{
    return {number};
  }, [number])

  useEffect(() => {
    console.log("useEffect 호출");
    // 뭔가 오래걸리는 작업을 할 때 꼭 필요한 작업만 해야하니까...
  }, [location, number]);

  return (
    <div>
      <h3>하루에 몇끼 먹어요?</h3>
      <input
        type="number"
        value={mealNumber.number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />

      <h3>어느 나라에 있어요?</h3>
      {/* <p>나라: {location}</p> */}
      <p>나라: {location.country}</p>
      <button onClick={(e) => setIsKorea(!isKorea)}>비행기 타자</button>
    </div>
  );
}

export default UseMemoApp2;
