import { SetStateAction, useContext, useEffect, useState } from "react"
import { AuthContext } from "../../contexts/auth"
import { IDataResults } from "../../interfaces/IDataResults"
import styles from "./Main.module.scss"
import { FaSignOutAlt , FaUser } from "react-icons/fa";
import  httpDefault  from "../../services/servicesApi"

const MainData = () => {
    const [nameData , setNameData] = useState<IDataResults[]>([])

    useEffect(() => {
        httpDefault.get<IDataResults[]>(`/api`)
        .then((response: { data: SetStateAction<IDataResults[]> }) => { setNameData(response.data)})
    },[])

    const {logout} = useContext(AuthContext)
    const handleLogout = () => {
        logout()
    }

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
                            <p>-Nome do Banco: {nameData.bank.bankName}</p>
                            <p>-Código do Banco{nameData.bank.code}</p>
                            <p>-Agência: {nameData.bank.agency}</p>
                            <p>-Conta: {nameData.bank.account}</p>
                        </div> 
                    </div>
                )}
            </main>
        </div>
    )
}

export default MainData