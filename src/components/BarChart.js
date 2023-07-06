import React from 'react'
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';
export const BarCharts = () => {
    const data = [
        { name: 'Geeksforgeeks', students: 400 },
        { name: 'Technical scripter', students: 700 },
        { name: 'Geek-i-knack', students: 200 },
        { name: 'Geek-i-knack', students: 200 },
        { name: 'Geek-i-knack', students: 200 },
        { name: 'Geek-i-knack', students: 200 },
        { name: 'Geek-i-knack', students: 200 },
        { name: 'Geek-i-knack', students: 200 },
        { name: 'Geek-i-knack', students: 200 },
        { name: 'Geek-i-knack', students: 200 },
        { name: 'Geek-i-knack', students: 200 },
        { name: 'Geek-o-mania', students: 1000 }
    ];
  return (
    <BarChart width={320} height={350} data={data}>
            <Bar dataKey="students" fill="green" />
            {/* <CartesianGrid  /> */}
            <XAxis dataKey="name" />
            {/* <YAxis /> */}
        </BarChart>
  )
}
