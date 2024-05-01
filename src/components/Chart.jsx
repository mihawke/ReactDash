import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { hour: "00:00", sales: 100 },
    { hour: "02:00", sales: 200 },
    { hour: "04:00", sales: 250 },
    { hour: "06:00", sales: 400 },
    { hour: "08:00", sales: 800 },
    { hour: "10:00", sales: 1200 },
    { hour: "12:00", sales: 1800 },
    { hour: "14:00", sales: 2200 },
    { hour: "16:00", sales: 2400 },
    { hour: "18:00", sales: 2000 },
    { hour: "20:00", sales: 1600 },
    { hour: "22:00", sales: 1200 },
];

const Chart = () => {
    return (
        <div className=''>
            <LineChart width={600} height={300} data={data}>
                <XAxis dataKey="hour" className='text-[12px] font-semibold' />
                <YAxis className='text-[12px] font-semibold' />
                <Tooltip />
                <Line type="monotone" dataKey="sales" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
        </div>
    );
}


export default Chart;