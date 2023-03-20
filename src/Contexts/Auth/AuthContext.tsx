import { createContext } from "react";
import { User } from "../../Types/User";

export type AuthContexType = {
      user:   User | null;
      signin: ( email:string, password:string) =>  Promise<boolean>;
      singout: () => void; 
}

export  const AuthContext = createContext<AuthContexType>(null!);