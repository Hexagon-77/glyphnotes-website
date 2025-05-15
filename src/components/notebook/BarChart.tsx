
import React from 'react';
import {
  BarChart as RechartBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const data = [
  {
    name: 'n=1',
    energy: 13.6,
  },
  {
    name: 'n=2',
    energy: 3.4,
  },
  {
    name: 'n=3',
    energy: 1.51,
  },
  {
    name: 'n=4',
    energy: 0.85,
  },
  {
    name: 'n=5',
    energy: 0.54,
  },
  {
    name: 'n=∞',
    energy: 0,
  },
];

const BarChart = () => {
  return (
    <div className="h-60">
      <ResponsiveContainer width="100%" height="100%">
        <RechartBarChart
          data={data}
          margin={{
            top: 5,
            right: 5,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          <XAxis dataKey="name" stroke="#aaa" fontSize={10} />
          <YAxis stroke="#aaa" fontSize={10} />
          <Tooltip 
            contentStyle={{ backgroundColor: '#111', borderColor: '#333' }}
            labelStyle={{ color: '#ddd' }}
            itemStyle={{ color: '#24DBB3' }}
          />
          <Bar dataKey="energy" fill="#24DBB3" radius={[2, 2, 0, 0]} />
        </RechartBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChart;
