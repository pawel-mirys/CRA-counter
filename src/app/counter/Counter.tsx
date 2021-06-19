import { useState } from "react";
export const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = (event: any) => {
    setCount(count + 1);
    console.log(count);
  };
  const decrement = (event: any) => {
    setCount(count - 1);
    console.log(count);
  };
  return (
    <div>
      <button onClick={increment}>+</button>
      <p>Counting: {count}</p>
      <button onClick={decrement}>-</button>
    </div>
  );
};
