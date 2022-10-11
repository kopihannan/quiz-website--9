import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';


const SingleQuiz = () => {
    const singleQuizs = useLoaderData()
    const singleQuiz = singleQuizs.data;
    const allQuestion = singleQuiz.questions;

    return (
        <div>
            {
                allQuestion.map(data => <Question key={data.id} data={data}></Question>)
            }
        </div>
    );
};

export default SingleQuiz;