import React, { useContext } from 'react';
import { QuizContext } from '../context/quiz';
import './Options.css';

const Options = ({options, selectOption, answer}) => {
   const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className='options'>
      <p> {options} </p>
    </div>
  );
}

export default Options;
