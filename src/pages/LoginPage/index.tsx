import styles from "./LoginPage.module.scss"

function LoginPage () {

    return(
        <div className={styles.login}>
            <h1 className="text__login">Bem Vindo! <br />Realize o login para continuar</h1>
            <form className={styles.login__form}>
                <div className={styles.input__container}>
                    <label>Nome de Usuario</label>
                    <input type="text" placeholder="Digite aqui..."/>
                </div>
                <div className={styles.input__container}>
                    <label>Senha</label>
                    <input type="password" placeholder="Digite aqui..."/>
                </div>
                <div className={styles.button__login}>
                    <button type="submit">Entrar</button>
                </div>
            </form>
        </div>
    )
}

export default LoginPage