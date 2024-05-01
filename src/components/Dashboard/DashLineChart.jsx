import React, { PureComponent } from 'react';
import { AreaChart, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { hour: "00:00", sales: 0 },
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

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        const sales = payload[0].value;
        return (
            <div className="flex flex-col px-4 py-1 justify-center items-center">
                <p className="text-xs text-white text-opacity-80">Sales</p>
                <p className="text-base font-semibold text-white">{sales}</p>
            </div>
        );
    }

    return null;
};

const CustomDot = (props) => {
    const { cx, cy } = props;

    return (
        <>
            <circle cx={cx} cy={cy} r={6} fill="#AE8FF7" />
            <circle cx={cx} cy={cy} r={3} fill="white" />
        </>
    );
};

const DashLineChart = () => {
    return (
        <ResponsiveContainer>
            <AreaChart width={'100%'} height={255} data={data} className='bg-white w-full'>
                <defs>
                    <linearGradient id="colorUv" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#5BC4FF" />
                        <stop offset="100%" stopColor="#FF5BEF" />
                    </linearGradient>
                </defs>
                <CartesianGrid vertical={false} stroke='#030229' strokeOpacity={0.05} />
                <XAxis
                    dataKey="hour"
                    className='text-[12px] '
                    tick={{ fill: '#030229', opacity: 0.7 }}
                    tickLine={false}
                    axisLine={false}
                    tickMargin={15}
                    padding={{ left: 4, right: 4 }}
                />
                <YAxis
                    className='text-[12px]'
                    tick={{ fill: '#030229', opacity: 0.7 }}
                    tickLine={false}
                    axisLine={false}
                    tickMargin={15}
                    domain={[0, 3000]}
                />
                <Tooltip
                    content={<CustomTooltip />}
                    offset={10}
                    wrapperStyle={{ backgroundColor: '#030229', borderRadius: 8 }}
                />
                <Area
                    type="monotone"
                    dataKey="sales"
                    stroke="url(#colorUv)"
                    fill="url(#colorUv)"
                    fillOpacity={0.1}
                    strokeWidth={4}
                    dot={CustomDot}
                />
            </AreaChart>
        </ResponsiveContainer>
    );
}


export default DashLineChart;