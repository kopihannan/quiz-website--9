import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizContainer from './QuizContainer';
import './Quiz.css'
const Quiz = () => {
    const quizs = useLoaderData();
    const allQuiz = quizs.data;
    return (
        <div className='quiz-container my-14'>
          {
            allQuiz.map(quiz=> <QuizContainer key={quiz.id} quiz={quiz}></QuizContainer>)
          }
        </div>
    );
};

export default Quiz;