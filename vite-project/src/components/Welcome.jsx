import React from 'react'

import { useContext } from 'react'; //hulk para consumir o contexto
import { QuizContext } from '../context/quiz';


import './Welcome.css'

import Quiz from '../img/quiz.svg';



const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext) //contante com o nome do contexto que quero consumir 

  
  return (
    <div id='Welcome'>

      <h2> Seja bem vindo</h2>
      <p> Click no botão abaixo para começar:</p> 
      <button onClick={()=> dispatch({type: "CHANGE_STATE"})}> Iniciar </button> 
      
      <img src={Quiz} alt='Inicio do Quiz'></img>
    </div>
  )
}
 //uso o dispatch com a chave usada no switch para entrar no looping 
export default Welcome