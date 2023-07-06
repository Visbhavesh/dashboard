import React from 'react'
import { AreaChart, Area, CartesianGrid, XAxis, YAxis } from 'recharts';

export const AreaCharts = () => {
    const data = [
        {name: 'Geeksforgeeks', students: 400},
        {name: 'Technical scripter', students: 700},
        {name: 'Geek-i-knack', students: 200},
        {name: 'Geek-i-knack', students: 300},
        {name: 'Geek-i-knack', students: 400},
        {name: 'Geek-i-knack', students: 500},
        {name: 'Geek-i-knack', students: 600},
        {name: 'Geek-i-knack', students: 700},
        {name: 'Geek-i-knack', students: 100},
        {name: 'Geek-i-knack', students: 200},
        {name: 'Geek-o-mania', students: 1000}
      ];
  return (

    <div className=''>
        <div>Report</div>
<AreaChart width={600} height={320} data={data}>
    <Area dataKey="students" fill="blue" stroke="green" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="name" />
    <YAxis />
  </AreaChart>
  </div>
  )
}
