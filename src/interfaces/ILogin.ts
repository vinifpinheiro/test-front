import { userType } from "../types/userType"

export interface ILogin {
    user?: userType["userName"] | null
    authenticated?: boolean
    login?: (user: string, password: string) => void
    logout?: () => void
    loading: boolean
}