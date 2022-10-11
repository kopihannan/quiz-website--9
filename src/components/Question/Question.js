import React from 'react';

const Question = ({ data }) => {
    const option = data.options;

    console.log(data);

    const { question } = data;

    return (
        <div>
            {/* {
                option.map(allOption => console.log(allOption))
            } */}
            <div className='text-center m-3 flex justify-center'>
                <div className='w-1/2 border rounded shadow bg-cyan-100'>
                    <h1 className='text-2xl font-semibold py-4'>{question}</h1>
                    <hr />
                    <div className='p-8'>
                        <div className='flex justify-between px-5 text-lg font-medium'>
                            <div><input type="radio" value="Male" name="gender" /> {option[0]} </div>
                            <div><input type="radio" value="Female" name="gender" />  {option[1]} </div>
                        </div>
                        <div className='flex justify-between px-5 text-lg font-medium mt-6'>
                            <div><input type="radio" value="Male" name="gender" />  {option[2]} </div>
                            <div><input type="radio" value="Female" name="gender" />  {option[3]} </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Question;