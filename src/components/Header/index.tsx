import todoLogo from '../../assets/todologo.svg'
import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="logo" />

      <form className={styles.newTaskForm}>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button type="submit">Criar
          <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  )
}