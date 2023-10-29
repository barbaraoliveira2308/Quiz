import React from 'react'
import { useContext } from 'react'; //hulk para consumir o contexto
import { QuizContext } from '../context/quiz';



const Question = () => {
    const [quizState, dispatch] = useContext(QuizContext)
 const currentQuestion = quizState.questions[quizState.currentQuestion]

    return (
      
        <div id='question'>
           <p> Pergunta {quizState.currentQuestion +1} de {quizState.questions.length}</p>{/* foi inserido para demostrar em qual pergunta voce esta  */}
            <h2>{currentQuestion.question} </h2>
            <p> Opções</p>
            <div id='option_container'></div>

            <button> Continuar </button>
        </div>
       
    )
}

export default Question