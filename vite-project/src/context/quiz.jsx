import { createContext, useReducer } from "react";//para iniciar a criação do contexto 

import questions from '../data/question'


const STAGES = ["start", "Playing", "End"]

const initialState = {
    gameStage: STAGES[1], // Alterado para "Playing" em vez de "Start"
    questions,
    currentQuestion: 0,
  };

const quizReducer = (state, action) => { 
    console.log(state, action)
    switch (action.type) {
       
        case "CHANGE_STATE":
            return {
                ...state, //estagio total, serve para salvar os estagios  anteriores da pagina 
            gameStage: STAGES[1], //primeiro estagio 
                
                };
                default:
            return state;
            };
      
    }

export const QuizContext = createContext() //exporta o contexto e chama o huck createContext() //su

export const QuizProvider = ({ children }) => { // traz contesto para os componentes //su
    //provider foi ultilizado para criar contexto na aplicação 


    const value = useReducer(quizReducer, initialState); // cria um valor para o context

    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}