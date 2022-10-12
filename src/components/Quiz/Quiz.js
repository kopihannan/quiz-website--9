import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizContainer from './QuizContainer';
import './Quiz.css'
const Quiz = () => {
  const quizs = useLoaderData();
  const allQuiz = quizs.data;
  return (
    <div>
      <div className='flex justify-center mt-3'>
        <p className='w-3/5 text-justify font-medium'>“Don’t ever let someone tell you, you can’t do something. Not even me. You got a dream, you got to protect it. People can’t do something themselves, they want to tell you you can’t do it. You want something, go get it. Period.”</p>
      </div>
      <div className='quiz-container my-14'>
        {
          allQuiz.map(quiz => <QuizContainer key={quiz.id} quiz={quiz}></QuizContainer>)
        }
      </div>
    </div>
  );
};

export default Quiz;