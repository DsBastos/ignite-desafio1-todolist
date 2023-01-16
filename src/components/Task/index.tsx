import styles from './task.module.css';
import { TbTrash } from "react-icons/tb";

export function Task() {
  return (
    <div className={styles.task}>
      <button className={styles.checkContainer}>
        <div />
      </button>

      <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>

      <button className={styles.deleteButton}>
        <TbTrash size={20} />
      </button>
    </div>
  )
}