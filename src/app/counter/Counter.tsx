import { useState } from "react";
import { Button } from "../button/Button";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const handleOnClick = (e: any) => {
    e.target.textContent === "+" ? setCount(count + 1) : setCount(count - 1);
    console.log(count);
  };
  return (
    <div>
      <Button onClickProps={handleOnClick} text="+" />
      <h1>{count}</h1>
      <Button onClickProps={handleOnClick} text="-" />
    </div>
  );
};
