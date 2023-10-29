import React from 'react';
import { useContext } from 'react'; //hulk para consumir o contexto
import { QuizContext } from '../context/quiz';
import Options from './options';
import './Question.css'


const Question = () => {
    const [quizState, dispatch] = useContext(QuizContext)
    const currentQuestion = quizState.questions[quizState.currentQuestion]
    const onselectOption =() => {
        console.log("teste")
    }
    return (

        <div id='question'>
            <p> Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>{/* foi inserido para demostrar em qual pergunta voce esta  */}
            <h2>{currentQuestion.question} </h2>

            <div id='options_container'></div>
            {currentQuestion.options.map((options) => (
                <Options 
                options={options} 
                key={options}
                answer =  {currentQuestion.answer} 
                selectOption ={()=> onselectOption()}/>
            ))}
            {quizState.ansawerSelected && (
                <button onClick={() => dispatch({ type: "CHANGE_QUESTION" })}> Continuar </button>
            )}
            
        </div>

    )
}

export default Question