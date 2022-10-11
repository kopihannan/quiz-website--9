import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

const Question = ({ data }) => {
    const option = data.options;
    // console.log(option);
    const { question } = data;
    const correct = data.correctAnswer;

    const correctAns = (e) => {
        const questions = e.target.value;
        if (questions === correct) {
            toast.success('Corrcet Answer', {
                position: toast.POSITION.TOP_RIGHT,
            });
        }
        else {
            toast.error('failed!!!', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
    }

    const eyeBtn =()=>{
        const currentValue = correct;
        if(currentValue){
            toast.success(currentValue, {
                position: toast.POSITION.TOP_LEFT,
            });
        }
    }

    return (
        <div>
            <ToastContainer />
            <div className='text-center m-3 flex justify-center'>
                <div className='w-1/2 border rounded shadow bg-orange-100'>
                    <h1 className='text-2xl font-semibold py-4'>{question}</h1>
                    <hr />
                    <div className='p-8'>
                        <div className='flex justify-between px-5 text-lg font-medium sm: flex flex-wrap text-center'>
                            <div className='sm: mb-5'><input onClick={correctAns} type="radio" value={option[0]} name="question" /> {option[0]} </div>
                            <div><input onClick={correctAns} type="radio" value={option[1]} name="question" />  {option[1]} </div>
                        </div>
                        <div className='flex justify-between px-5 text-lg font-medium mt-6 sm: flex flex-wrap'>
                            <div className='sm: mb-5'><input onClick={correctAns} type="radio" value={option[2]} name="question" />  {option[2]} </div>
                            <div><input onClick={correctAns} type="radio" value={option[3]} name="question" />  {option[3]} </div>
                        </div>
                    </div>
                    <div className='pb-6'>
                        <button className='text-lime-600 ease-in duration-300 hover:text-lime-800' onClick={eyeBtn}><FontAwesomeIcon icon={faEye} /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Question;