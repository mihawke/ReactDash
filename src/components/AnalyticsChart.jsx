import React from 'react'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip, Label } from 'recharts';


const AnalyticsChart = () => {

    const data = [
        { name: 'Sales', value: 400 },
        { name: 'Distribute', value: 300 },
        { name: 'Return', value: 300 },
        { name: 'Remaining', value: 200 },
    ];
    const COLORS = ['#5B93FF', '#FFD66B', '#FF8F6B', '#FFFFFF'];

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            const sales = payload[0].value;
            const label = payload[0].name;

            return (
                <div className="flex flex-col px-4 py-1 justify-center items-center">
                    <p className="text-xs text-white text-opacity-80">{label}</p>
                    <p className="text-base font-semibold text-white">{sales}</p>
                </div>
            );
        }
    
        return null;
    };

    return (
        <PieChart width={200} height={200} className='bg-white flex justify-center items-center'>
            <Pie
                data={data}
                innerRadius={60}
                outerRadius={90}
                fill="#8884d8"
                dataKey="value"
                startAngle={90}
                endAngle={-270}
                stroke="none"
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
                <Label
                    value="Transactions"
                    position="center"
                    className='text-slate-900 text-opacity-70 text-base font-semibold'
                    fontSize={14}
                />
            </Pie>
            <Tooltip
                    content={<CustomTooltip />}
                    offset={10}
                    wrapperStyle={{ backgroundColor: '#030229', borderRadius: 8 }}
                />
        </PieChart>
    )
}

export default AnalyticsChart