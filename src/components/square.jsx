import styles from "./square.module.css"
export function Square({ value, onSquareClick }) {
    return (
      <button className={styles.square} onClick={onSquareClick}>
        {value}
      </button>
    );
  }