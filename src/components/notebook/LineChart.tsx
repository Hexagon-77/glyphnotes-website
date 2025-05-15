
import React from 'react';
import {
  LineChart as RechartLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const generateWaveData = () => {
  const data = [];
  for (let i = 0; i < 50; i++) {
    const x = i * 0.2;
    const psi1 = Math.sin(x) * Math.exp(-x/10);
    const psi2 = Math.sin(2*x) * Math.exp(-x/10) * 0.5;
    data.push({
      x: x.toFixed(1),
      '1s': psi1,
      '2p': psi2,
    });
  }
  return data;
};

const data = generateWaveData();

const LineChart = () => {
  return (
    <div className="h-60">
      <ResponsiveContainer width="100%" height="100%">
        <RechartLineChart
          data={data}
          margin={{
            top: 5,
            right: 5,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          <XAxis dataKey="x" stroke="#aaa" fontSize={10} />
          <YAxis stroke="#aaa" fontSize={10} />
          <Tooltip 
            contentStyle={{ backgroundColor: '#111', borderColor: '#333' }}
            labelStyle={{ color: '#ddd' }}
          />
          <Line type="monotone" dataKey="1s" stroke="#45DAFF" dot={false} strokeWidth={2} />
          <Line type="monotone" dataKey="2p" stroke="#B195FF" dot={false} strokeWidth={2} />
        </RechartLineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChart;
