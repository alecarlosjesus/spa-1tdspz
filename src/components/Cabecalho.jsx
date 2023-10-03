import styles from "../css/Cabecalho.module.css";

export default function Cabecalho() {
  return (
    <>
        <header className={styles.container}>
            <nav>
                <ul>
                    <li><a href="#">Item-1</a></li>
                    <li><a href="#">Item-2</a></li>
                    <li><a href="#">Item-3</a></li>
                </ul>
            </nav>
        </header>
        
    </>
  )
}
