import {FaUser, FaLock} from "react-icons/fa";
import {useState} from "react";



import "./Login.css";

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log("Login Efetuado ",  "Email: " +  username  + " senha: " + password);
       
    }


  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="input-field">
        <input type="email" placeholder="E-mail" required
        onChange={(e) => setUsername(e.target.value)}/>
        <FaUser className="icon"/>
        </div>
        <div className="input-field">
        <input type="password" placeholder='Senha'  required
        onChange={(e) => setPassword(e.target.value)}/>
        <FaLock className="icon"/>
        </div>

    <div className="recall-forget">
        <label>
            <input type="checkbox" />
            Lembre de mim
        </label>
        <a href="#">Esqueci a senha </a>
    </div>
        <button>Entrar</button>

        <div className="signup-link">
            <p>Não tem uma conta?
                <a href=""> Registrar-se</a> </p>
        </div>
       
      </form>
    
    </div>


  



  )


  
 
}





export default Login 



