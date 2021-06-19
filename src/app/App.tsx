import styles from "./App.module.scss";
import { Button } from "./button/Button";
import { Counter } from "./counter/Counter";
export const App = () => {
  return (
    <div>
      <div className={styles.counterContainer}>
        <Counter />
      </div>
    </div>
  );
};
