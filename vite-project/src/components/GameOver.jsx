import React from 'react'
import { useContext } from 'react'; //hulk para consumir o contexto
import { QuizContext } from '../context/quiz';
import WellDone from "../img/wellDone.svg";
import './GameOver.css';



    const GameOver= () =>{
        const [quizState, dispatch] = useContext(QuizContext)
    
  return (
    <div id='gameover'>
        
        <h2>Fim do Jogo!</h2>
        <p> Pontuação {quizState.score}</p>
        <p> Você acertou {quizState.score} de {quizState.questions.length}{" "}</p>
        <img src={WellDone} alt="Fim do Quiz" />
        <button onClick={()=> dispatch({type:"NEW_GAME"})}> Reiniciar </button>
        </div>
  )}


export default GameOver