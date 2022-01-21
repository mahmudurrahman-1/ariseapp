import React, { Component } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    activeUser: 1,
    growth: 1,
  },
  {
    name: "Feb",
    activeUser: 120,
    growth: 2,
  },
  {
    name: "Mar",
    activeUser: 130,
    growth: 9,
  },
  {
    name: "Apr",

    activeUser: 140,
    growth: 4,
  },
  {
    name: "May",
    growth: 5,
    activeUser: 150,
  },
  {
    name: "Jun",
    growth: 6,
    activeUser: 290,
  },
  {
    name: "Jul",
    growth: 7,

    activeUser: 293,
  },
  {
    name: "Aug",
    growth: 4,

    activeUser: 94,
  },
  {
    name: "Sep",
    growth: 9,

    activeUser: 300,
  },
  {
    name: "Oct",
    growth: 5,

    activeUser: 150,
  },
  {
    name: "Nov",
    activeUser: 450,
    growth: 11,
  },
  {
    growth: 2,

    name: "Dec",
    activeUser: 50,
  },
];

export default class Visitors extends Component {
  static demoUrl = "https://codesandbox.io/s/tiny-line-chart-r5z0f";

  render() {
    return (
      <ResponsiveContainer width="100%" height="112%">
        <LineChart width={300} height={100} data={data}>
          <XAxis dataKey={"name"} />
          <YAxis dataKey={"growth"} dataKey={"growth"} />
          <Line
            type="monotone"
            dataKey="activeUser"
            stroke="#1abc9c"
            strokeWidth={2}
            fill="#ff000f"
          />
          <Line
            type="monotone"
            dataKey="growth"
            stroke="#ff000f"
            strokeWidth={2}
            fill="#fff"
          />
          <CartesianGrid strokeDasharray="5 5" />
          <Legend />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
