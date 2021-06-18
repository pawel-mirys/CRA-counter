import styles from "./App.module.scss";
import { Button } from "./button/Button";
export const App = () => {
  return (
    <div>
      <div className={styles.counterContainer}>
        <Button text="+" />
        <Button text="-" />
      </div>
    </div>
  );
};
