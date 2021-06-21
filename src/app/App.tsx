import styles from "./App.module.scss";
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
