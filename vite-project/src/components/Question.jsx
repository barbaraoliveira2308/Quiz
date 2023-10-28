import React from 'react'
import { useContext } from 'react'; //hulk para consumir o contexto
import { QuizContext } from '../context/quiz';



const Question = () => {
    const [quizState, dispatch] = useContext(QuizContext)
  

    return (
      
        <div> 
            <p> Pergunta </p>
            <h2> Pergunta Atual </h2>
            <div id='option_container'></div>
            <button> Continuar </button>
        </div>
       
    )
}

export default Question