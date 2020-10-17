import React, {useState, useEffect} from 'react';
import './App.css';

const jokesAPI = "https://api.chucknorris.io/jokes/random"

function App() {

const [joke, setJoke]= useState("")

function getAJoke(){
  fetch(jokesAPI)
  .then(res => res.json())
  .then(data=>setJoke(data.value))
}

useEffect(()=> {
  getAJoke()
}, [])

  return (
    <div className="box">
      <h2>Chuck Norris Jokes Generators</h2>
  <p>{joke}</p>
      <button onClick={getAJoke}>Get a new joke :)</button>
    </div>
  )
  }

export default App;
