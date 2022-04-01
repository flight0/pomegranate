import React from "react";

import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  ResponsiveContainer,
  Legend,
  BarChart,
  Bar,
} from "recharts";
const data = [
  {
    name: "00:00",
    uv: 4000,
    pv: 2400,
  },
  {
    name: "01:00",
    uv: 3000,
    pv: 1398,
  },
  {
    name: "02:00",
    uv: 2000,
    pv: 9800,
  },
  {
    name: "03:00",
    uv: 2780,
    pv: 3908,
  },
  {
    name: "04:00",
    uv: 1890,
    pv: 4800,
  },
  {
    name: "05:00",
    uv: 2390,
    pv: 3800,
  },
  {
    name: "06:00",
    uv: 3490,
    pv: 4300,
  },
  {
    name: "02:00",
    uv: 2000,
    pv: 9800,
  },
  {
    name: "03:00",
    uv: 2780,
    pv: 3908,
  },
  {
    name: "04:00",
    uv: 1890,
    pv: 4800,
  },
  {
    name: "05:00",
    uv: 2390,
    pv: 3800,
  },
  {
    name: "06:00",
    uv: 3490,
    pv: 4300,
  },
];
const Chart = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-white rounded-md">
        <div className="border-b border-slate-100 p-3">
          <span>Visitor</span>
        </div>
        <div className="p-2 h-64 text-sm ">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend verticalAlign="bottom" height={36} />
              <Area
                type="monotone"
                dataKey="uv"
                stroke="#8884d8"
                fillOpacity={1}
                fill="url(#colorUv)"
              />
              <Area
                type="monotone"
                dataKey="pv"
                stroke="#82ca9d"
                fillOpacity={1}
                fill="url(#colorPv)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="bg-white rounded-md">
        <div className="border-b border-slate-100 p-3">
          <span>Visitor</span>
        </div>
        <div className="p-2 h-64 text-sm ">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill="#8884d8" />
              <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Chart;
