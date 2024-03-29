import { createContext, useReducer } from "react";//para iniciar a criação do contexto 

import questions from '../data/question'


const STAGES = ["Start", "Playing", "End"]

const initialState = {
    gameStage: STAGES[0], // Alterado para primeira posição do ou "Playing" em vez de "Start"
    questions,
    currentQuestion: 0,
    score: 0,
    answerSelected: false,
};

const quizReducer = (state, action) => {
    console.log(state, action)
    switch (action.type) {

        case "CHANGE_STATE":
            return {
                ...state, //estagio total, serve para salvar os estagios  anteriores da pagina 
                gameStage: STAGES[1], //primeiro estagio 

            };
        case "REORDER_QUESTIONS":
            const reorderedQuestions = questions.sort(() => {
                return Math.random() - 0.5; {/**Reordena o array das perguntas */}
            });
            return {
                ...state,
            questions: reorderedQuestions,
            }
            case "CHANGE_QUESTION":
                const nextQuestion = state.currentQuestion +1;
            let endGame = false;

            if(!questions[nextQuestion]){
                endGame = true;
            }
                return{
                    ...state, 
                 currentQuestion: nextQuestion,
                 gameStage: endGame ? STAGES[2] : state.gameStage, 
                };
            case "NEW_GAME":
               return initialState;

        default:
            return state;


    }
}
    export const QuizContext = createContext() //exporta o contexto e chama o huck createContext() //su

    export const QuizProvider = ({ children }) => { // traz contesto para os componentes //su
        //provider foi ultilizado para criar contexto na aplicação 


        const value = useReducer(quizReducer, initialState); // cria um valor para o context

        return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
    }