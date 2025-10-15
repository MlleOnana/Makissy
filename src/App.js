import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import {Utilisateur} from './models/Utilisateur';
import { useNavigate } from 'react-router-dom';

function App() {
  const [today, setToday] = useState("");
  const name= document.getElementById('name');
  const pseudoTel= document.getElementById('pseudo-telegram');
  const email=document.getElementById('email');
  const numAbo= document.getElementById('num');
  const dateDebut= document.getElementById('date-debut');
  const ville= document.getElementById('ville');
  const pays= document.getElementById('pays');

  const navigate= useNavigate();

  useEffect(() => {
    const date = new Date();
    const formattedDate = date.toISOString().split("T")[0]; // format YYYY-MM-DD
    setToday(formattedDate);
  }, []);
  
  const submit= ()=>{
    if(!name.value || !pseudoTel || !email || !numAbo || !ville || !pays){
      alert('Des champs obligatoires sont vides');
    }else{
      const user= new Utilisateur(0, name.value, pseudoTel.value, email.value, numAbo.value, dateDebut.value, ville.value, pays.value );
      const users= JSON.parse(localStorage.getItem('users')) || [];
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
      navigate("./pages/listesuser")
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className='form'>
          <p>FORMULAIRE D'ABONNEMENT</p>
          <form className='formulaire'>
            <input id='name' type='text' placeholder='Name'/>
            <input id='pseudo-telegram' type='text' placeholder='Pseudo Telegram'/>
            <input id='email' type='email' placeholder='Email'/>
            <input id='num' type='text' placeholder="Numero de l'abonement"/>
            {/*<input id='date-debut' type='date' value={today} disabled/>*/}
            <input id='date-debut' type='date' />
            <input id='ville' type='text' placeholder='Ville'/>
            <input id='pays' type='text' placeholder='Pays'/>
            <button id='submit' onClick={submit} className='submit'>Login</button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
