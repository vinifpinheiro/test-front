import {createContext , useState ,  useEffect} from 'react'
import { ILogin } from '../interfaces/ILogin';
import token from '../data/token.json'
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext<ILogin | null>(null);

export const AuthProvider = ({children}: {children : any}) => {
    const navigate = useNavigate()
    const [user , setUser] = useState(null)
    const [loading , setLoading] = useState(true)

    useEffect(() => {
        const recoveredUser = localStorage.getItem('user')

        if(recoveredUser) {
            setUser(JSON.parse(recoveredUser))
        }

        setLoading(false)
    }, [])

    const login = (userName: any, password: any) =>{
        const loggedUser = {
            userName,token
        }

        localStorage.setItem("user",JSON.stringify(loggedUser))

        if(password === "teste") {
            setUser(loggedUser)
            navigate("/")
            console.log()
        }
        else{
            return alert("Usuario ou senha errada")
        }
    }

    const logout = () =>{
        localStorage.removeItem("user")
        setUser(null);
        navigate("/login")
    }
    
    return(
        <AuthContext.Provider value={{authenticated: !!user, user, loading, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
    
}