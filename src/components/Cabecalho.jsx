import { Link } from "react-router-dom";
import styles from "../css/Cabecalho.module.css";

export default function Cabecalho() {
  return (
    <>
        <header className={styles.container}>
            <nav>
                <ul>
                    <li> <Link to="/">HOME</Link> </li>
                    <li> <Link to="/produtos">PRODUTOS</Link> </li>
                    <li> <Link to="/editar/produtos/1">PRODUTO-1</Link> </li>
                    <li> <Link to="/editar/produtos/2">PRODUTO-2</Link> </li>
                </ul>
            </nav>
        </header>
        
    </>
  )
}
