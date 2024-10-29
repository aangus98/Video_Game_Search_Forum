import '../App.css';
import SearchBar from '../components/SearchBar';
import gamefologo from '../assets/gamefologo.png';
import { useState } from 'react';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

export function SignIn() {
  const [showRegistration, setShowRegistration] = useState(false);

  return (
    <div className="Background container">
      <div className="page container">
        <header className="container"> 
          <div className="logo container">
            <img className="imagelogo container" src={gamefologo} width="900"></img>
          </div>
          <div className='container'>
            
            <SearchBar className="container"/>
          </div>
        </header>
        <div className='container form-toggle'>
          <button onClick={() => setShowRegistration(!showRegistration)}>
            {showRegistration ? 'Switch to Login' : 'Switch to Registration'}
          </button>
          {showRegistration ? <RegisterForm /> : <LoginForm />}
        </div>
      </div>
    </div>  
  )
}

export default SignIn;