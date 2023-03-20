import { useContext } from "react"
import { AuthContext } from "../../Contexts/Auth/AuthContext"

export const Private = () => {

    const auth = useContext(AuthContext)


    return(
        <div>
             <h1> Private </h1>
             <h2>  Olá { auth.user?.name}, tudo bem?  </h2>  
        </div>
    )
}