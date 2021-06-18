import styles from "./Button.module.scss";
import { useState } from "react";

type ButtonProps = {
  text: string;
};

export const Button = ({ text }: ButtonProps) => {
  const [count, setCount] = useState(0);
  const counting = () => {
    text === "+" ? setCount(count + 1) : setCount(count - 1);
    console.log(count);
  };

  return (
    <button onClick={counting} className={styles.button}>
      {text}
    </button>
  );
};
