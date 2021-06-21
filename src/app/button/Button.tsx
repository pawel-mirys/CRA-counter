import styles from "./Button.module.scss";

type ButtonProps = {
  text: string;
  onClickProps?: any;
};

export const Button = ({ text, onClickProps }: ButtonProps) => {
  return (
    <button onClick={onClickProps} className={styles.button}>
      {text}
    </button>
  );
};
