import styles from "./Header.module.scss"

const Header = () => {
    return(
        <header className={styles.header}>
            <h1 className={styles.text__header}>Sistema de Dados Bancários</h1>
        </header>
    )
}

export default Header