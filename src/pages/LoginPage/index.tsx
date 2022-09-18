import { useState , useContext } from "react"
import { AuthContext } from "../../contexts/auth"
import styles from "./LoginPage.module.scss"

const LoginPage = () => {
    const {login} = useContext(AuthContext)

    const [userName , setUserName] = useState("")
    const [password , setPassaword] = useState("")

    const handleSubmit = (event: { preventDefault: () => void }) =>{
        event.preventDefault()
        login(userName, password)
    }

    return(
        <div className={styles.login}>
            <div className={styles.texts}>
                <h1 className={styles.text__login}>Bem Vindo!</h1>
                <h1 className={styles.subtext__login}>Realize o login para continuar</h1>
            </div>
            <form className={styles.login__form} onSubmit={handleSubmit}>
                <div className={styles.input__container}>
                    <label>Nome</label>
                    <input 
                        type="text" 
                        name="username" 
                        placeholder="Digite aqui..." 
                        value={userName} onChange={(event) => setUserName(event.target.value)} 
                    />
                </div>
                <div className={styles.input__container}>
                    <label>Senha</label>
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Digite aqui..." 
                        value={password} onChange={(event) => setPassaword(event.target.value)}
                    />
                </div>
                <div className={styles.button__login}>
                    <button type="submit">Entrar</button>
                </div>
            </form>
        </div>
    )
}

export default LoginPage