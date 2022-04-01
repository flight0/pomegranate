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

const Dashboard = () => {
  // const [chartType, setChartTYpe] = useState('area');
  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        <div className="shadow-md h-32 bg-white rounded-md p-3 flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <span className="text-base font-medium">Total Users</span>
            <span className="bg-cyan-700 rounded text-gray-100 text-xs px-2 py-0.5">
              Today
            </span>
          </div>
          <div>
            <span className="text-2xl font-medium">13,456</span>
          </div>
          <div className="flex text-sm items-center">
            <span className="text-sm text-green-600 bg-green-100 px-1 py-0.5 rounded-md">
              +25%
            </span>
            <span className="text-gray-400 ml-2">Since yesterday</span>
          </div>
        </div>
        <div className="shadow-md h-32 bg-white rounded-md p-3 flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <span className="text-base font-medium">Sales Today</span>
            <span className="bg-cyan-700 rounded text-gray-100 text-xs px-2 py-0.5">
              Today
            </span>
          </div>
          <div>
            <span className="text-2xl font-medium">$2345.56</span>
          </div>
          <div className="flex text-sm items-center">
            <span className="text-sm text-red-600 bg-red-100 px-1 py-0.5 rounded-md">
              -35%
            </span>
            <span className="text-gray-400 ml-2">Since last month</span>
          </div>
        </div>
        <div className="shadow-md h-32 bg-white rounded-md p-3 flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <span className="text-base font-medium">New Orders</span>
            <span className="bg-cyan-700 rounded text-gray-100 text-xs px-2 py-0.5">
              Today
            </span>
          </div>
          <div>
            <span className="text-2xl font-medium">1,236</span>
          </div>
          <div className="flex text-sm items-center">
            <span className="text-sm text-green-600 bg-green-100 px-1 py-0.5 rounded-md">
              +7%
            </span>
            <span className="text-gray-400 ml-2">Since yesterday</span>
          </div>
        </div>
        <div className="shadow-md h-32 bg-white rounded-md p-3 flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <span className="text-base font-medium">Visitors</span>
            <span className="bg-cyan-700 rounded text-gray-100 text-xs px-2 py-0.5">
              Monthly
            </span>
          </div>
          <div>
            <span className="text-2xl font-medium">156</span>
          </div>
          <div className="flex text-sm items-center">
            <span className="text-sm text-red-600 bg-red-100 px-1 py-0.5 rounded-md">
              -15%
            </span>
            <span className="text-gray-400 ml-2">Since yesterday</span>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-white rounded-md">
        <div className="border-b border-slate-100 p-3">
          <span>Visitor</span>
        </div>
        <div className="grid grid-cols-2 h-64 text-sm">
          <div className="p-2">
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
          <div className="p-2 ">
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

      <table className="w-full mt-6 shadow-md rounded-md">
        <thead className="bg-slate-50 border-b border-slate-200">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-medium text-slate-900 rounded-tl-md">
              Song
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-slate-900">
              Artist
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-slate-900 rounded-tr-md">
              Year
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="odd:bg-white even:bg-slate-50">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">
              The Sliding Mr. Bones (Next Stop, Pottersville)
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">
              Malcolm Lockyer
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">
              1961
            </td>
          </tr>
          <tr className="odd:bg-white even:bg-slate-50">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">
              Witchy Woman
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">
              The Eagles
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">
              1972
            </td>
          </tr>
          <tr className="odd:bg-white even:bg-slate-50">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">
              Shining Star
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">
              Earth, Wind, and Fire
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">
              1975
            </td>
          </tr>
          <tr className="odd:bg-white even:bg-slate-50">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">
              Shining Star
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">
              Earth, Wind, and Fire
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">
              1975
            </td>
          </tr>
          <tr className="odd:bg-white even:bg-slate-50">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">
              Shining Star
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">
              Earth, Wind, and Fire
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">
              1975
            </td>
          </tr>
          <tr className="odd:bg-white even:bg-slate-50">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900 rounded-bl-md">
              Shining Star
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">
              Earth, Wind, and Fire
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900 rounded-br-md">
              1975
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Dashboard;
