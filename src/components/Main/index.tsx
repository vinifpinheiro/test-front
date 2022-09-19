import {useContext, useEffect, useState} from "react"
import { AuthContext } from "../../contexts/auth"
import styles from "./Main.module.scss"
import { getData } from "../../services/servicesApi"


const Main = () => {
    const [nameData , setNameData] = useState("")

    const {logout} = useContext(AuthContext)
    const handleLogout = () => {
        logout()
    }

    useEffect(() => {
        dataBank()
        console.log(nameData)
    },[nameData])

    const dataBank = async () => {
        try{
            const response = await getData()
            setNameData(response.data.name)
        }catch (error) {
            console.log(error)
        }
        
    }

    return(
        <div className={styles.contentMainPage}>
            <div className={styles.logoutButton}>
                <button onClick={handleLogout}>Logout</button>
            </div>
            <main className={styles.data__bank}>
                <h1>
                    {}
                </h1>
            </main>
        </div>
    )
}

export default Main