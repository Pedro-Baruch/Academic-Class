
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
  
function App() {
    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [confPassword , setConfPassword] = useState('');
  
   
    const handleChange =(e)=>{
      setName(e.target.value);
    }
   
  
  
    const handleEmailChange =(e)=>{
      setEmail(e.target.value);
    }
      
    const handlePasswordChange =(e)=>{
      setPassword(e.target.value);
    }
     
    const handleConfPasswordChange =(e)=>{
      setConfPassword(e.target.value);
    }
   
    const handleSubmit=(e)=>{
      if(password!=confPassword)
      {
       
        alert("senha não coincidem");
      }
      else{
        
        alert('Conta criada com sucesso');
      }
      e.preventDefault();
  
    }

  return (
    <div className="container">
    <nav className="navbar">
        <ul className="navbar-item">
            <li class="navbar-titulo"><a href="#">Academic Class</a></li>
        </ul>
    </nav>
    
    <div className="container-registro">


    <header className="registro">
    <form onSubmit={(e) => {handleSubmit(e)}}>
     {}
    <h1 className='registro-titulo'> Login </h1>
    
    
        <label className='registro-texto'>
          Name:
        </label><br/>
        <input className='registro-campo' type="text" value={name}
         required onChange={(e) => {handleChange(e)}} /><br/>
         
       
       
        <label className='registro-texto'>
          Email:
        </label><br/>
        <input className='registro-campo' type="email" value={email} 
        required onChange={(e) => {handleEmailChange(e)}} /><br/>
          
        <label className='registro-texto'>
          Password:
        </label><br/>
        <input className='registro-campo' type="password" value={password}
         required onChange={(e) => {handlePasswordChange(e)}} /><br/>
             
        <label className='registro-texto'>
          Confirm Password:
        </label><br/>
        <input className='registro-campo' type="password" value={confPassword} 
        required onChange={(e) => {handleConfPasswordChange(e)}} /><br/>
                
        <input type="submit" className='registro-button' value="Submit"/>
      </form>
    </header>
    </div>




   
    <footer class="rodape">
        <a href="#">&copy;AcademicClass 2022.</a>
    </footer>
</div>
  );
}

export default App;
