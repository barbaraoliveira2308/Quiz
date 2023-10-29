import { useContext, useEffect } from 'react';
import { QuizContext } from './context/quiz';
import Welcome from './components/Welcome';

import './App.css';
import Question from './components/Question';



function App() {

  const [quizState, dispatch] = useContext(QuizContext)
  useEffect(() => {
    dispatch({ type: "RECORDER_QUESTIONS" })
  }, [])

  return (

    <div className='App'>
      <h1> Quiz de Programação</h1>

      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Playing" && < Question />}

    </div>


  )
}

export default App
