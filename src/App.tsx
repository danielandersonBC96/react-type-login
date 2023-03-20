import React, { useContext } from "react";
import  './App.css';
import  { Route, Routes, Link, useNavigate,} from 'react-router-dom';
import { Home } from "./Pages/Home/index";
import { Private } from "./Pages/Private/Index";
import { RequireAuth } from "./Contexts/Auth/RequireAuth";
import { AuthContext } from "./Contexts/Auth/AuthContext";

function App () {

    const auth = useContext( AuthContext)
    const navigate =  useNavigate();

    const handleLogout =  async() => {
      await auth.singout();
       navigate('/')
     

    }
return(
  <div>
  
    <header>
     <h1> Bem vindos </h1>
    </header>


    <nav>
      <Link to="/"> Home </Link>
      <Link to='/Private'> Private </Link>
     { auth.user && <button onClick={handleLogout}>Sair</button>}
    
    </nav>

    <Routes>
       <Route path='/' element={<Home/>}/>
       <Route  path='/Private' element={
        <RequireAuth>
        <Private/>
     </RequireAuth>
    }/>
      
     </Routes>
   
 </div>
)

}
export default App;
