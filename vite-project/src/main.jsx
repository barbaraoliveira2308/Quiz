import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { QuizProvider } from './context/quiz'; //foi chamado no man pois esta sendo usado em toda a aplicação

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QuizProvider> 
      <App />
    </QuizProvider>

  </React.StrictMode>,
)
//encapsulamento do App 