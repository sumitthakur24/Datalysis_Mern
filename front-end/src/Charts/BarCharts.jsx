import React from "react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import chartData from "./Chart_Data.json";

const data = [
  { Year: 2020, Sale: 1037, Expenses: 1217, Profit: 294 },
  { Year: 2019, Sale: 924, Expenses: 475, Profit: 326 },
  { Year: 2019, Sale: 725, Expenses: 893, Profit: 411 },
  { Year: 2019, Sale: 1335, Expenses: 1886, Profit: 268 },
  { Year: 2022, Sale: 814, Expenses: 641, Profit: 448 },
  { Year: 2022, Sale: 547, Expenses: 1224, Profit: 376 },
  { Year: 2022, Sale: 929, Expenses: 1885, Profit: 355 },
];

export default function Barchart() {
  return (
    <ResponsiveContainer width="100%" aspect={2.5}>
      <BarChart data={data} width={700} height={700}>
        <XAxis dataKey="Year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Sale" fill="#8884d8" />
        <Bar dataKey="Expenses" fill="#82ca9d" />
        <Bar dataKey="Profit" fill="#a4de6c" />
      </BarChart>
    </ResponsiveContainer>
  );
}
