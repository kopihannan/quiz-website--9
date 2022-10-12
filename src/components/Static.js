import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const Static = () => {
    const chartLoader = useLoaderData()
    const chartLoaderData = chartLoader.data;
    return (
        <div className='w-full flex justify-center items-center mt-8 '>
            <div className=''>
                <LineChart className='bg-lime-100 rounded' width={700} height={450} data={chartLoaderData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="total" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </div>
        </div>
    );
};

export default Static;