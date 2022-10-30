import React, { useEffect, useState, useCallback } from 'react';

const initCount = { count: 0 };

const useCounter = () => {
  const [cnt, setCnt] = useState(initCount);
  const reset = () => setCnt(initCount);
  return [cnt, setCnt, reset];
};

const useCounter2 = () => {
  const [cnt, setCnt] = useState(initCount);
  const reset2 = useCallback(() => setCnt(initCount), []);
  return [cnt, setCnt, reset2];
};

const App = () => {
  const [cnt, setCnt, reset] = useCounter();
  const [cnt2, setCnt2, reset2] = useCounter2();
  useEffect(() => {
    console.log('useEffect: reset');
  }, [reset]);
  useEffect(() => {
    console.log('useEffect: reset2');
  }, [reset2]);
  return (
    <div>
      <button
        onClick={() =>
          setCnt((cnt) => {
            return { count: cnt.count + 1 };
          })
        }
      >
        count is {cnt.count}
      </button>
      <button onClick={reset}>reset</button>
      <br />
      <button
        onClick={() =>
          setCnt2((cnt) => {
            return { count: cnt.count + 1 };
          })
        }
      >
        count2 is {cnt2.count}
      </button>
      <button onClick={reset2}>reset2</button>
    </div>
  );
};

export default App;
