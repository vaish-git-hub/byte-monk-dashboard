// src/components/PieChartView.js
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const PieChartView = ({ data = [] }) => { // Default value for data
    console.log('Rendering PieChartView with data:', data); // Debugging line

    if (data.length === 0) {
        return <div>No data available</div>; // Handling empty data case
    }

    const pieData = data.map(item => ({
        name: item.category,
        value: item.activityCount,
    }));

    return (
        <PieChart width={400} height={400}>
            <Pie
                data={pieData}
                cx={200}
                cy={200}
                outerRadius={150}
                fill="#8884d8"
                dataKey="value"
            >
                {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            <Tooltip />
            <Legend />
        </PieChart>
    );
};

export default PieChartView;
