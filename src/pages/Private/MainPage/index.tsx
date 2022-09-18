import {useContext} from "react"
import { AuthContext } from "../../../contexts/auth"

const MainPage = () => {
    const {logout} = useContext(AuthContext)

    const handleLogout = () => {
        logout()
    }
    return(
        <>
            <button onClick={handleLogout}>Logout</button>
        </>
    )
}

export default MainPage