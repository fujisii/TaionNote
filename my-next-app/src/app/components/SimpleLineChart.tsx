"use client";

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

// サンプルデータ
const data = [
  { name: 'A', value: 400 },
  { name: 'B', value: 200 },
  { name: 'C', value: 300 },
  { name: 'D', value: 350 },
  { name: 'E', value: 300 },
];

// グラフコンポーネント
const SimpleLineChart: React.FC = () => {
  return (
    <LineChart width={400} height={400} data={data}>
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="value" stroke="#8884d8" />
    </LineChart>
  );
};

export default SimpleLineChart;