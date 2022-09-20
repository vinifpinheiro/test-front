import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../contexts/auth"
import { IDataResults } from "../../interfaces/IDataResults"
import styles from "./Main.module.scss"
import { FaSignOutAlt , FaUser } from "react-icons/fa";

const Main = () => {
    const {logout} = useContext(AuthContext)
    const handleLogout = () => {
        logout()
    }

    const [nameData , setNameData] = useState<IDataResults[]>([])
 
    useEffect(() => {
        axios.get<IDataResults[]>(`http://demo8933322.mockable.io/api`)
        .then(response => setNameData(response.data))
    },[])
    
    return(
        <div className={styles.contentMainPage}>
            <div >
                <button onClick={handleLogout} className={styles.logoutButton}><FaSignOutAlt /></button>
            </div>
            <main className={styles.data__bank}>
                {nameData.map(nameData => 
                    <div key={nameData.id}>
                        <h1 className={styles.h1__username}><FaUser /> {nameData.name}</h1>
                        <h1 className={styles.h1__userDocument}>Documento: {nameData.document}</h1>
                        <div className={styles.bank__specification}>
                            <p>Nome do Banco: {nameData.bank.bankName}</p>
                            <p>Código do Banco{nameData.bank.code}</p>
                            <p>Agência: {nameData.bank.agency}</p>
                            <p>Conta: {nameData.bank.account}</p>
                        </div> 
                    </div>
                )}
            </main>
        </div>
    )
}

export default Main