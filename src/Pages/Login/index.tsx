import { ChangeEvent, useContext, useState } from "react";
import { AuthContext } from "../../Contexts/Auth/AuthContext";
import { Await, useNavigate } from "react-router-dom";

export const Login = () => {

    const navigate = useNavigate();
    const auth = useContext(AuthContext);

    const [ email, setEmail] = useState('');
    const[ password, setPassword] = useState('');

     const hadlePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {

    setPassword(event.target.value)
     }

     const hadleEmaildInput = (event: ChangeEvent<HTMLInputElement>) => {

        setEmail(event.target.value)
         }
    
         
    
         const handleLogin = async () => {
            if (email && password) {
                const isLogged = await auth.signin(email, password);
                if (isLogged) {
                    navigate('/');
                } else {
                    alert("Não deu certo.");
                }
            }
        }
    
        return (
            <div>
                <h2>Página Fechada</h2>
    
                <input
                    type="text"
                    value={email}
                    onChange={ hadleEmaildInput}
                    placeholder="Digite seu e-mail"
                />
                <input
                    type="password"
                    value={password}
                    onChange={hadlePasswordInput}
                    placeholder="Digite sua senha"
                />
                <button onClick={handleLogin}>Logar</button>
            </div>
        );
    

}   








     

    