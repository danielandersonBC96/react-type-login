import { useEffect, useState } from "react"
import { AuthContext } from "./AuthContext"
import { User } from "../../Types/User"
import { useApi } from "../../hooks/UseAp1"

export const AuthProvider = ({children}:{ children : JSX.Element } ) => {
    const [user, setUser] = useState<User | null>(null);
    const Api =  useApi();
 
 
     useEffect(()=>{
         const validateToken= async()=> {
         const storageDate =  localStorage.getItem('authToken');
         if(storageDate){
             const data = await Api.validateToken(storageDate);
             if(data.user){
                 setUser(data.user)
               }
           }
 
        }
 
         validateToken();
 
     }, [Api]);
 
     const signin = async (email: string, password: string) => {
        console.log("signin está sendo executada.");
        const data = await Api.signin(email, password);
        if (data.user && data.token) {
            setUser(data.user);
            setToken(data.token);
            return true;
        }
        return false;
    }

 
     const singout = async () => {
        console.log("signout está sendo executada.");
        setUser(null);
        setToken('');
        await Api.logout();
    }

     
        
    const setToken = ( token: string) => {
 
      localStorage.setItem('authToken', token);
    } 
    
    return (
        <AuthContext.Provider value={{ user, signin, singout }}>
            {children}
        </AuthContext.Provider>
    );
}
 