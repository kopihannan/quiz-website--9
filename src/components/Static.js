import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Static = () => {
    const chartLoader = useLoaderData()
    const chartLoaderData = chartLoader.data;
    return (
        <div>
            {
                chartLoaderData.map(chart => console.log(chart))
            }
            <h1>hello</h1>
        </div>
    );
};

export default Static;