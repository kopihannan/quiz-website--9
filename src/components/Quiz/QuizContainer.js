import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen, faCoffee } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './QuizContainer.css'
import { Link } from 'react-router-dom';
const QuizContainer = ({quiz}) => {
    const {logo, name , total, id } = quiz;

    return (
        <div className=''>
            <div className="flex justify-center items-center py-8 bg-blue-lightest">
                <div id="app" className="bg-white w-128 h-60 rounded shadow-md flex card text-grey-darkest">
                    <img className='w-1/2 h-full rounded-l-sm' src={logo} alt="" />
                    <div className="w-full flex flex-col">
                        <div className="p-4 pb-0 flex-1">
                            <h3 className="mb-1 text-grey-darkest text-2xl font-semibold">{name}</h3>
                            <div className="flex items-center mt-4">
                                <div className="px-2 text-xs flex items-center">
                                <FontAwesomeIcon className='pr-2 text-base' icon={faBookOpen} /> <h2 className='font-medium text-lg' >Total Quiz: {total}</h2>
                                </div>
                            </div>
                        </div>
                        <div className="bg-grey-lighter p-3 flex items-center justify-between transition hover:bg-grey-light">
                            <button className='bg-slate-300 w-4/5 rounded py-1 font-medium'><Link to={`/${id}`}>Start Practice</Link></button>
                            <i className="fas fa-chevron-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuizContainer;